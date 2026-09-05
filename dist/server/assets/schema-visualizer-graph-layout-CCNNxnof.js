const DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT = {
	nodeHeaderHeight: 40,
	columnHeight: 28,
	bodyPadding: 8,
	maxVisibleColumns: 20,
	edgeStubGap: 16,
	pathLaneSpacing: 10
};
function getColumnRowIndex(node, columnName, expanded, maxVisibleColumns) {
	const colIndex = node.columns.findIndex((column) => column.name === columnName);
	if (colIndex === -1) return 0;
	const visibleLimit = expanded ? node.columns.length : Math.min(node.columns.length, maxVisibleColumns);
	if (colIndex < visibleLimit) return colIndex;
	return Math.max(0, visibleLimit - 1);
}
function getColumnAnchorY(node, columnName, expanded, layout) {
	const rowIndex = getColumnRowIndex(node, columnName, expanded, layout.maxVisibleColumns);
	return node.y + layout.nodeHeaderHeight + layout.bodyPadding + rowIndex * layout.columnHeight + layout.columnHeight / 2;
}
function nodeToRect(node, clearance) {
	return {
		id: node.id,
		x: node.x - clearance,
		y: node.y - clearance,
		width: node.width + clearance * 2,
		height: node.height + clearance * 2
	};
}
function verticalSegmentHitsRect(x, y1, y2, rect) {
	const minY = Math.min(y1, y2);
	const maxY = Math.max(y1, y2);
	return x >= rect.x && x <= rect.x + rect.width && maxY >= rect.y && minY <= rect.y + rect.height;
}
function horizontalSegmentHitsRect(y, x1, x2, rect) {
	const minX = Math.min(x1, x2);
	const maxX = Math.max(x1, x2);
	return y >= rect.y && y <= rect.y + rect.height && maxX >= rect.x && minX <= rect.x + rect.width;
}
function verticalSegmentClear(x, y1, y2, obstacles, ignoreIds) {
	return !obstacles.some((rect) => !ignoreIds.has(rect.id) && verticalSegmentHitsRect(x, y1, y2, rect));
}
function horizontalSegmentClear(y, x1, x2, obstacles, ignoreIds) {
	return !obstacles.some((rect) => !ignoreIds.has(rect.id) && horizontalSegmentHitsRect(y, x1, x2, rect));
}
function pathSegmentToRect(segment, padding) {
	if (segment.kind === "horizontal") {
		const minX = Math.min(segment.x1, segment.x2);
		const maxX = Math.max(segment.x1, segment.x2);
		return {
			id: "path",
			x: minX - padding,
			y: segment.y - padding,
			width: maxX - minX + padding * 2,
			height: padding * 2
		};
	}
	const minY = Math.min(segment.y1, segment.y2);
	const maxY = Math.max(segment.y1, segment.y2);
	return {
		id: "path",
		x: segment.x - padding,
		y: minY - padding,
		width: padding * 2,
		height: maxY - minY + padding * 2
	};
}
function corridorXForBoundary(boundaryLayer, metrics, laneOffset) {
	const mapped = metrics.corridorXByBoundary.get(boundaryLayer);
	if (mapped != null) return mapped + laneOffset;
	return metrics.startX + boundaryLayer * metrics.columnStride + metrics.nodeWidth + metrics.columnGap / 2 + laneOffset;
}
function buildCorridorPath(from, to, fromLayer, toLayer, metrics, laneOffset, obstacles, ignoreIds) {
	const { x: fx, y: fy } = from;
	const { x: tx, y: ty } = to;
	const minLayer = Math.min(fromLayer, toLayer);
	const maxLayer = Math.max(fromLayer, toLayer);
	const corridorCandidates = [];
	for (let boundary = minLayer; boundary < maxLayer; boundary += 1) corridorCandidates.push(corridorXForBoundary(boundary, metrics, laneOffset));
	corridorCandidates.push(corridorXForBoundary(maxLayer, metrics, laneOffset));
	for (const corridorX of corridorCandidates) {
		const leftX = Math.min(fx, tx, corridorX);
		const rightX = Math.max(fx, tx, corridorX);
		if (verticalSegmentClear(corridorX, fy, ty, obstacles, ignoreIds) && horizontalSegmentClear(fy, fx, corridorX, obstacles, ignoreIds) && horizontalSegmentClear(ty, corridorX, tx, obstacles, ignoreIds)) return {
			d: `M ${fx} ${fy} H ${corridorX} V ${ty} H ${tx}`,
			segments: [
				{
					kind: "horizontal",
					y: fy,
					x1: fx,
					x2: corridorX
				},
				{
					kind: "vertical",
					x: corridorX,
					y1: fy,
					y2: ty
				},
				{
					kind: "horizontal",
					y: ty,
					x1: corridorX,
					x2: tx
				}
			]
		};
		const routeY = (fy + ty) / 2;
		if (horizontalSegmentClear(routeY, leftX, rightX, obstacles, ignoreIds) && horizontalSegmentClear(fy, fx, corridorX, obstacles, ignoreIds) && horizontalSegmentClear(ty, corridorX, tx, obstacles, ignoreIds)) return {
			d: `M ${fx} ${fy} H ${corridorX} V ${routeY} H ${tx} V ${ty}`,
			segments: [
				{
					kind: "horizontal",
					y: fy,
					x1: fx,
					x2: corridorX
				},
				{
					kind: "vertical",
					x: corridorX,
					y1: fy,
					y2: routeY
				},
				{
					kind: "horizontal",
					y: routeY,
					x1: corridorX,
					x2: tx
				},
				{
					kind: "vertical",
					x: tx,
					y1: routeY,
					y2: ty
				}
			]
		};
	}
	return null;
}
function buildSameLayerPath(from, to, fromNode, toNode, laneOffset, obstacles, ignoreIds) {
	const { x: fx, y: fy } = from;
	const { x: tx, y: ty } = to;
	const minY = Math.min(fromNode.y, toNode.y) - 32 + laneOffset;
	const maxY = Math.max(fromNode.y + fromNode.height, toNode.y + toNode.height) + 32 + laneOffset;
	const routeAbove = minY;
	const routeBelow = maxY;
	const routeY = Math.abs(routeAbove - fy) + Math.abs(routeAbove - ty) <= Math.abs(routeBelow - fy) + Math.abs(routeBelow - ty) ? routeAbove : routeBelow;
	const stubX = from.side === "right" ? Math.max(fx, tx) + DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT.edgeStubGap : Math.min(fx, tx) - DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT.edgeStubGap;
	if (horizontalSegmentClear(routeY, Math.min(stubX, fx, tx), Math.max(stubX, fx, tx), obstacles, ignoreIds)) return {
		d: `M ${fx} ${fy} H ${stubX} V ${routeY} H ${tx} V ${ty}`,
		segments: [
			{
				kind: "horizontal",
				y: fy,
				x1: fx,
				x2: stubX
			},
			{
				kind: "vertical",
				x: stubX,
				y1: fy,
				y2: routeY
			},
			{
				kind: "horizontal",
				y: routeY,
				x1: stubX,
				x2: tx
			},
			{
				kind: "vertical",
				x: tx,
				y1: routeY,
				y2: ty
			}
		]
	};
	return {
		d: `M ${fx} ${fy} H ${stubX} V ${ty} H ${tx}`,
		segments: [
			{
				kind: "horizontal",
				y: fy,
				x1: fx,
				x2: stubX
			},
			{
				kind: "vertical",
				x: stubX,
				y1: fy,
				y2: ty
			},
			{
				kind: "horizontal",
				y: ty,
				x1: stubX,
				x2: tx
			}
		]
	};
}
function buildRelationshipPath(fromNode, toNode, fromLayer, toLayer, fromColumn, toColumn, fromExpanded, toExpanded, laneOffset, metrics, obstacles, layout) {
	const fromY = getColumnAnchorY(fromNode, fromColumn, fromExpanded, layout);
	const toY = getColumnAnchorY(toNode, toColumn, toExpanded, layout);
	const fromOnRight = fromLayer >= toLayer;
	const from = {
		x: fromOnRight ? fromNode.x + fromNode.width : fromNode.x,
		y: fromY,
		side: fromOnRight ? "right" : "left"
	};
	const to = {
		x: fromOnRight ? toNode.x : toNode.x + toNode.width,
		y: toY,
		side: fromOnRight ? "left" : "right"
	};
	const ignoreIds = new Set([fromNode.id, toNode.id]);
	if (metrics && fromLayer !== toLayer) {
		const corridorPath$1 = buildCorridorPath(from, to, fromLayer, toLayer, metrics, laneOffset, obstacles, ignoreIds);
		if (corridorPath$1) return {
			...corridorPath$1,
			from,
			to
		};
	}
	if (fromLayer === toLayer) return {
		...buildSameLayerPath(from, to, fromNode, toNode, laneOffset, obstacles, ignoreIds),
		from,
		to
	};
	const corridorPath = metrics ? buildCorridorPath(from, to, fromLayer, toLayer, metrics, laneOffset, obstacles, ignoreIds) : null;
	if (corridorPath) return {
		...corridorPath,
		from,
		to
	};
	const midX = (from.x + to.x) / 2 + laneOffset;
	return {
		d: `M ${from.x} ${from.y} H ${midX} V ${to.y} H ${to.x}`,
		segments: [
			{
				kind: "horizontal",
				y: from.y,
				x1: from.x,
				x2: midX
			},
			{
				kind: "vertical",
				x: midX,
				y1: from.y,
				y2: to.y
			},
			{
				kind: "horizontal",
				y: to.y,
				x1: midX,
				x2: to.x
			}
		],
		from,
		to
	};
}
function buildCorridorLaneMap(relationships, nodeLayers) {
	const groups = /* @__PURE__ */ new Map();
	for (const relationship of relationships) {
		const fromLayer = nodeLayers.get(relationship.from) ?? 0;
		const toLayer = nodeLayers.get(relationship.to) ?? 0;
		const key = `${Math.min(fromLayer, toLayer)}:${Math.max(fromLayer, toLayer)}:${relationship.from}:${relationship.to}`;
		if (!groups.has(key)) groups.set(key, []);
		groups.get(key).push(relationship.constraintName);
	}
	const laneByConstraint = /* @__PURE__ */ new Map();
	for (const constraintNames of groups.values()) {
		const sorted = [...constraintNames].sort();
		sorted.forEach((constraintName, index) => {
			laneByConstraint.set(constraintName, (index - (sorted.length - 1) / 2) * DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT.pathLaneSpacing);
		});
	}
	return laneByConstraint;
}
function buildSchemaVisualizerRelationshipPaths(nodes, relationships, expandedNodeIds, layout = DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT, layoutMetrics, nodeLayers) {
	const nodeById = new Map(nodes.map((node) => [node.id, node]));
	const layers = nodeLayers ?? new Map(nodes.map((node) => [node.id, Math.round(node.x / 400)]));
	const laneByConstraint = buildCorridorLaneMap(relationships, layers);
	const sortedRelationships = [...relationships].sort((a, b) => (layers.get(a.from) ?? 0) - (layers.get(b.from) ?? 0) || (layers.get(a.to) ?? 0) - (layers.get(b.to) ?? 0) || a.from.localeCompare(b.from) || a.to.localeCompare(b.to) || a.fromColumn.localeCompare(b.fromColumn) || a.constraintName.localeCompare(b.constraintName));
	const nodeObstacles = nodes.map((node) => nodeToRect(node, 4));
	const pathObstacles = [];
	const paths = [];
	for (const relationship of sortedRelationships) {
		const fromNode = nodeById.get(relationship.from);
		const toNode = nodeById.get(relationship.to);
		if (!fromNode || !toNode) continue;
		const fromLayer = layers.get(relationship.from) ?? 0;
		const toLayer = layers.get(relationship.to) ?? 0;
		const laneOffset = laneByConstraint.get(relationship.constraintName) ?? 0;
		const { d, segments, from, to } = buildRelationshipPath(fromNode, toNode, fromLayer, toLayer, relationship.fromColumn, relationship.toColumn, expandedNodeIds.has(fromNode.id), expandedNodeIds.has(toNode.id), laneOffset, layoutMetrics, [...nodeObstacles, ...pathObstacles], layout);
		paths.push({
			d,
			from,
			to
		});
		for (const segment of segments) pathObstacles.push(pathSegmentToRect(segment, layout.pathLaneSpacing / 2));
	}
	return paths;
}
var DEFAULT_LAYOUT_OPTIONS = {
	startX: 100,
	startY: 100,
	columnGap: 120,
	rowGap: 48,
	componentGap: 140,
	innerGap: 32,
	maxNodesPerRow: 2
};
function buildConnectedComponents(nodeIds, relationships) {
	const adjacency = /* @__PURE__ */ new Map();
	for (const id of nodeIds) adjacency.set(id, /* @__PURE__ */ new Set());
	for (const relationship of relationships) {
		adjacency.get(relationship.from)?.add(relationship.to);
		adjacency.get(relationship.to)?.add(relationship.from);
	}
	const visited = /* @__PURE__ */ new Set();
	const components = [];
	for (const id of nodeIds) {
		if (visited.has(id)) continue;
		const stack = [id];
		const component = [];
		while (stack.length > 0) {
			const current = stack.pop();
			if (!current || visited.has(current)) continue;
			visited.add(current);
			component.push(current);
			for (const neighbor of adjacency.get(current) ?? []) if (!visited.has(neighbor)) stack.push(neighbor);
		}
		components.push(component);
	}
	return components.sort((a, b) => b.length - a.length);
}
function assignRelationshipLayers(componentIds, relationships) {
	const componentSet = new Set(componentIds);
	const relevant = relationships.filter((relationship) => componentSet.has(relationship.from) && componentSet.has(relationship.to));
	const layers = /* @__PURE__ */ new Map();
	for (const id of componentIds) layers.set(id, 0);
	let changed = true;
	let iterations = 0;
	while (changed && iterations < componentIds.length + 1) {
		changed = false;
		iterations += 1;
		for (const relationship of relevant) {
			const nextLayer = (layers.get(relationship.to) ?? 0) + 1;
			if ((layers.get(relationship.from) ?? 0) < nextLayer) {
				layers.set(relationship.from, nextLayer);
				changed = true;
			}
		}
	}
	return layers;
}
function compressRelationshipLayers(componentIds, relationships, layers) {
	const componentSet = new Set(componentIds);
	const relevant = relationships.filter((relationship) => componentSet.has(relationship.from) && componentSet.has(relationship.to));
	const parentsOf = /* @__PURE__ */ new Map();
	for (const id of componentIds) parentsOf.set(id, []);
	for (const relationship of relevant) parentsOf.get(relationship.from)?.push(relationship.to);
	const nextLayers = new Map(layers);
	let changed = true;
	while (changed) {
		changed = false;
		for (const id of componentIds) {
			const parents = parentsOf.get(id) ?? [];
			if (parents.length === 0) continue;
			const minLayer = Math.max(...parents.map((parentId) => (nextLayers.get(parentId) ?? 0) + 1));
			if ((nextLayers.get(id) ?? 0) > minLayer) {
				nextLayers.set(id, minLayer);
				changed = true;
			}
		}
	}
	return nextLayers;
}
function getLayerGroups(componentIds, layers, labels) {
	const layerGroups = /* @__PURE__ */ new Map();
	for (const id of componentIds) {
		const layer = layers.get(id) ?? 0;
		if (!layerGroups.has(layer)) layerGroups.set(layer, []);
		layerGroups.get(layer).push(id);
	}
	for (const [layer, ids] of layerGroups) {
		ids.sort((a, b) => (labels.get(a) ?? a).localeCompare(labels.get(b) ?? b));
		layerGroups.set(layer, ids);
	}
	return layerGroups;
}
function indexInLayer(layerGroups, id) {
	const layer = [...layerGroups.entries()].find(([, ids]) => ids.includes(id))?.[0];
	if (layer == null) return 0;
	return layerGroups.get(layer)?.indexOf(id) ?? 0;
}
function orderLayerGroups(componentIds, layers, relationships, labels) {
	const layerGroups = getLayerGroups(componentIds, layers, labels);
	const maxLayer = Math.max(...componentIds.map((id) => layers.get(id) ?? 0));
	const barycenterForParents = (id) => {
		const parents = relationships.filter((relationship) => relationship.from === id).map((relationship) => relationship.to);
		if (parents.length === 0) return indexInLayer(layerGroups, id);
		const parentIndices = parents.map((parentId) => indexInLayer(layerGroups, parentId));
		return parentIndices.reduce((sum, index) => sum + index, 0) / parentIndices.length;
	};
	const barycenterForChildren = (id) => {
		const children = relationships.filter((relationship) => relationship.to === id).map((relationship) => relationship.from);
		if (children.length === 0) return indexInLayer(layerGroups, id);
		const childIndices = children.map((childId) => indexInLayer(layerGroups, childId));
		return childIndices.reduce((sum, index) => sum + index, 0) / childIndices.length;
	};
	for (let pass = 0; pass < 12; pass += 1) {
		for (let layer = 1; layer <= maxLayer; layer += 1) {
			const sorted = [...layerGroups.get(layer) ?? []].sort((a, b) => barycenterForParents(a) - barycenterForParents(b));
			layerGroups.set(layer, sorted);
		}
		for (let layer = maxLayer - 1; layer >= 0; layer -= 1) {
			const sorted = [...layerGroups.get(layer) ?? []].sort((a, b) => barycenterForChildren(a) - barycenterForChildren(b));
			layerGroups.set(layer, sorted);
		}
	}
	return layerGroups;
}
function layoutGridComponent(componentIds, nodeById, originX, originY, columnGap, rowGap) {
	const positions = /* @__PURE__ */ new Map();
	const cols = Math.max(1, Math.ceil(Math.sqrt(componentIds.length * 1.6)));
	const maxNodeWidth = Math.max(...componentIds.map((id) => nodeById.get(id)?.width ?? 0));
	const columnStride = maxNodeWidth + columnGap;
	const rowHeights = [];
	for (let index = 0; index < componentIds.length; index += 1) {
		const row = Math.floor(index / cols);
		const height = nodeById.get(componentIds[index])?.height ?? 0;
		rowHeights[row] = Math.max(rowHeights[row] ?? 0, height);
	}
	let y = originY;
	for (let row = 0; row < rowHeights.length; row += 1) {
		let x = originX;
		for (let col = 0; col < cols; col += 1) {
			const index = row * cols + col;
			if (index >= componentIds.length) break;
			const id = componentIds[index];
			positions.set(id, {
				x,
				y
			});
			x += columnStride;
		}
		y += (rowHeights[row] ?? 0) + rowGap;
	}
	const rows = rowHeights.length;
	return {
		positions,
		width: Math.min(cols, componentIds.length) * maxNodeWidth + Math.max(0, Math.min(cols, componentIds.length) - 1) * columnGap,
		height: rowHeights.reduce((sum, rowHeight) => sum + rowHeight, 0) + Math.max(0, rows - 1) * rowGap
	};
}
function layoutLayerBlock(ids, nodeById, originX, originY, innerGap, rowGap, maxNodesPerRow, positions) {
	if (ids.length === 0) return {
		width: 0,
		height: 0
	};
	const nodesPerRow = Math.min(maxNodesPerRow, ids.length);
	const rowCount = Math.ceil(ids.length / nodesPerRow);
	const rowWidths = [];
	const rowHeights = [];
	for (let row = 0; row < rowCount; row += 1) {
		const rowIds = ids.slice(row * nodesPerRow, (row + 1) * nodesPerRow);
		rowWidths.push(rowIds.reduce((sum, id) => sum + (nodeById.get(id)?.width ?? 0), 0) + Math.max(0, rowIds.length - 1) * innerGap);
		rowHeights.push(Math.max(...rowIds.map((id) => nodeById.get(id)?.height ?? 0), 0));
	}
	const blockWidth = Math.max(...rowWidths, 0);
	const blockHeight = rowHeights.reduce((sum, height) => sum + height, 0) + Math.max(0, rowCount - 1) * rowGap;
	let y = originY;
	for (let row = 0; row < rowCount; row += 1) {
		const rowIds = ids.slice(row * nodesPerRow, (row + 1) * nodesPerRow);
		let x = originX;
		for (const id of rowIds) {
			const node = nodeById.get(id);
			if (!node) continue;
			positions.set(id, {
				x,
				y
			});
			x += node.width + innerGap;
		}
		y += (rowHeights[row] ?? 0) + rowGap;
	}
	return {
		width: blockWidth,
		height: blockHeight
	};
}
function layoutComponent(componentIds, nodeById, relationships, originX, originY, columnGap, rowGap, innerGap, maxNodesPerRow, layers) {
	const componentSet = new Set(componentIds);
	if (relationships.filter((relationship) => componentSet.has(relationship.from) && componentSet.has(relationship.to)).length === 0) return {
		...layoutGridComponent(componentIds, nodeById, originX, originY, columnGap, rowGap),
		layerStartX: new Map([[0, originX]]),
		corridorXByBoundary: /* @__PURE__ */ new Map()
	};
	const layerGroups = orderLayerGroups(componentIds, layers, relationships, new Map(componentIds.map((id) => [id, nodeById.get(id)?.label ?? id])));
	const layerNumbers = [...layerGroups.keys()].sort((a, b) => a - b);
	const positions = /* @__PURE__ */ new Map();
	const layerStartX = /* @__PURE__ */ new Map();
	const corridorXByBoundary = /* @__PURE__ */ new Map();
	const layerBlocks = layerNumbers.map((layer) => {
		const ids = layerGroups.get(layer) ?? [];
		return {
			layer,
			ids,
			...layoutLayerBlock(ids, nodeById, 0, 0, innerGap, rowGap, maxNodesPerRow, /* @__PURE__ */ new Map())
		};
	});
	const totalHeight = Math.max(...layerBlocks.map((block) => block.height), 0);
	let cursorX = originX;
	for (const block of layerBlocks) {
		layerStartX.set(block.layer, cursorX);
		const blockOriginY = originY + (totalHeight - block.height) / 2;
		layoutLayerBlock(block.ids, nodeById, cursorX, blockOriginY, innerGap, rowGap, maxNodesPerRow, positions);
		if (layerNumbers[layerNumbers.indexOf(block.layer) + 1] != null) corridorXByBoundary.set(block.layer, cursorX + block.width + columnGap / 2);
		cursorX += block.width + columnGap;
	}
	const width = cursorX - originX - (layerNumbers.length > 0 ? columnGap : 0);
	return {
		positions,
		width: Math.max(width, 0),
		height: totalHeight,
		layerStartX,
		corridorXByBoundary
	};
}
function layoutSchemaVisualizerNodesWithMetadata(nodes, relationships, options = {}) {
	const { startX, startY, columnGap, rowGap, componentGap, innerGap, maxNodesPerRow } = {
		...DEFAULT_LAYOUT_OPTIONS,
		...options
	};
	const positions = /* @__PURE__ */ new Map();
	const layers = /* @__PURE__ */ new Map();
	const corridorXByBoundary = /* @__PURE__ */ new Map();
	const layerStartX = /* @__PURE__ */ new Map();
	if (nodes.length === 0) return {
		positions,
		layers,
		metrics: {
			startX,
			startY,
			columnGap,
			rowGap,
			nodeWidth: 0,
			columnStride: 0,
			corridorXByBoundary,
			layerStartX
		}
	};
	const nodeById = new Map(nodes.map((node) => [node.id, node]));
	const rawComponents = buildConnectedComponents(nodes.map((node) => node.id), relationships);
	const components = [];
	let isolatedIds = [];
	for (const component of rawComponents) {
		if (component.length === 1) {
			isolatedIds.push(component[0]);
			continue;
		}
		components.push(component);
	}
	if (isolatedIds.length > 0) {
		isolatedIds.sort((a, b) => (nodeById.get(a)?.label ?? a).localeCompare(nodeById.get(b)?.label ?? b));
		components.push(isolatedIds);
	}
	const maxNodeWidth = Math.max(...nodes.map((node) => node.width));
	const columnStride = maxNodeWidth + columnGap;
	let currentY = startY;
	for (const componentIds of components) {
		const componentSet = new Set(componentIds);
		const relevant = relationships.filter((relationship) => componentSet.has(relationship.from) && componentSet.has(relationship.to));
		let componentLayers = assignRelationshipLayers(componentIds, relevant);
		componentLayers = compressRelationshipLayers(componentIds, relevant, componentLayers);
		const layout = layoutComponent(componentIds, nodeById, relationships, startX, currentY, columnGap, rowGap, innerGap, maxNodesPerRow, componentLayers);
		for (const [id, position] of layout.positions) {
			positions.set(id, position);
			layers.set(id, componentLayers.get(id) ?? 0);
		}
		for (const [boundary, corridorX] of layout.corridorXByBoundary) corridorXByBoundary.set(boundary, corridorX);
		for (const [layer, x] of layout.layerStartX) layerStartX.set(layer, x);
		currentY += layout.height + componentGap;
	}
	return {
		positions,
		layers,
		metrics: {
			startX,
			startY,
			columnGap,
			rowGap,
			nodeWidth: maxNodeWidth,
			columnStride,
			corridorXByBoundary,
			layerStartX
		}
	};
}
export { DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT as n, buildSchemaVisualizerRelationshipPaths as r, layoutSchemaVisualizerNodesWithMetadata as t };
