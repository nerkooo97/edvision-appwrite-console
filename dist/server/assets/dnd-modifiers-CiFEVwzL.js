const restrictToHorizontalAxis = ({ transform }) => ({
	...transform,
	y: 0
});
const restrictToVerticalAxis = ({ transform }) => ({
	...transform,
	x: 0
});
const restrictToParentElement = ({ containerNodeRect, draggingNodeRect, transform }) => {
	if (!containerNodeRect || !draggingNodeRect) return transform;
	const value = { ...transform };
	if (draggingNodeRect.top + transform.y <= containerNodeRect.top) value.y = containerNodeRect.top - draggingNodeRect.top;
	else if (draggingNodeRect.bottom + transform.y >= containerNodeRect.bottom) value.y = containerNodeRect.bottom - draggingNodeRect.bottom;
	if (draggingNodeRect.left + transform.x <= containerNodeRect.left) value.x = containerNodeRect.left - draggingNodeRect.left;
	else if (draggingNodeRect.right + transform.x >= containerNodeRect.right) value.x = containerNodeRect.right - draggingNodeRect.right;
	return value;
};
function getAxisRestrictedDragModifiers(axis) {
	return [axis === "horizontal" ? restrictToHorizontalAxis : restrictToVerticalAxis, restrictToParentElement];
}
function sortableAxisTransform(transform, axis) {
	if (!transform) return void 0;
	if (axis === "horizontal") return `translate3d(${transform.x}px, 0, 0)`;
	return `translate3d(0, ${transform.y}px, 0)`;
}
export { sortableAxisTransform as n, getAxisRestrictedDragModifiers as t };
