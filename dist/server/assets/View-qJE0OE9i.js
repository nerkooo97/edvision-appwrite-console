import { i as isResolvedThemeDarkChrome, r as isHtmlDarkChrome } from "./html-theme-zz5wyKPq.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as monacoSyntaxHighlightRules } from "./code-syntax-theme-CApDi7y8.js";
import { D as FUNCTIONS_EDITOR_EXPLORER_MIN_WIDTH_PX, E as FUNCTIONS_EDITOR_EXPLORER_MAX_WIDTH_PX, O as FUNCTIONS_EDITOR_MAIN_MIN_WIDTH_PX, T as FUNCTIONS_EDITOR_EXPLORER_DEFAULT_WIDTH_PX, nt as syncPanelGroupFirstPanePx, q as computeTwoPanelHorizontalLayout } from "./resizable-layout-BVnWw80t.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as usePlatform } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { h as verticalPanelResizeHandleClass } from "./horizontal-resize-BcegzCwH.js";
import { n as ResizablePanel, r as ResizablePanelGroup, t as ResizableHandle } from "./resizable-CfBrThFG.js";
import { t as ScrollArea } from "./scroll-area-CakPDLgR.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ChevronDown, ChevronRight, ChevronUp, Circle, Copy, Download, File, FileCode, FileJson, FileText, Folder, ListCollapse, PanelLeft, PanelLeftClose, Plus, Replace, Search, Trash2, X } from "lucide-react";
import { useTheme } from "next-themes";
import Editor from "@monaco-editor/react";
const GETTING_STARTED_MAIN_JS = `export default async ({ req, res, log, error }) => {
  // Log incoming request
  log('Request received: ' + req.method);

  // Parse request body if present
  const body = req.body ? JSON.parse(req.body) : {};

  // Your function logic here
  const result = {
    message: 'Hello from Appwrite Functions!',
    timestamp: Date.now(),
    input: body
  };

  // Return JSON response
  return res.json(result);
};
`;
const GETTING_STARTED_PACKAGE_JSON = `{
  "name": "appwrite-function",
  "version": "1.0.0",
  "main": "src/main.js"
}
`;
const DEFAULT_FILES = {
	"src/main.js": GETTING_STARTED_MAIN_JS,
	"package.json": GETTING_STARTED_PACKAGE_JSON
};
var EMPTY_MAIN_JS = `export default async ({ req, res, log, error }) => {
  log('Request: ' + req.method + ' ' + req.path);
  return res.json({ ok: true });
};
`;
var HELLO_WORLD_MAIN_JS = `export default async ({ req, res, log }) => {
  log('Hello from Appwrite!');
  return res.json({
    message: 'Hello, World!',
    time: new Date().toISOString(),
  });
};
`;
var WEBHOOK_MAIN_JS = `export default async ({ req, res, log, error }) => {
  let body = {};
  try {
    if (req.body) body = JSON.parse(req.body);
  } catch (e) {
    error('Invalid JSON body');
    return res.json({ error: 'Invalid JSON' }, 400);
  }
  log('Webhook received:', JSON.stringify(body));
  return res.json({ received: body });
};
`;
var PACKAGE_JSON = `{
  "name": "appwrite-function",
  "version": "1.0.0",
  "main": "src/main.js"
}
`;
const EDITOR_TEMPLATES = [
	{
		id: "getting-started",
		label: "Getting started",
		files: {
			"src/main.js": GETTING_STARTED_MAIN_JS,
			"package.json": GETTING_STARTED_PACKAGE_JSON
		}
	},
	{
		id: "empty",
		label: "Empty",
		files: {
			"src/main.js": EMPTY_MAIN_JS,
			"package.json": PACKAGE_JSON
		}
	},
	{
		id: "hello-world",
		label: "Hello world",
		files: {
			"src/main.js": HELLO_WORLD_MAIN_JS,
			"package.json": PACKAGE_JSON
		}
	},
	{
		id: "webhook",
		label: "Webhook",
		files: {
			"src/main.js": WEBHOOK_MAIN_JS,
			"package.json": PACKAGE_JSON
		}
	}
];
function buildFileTree(paths) {
	const root = [];
	function ensureFolder(parent, name, pathPrefix) {
		let f = parent.children.find((c) => c.type === "folder" && c.name === name);
		if (!f) {
			f = {
				type: "folder",
				name,
				pathPrefix,
				children: []
			};
			parent.children.push(f);
		}
		return f;
	}
	function addPath(segments, path) {
		if (segments.length === 1) {
			root.push({
				type: "file",
				name: segments[0],
				path
			});
			return;
		}
		const [first, ...rest] = segments;
		let folder = root.find((n) => n.type === "folder" && n.name === first);
		if (!folder) {
			folder = {
				type: "folder",
				name: first,
				pathPrefix: first,
				children: []
			};
			root.push(folder);
		}
		if (rest.length === 1) {
			folder.children.push({
				type: "file",
				name: rest[0],
				path
			});
			return;
		}
		let current = folder;
		for (let i = 0; i < rest.length - 1; i++) {
			const seg = rest[i];
			const prefix = [first, ...rest.slice(0, i + 1)].join("/");
			current = ensureFolder(current, seg, prefix);
		}
		current.children.push({
			type: "file",
			name: rest[rest.length - 1],
			path
		});
	}
	for (const path of paths) {
		const parts = path.split("/").filter(Boolean);
		if (parts.length) addPath(parts, path);
	}
	const sortNodes = (nodes) => [...nodes].sort((a, b) => {
		const aFolder = a.type === "folder" ? 1 : 0;
		const bFolder = b.type === "folder" ? 1 : 0;
		if (aFolder !== bFolder) return bFolder - aFolder;
		const aName = a.type === "folder" ? a.name : a.name;
		const bName = b.type === "folder" ? b.name : b.name;
		return aName.localeCompare(bName, void 0, { sensitivity: "base" });
	});
	function sortTree(node) {
		if (node.type === "folder") return {
			...node,
			children: sortNodes(node.children.map(sortTree))
		};
		return node;
	}
	return sortNodes(root.map(sortTree));
}
function filterFileTree(nodes, query) {
	const q = query.trim().toLowerCase();
	if (!q) return nodes;
	const result = [];
	for (const node of nodes) if (node.type === "file") {
		if (node.path.toLowerCase().includes(q) || node.name.toLowerCase().includes(q)) result.push(node);
	} else {
		const filteredChildren = filterFileTree(node.children, query);
		if (node.name.toLowerCase().includes(q) || filteredChildren.length > 0) result.push({
			...node,
			children: filteredChildren
		});
	}
	return result;
}
function getAllPathPrefixes(nodes) {
	const out = [];
	for (const node of nodes) if (node.type === "folder") {
		out.push(node.pathPrefix);
		out.push(...getAllPathPrefixes(node.children));
	}
	return out;
}
function getFileIcon(path) {
	if (path.endsWith(".json")) return FileJson;
	if (path.endsWith(".ts") || path.endsWith(".js")) return FileText;
	return File;
}
var EXPLORER_INDENT = 14;
function FileTreeNodes({ nodes, activeFile, expandedFolders, onToggleFolder, onSelectFile, onDeleteFile, canDelete, depth }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Fragment, { children: nodes.map((node) => {
		if (node.type === "folder") {
			const isExpanded = expandedFolders.has(node.pathPrefix);
			return /* @__PURE__ */ jsxs("div", {
				className: "select-none",
				children: [/* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "flex w-full items-center gap-1.5 py-1 pe-2 text-start text-[12px] text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset",
					style: {
						paddingInlineStart: depth * EXPLORER_INDENT + 6,
						backgroundColor: "transparent"
					},
					onClick: () => onToggleFolder(node.pathPrefix),
					"aria-expanded": isExpanded,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "flex shrink-0 w-4 justify-center",
							children: isExpanded ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" })
						}),
						/* @__PURE__ */ jsx(Folder, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ jsx("span", {
							className: "min-w-0 truncate font-normal",
							children: node.name
						})
					]
				}), isExpanded && /* @__PURE__ */ jsx(FileTreeNodes, {
					nodes: node.children,
					activeFile,
					expandedFolders,
					onToggleFolder,
					onSelectFile,
					onDeleteFile,
					canDelete,
					depth: depth + 1
				})]
			}, node.pathPrefix);
		}
		const isActive = activeFile === node.path;
		const Icon$1 = getFileIcon(node.path);
		return /* @__PURE__ */ jsxs("div", {
			role: "button",
			tabIndex: 0,
			className: cn("group relative flex items-center gap-2 py-1 pe-1.5 text-[12px] cursor-pointer border-s-2 border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "border-s-primary bg-muted/40 text-foreground" : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"),
			style: { paddingInlineStart: depth * EXPLORER_INDENT + 6 + 18 },
			onClick: () => onSelectFile(node.path),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onSelectFile(node.path);
				}
			},
			children: [
				/* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
				/* @__PURE__ */ jsx("span", {
					className: "min-w-0 truncate flex-1 font-normal",
					title: node.path,
					children: node.name
				}),
				canDelete && /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "shrink-0 rounded p-0.5 opacity-0 group-hover:opacity-100 hover:bg-muted text-muted-foreground hover:text-foreground focus:opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring",
					onClick: (e) => {
						e.stopPropagation();
						onDeleteFile(node.path);
					},
					"aria-label": `${t("Remove")} ${node.name}`,
					children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" })
				})
			]
		}, node.path);
	}) });
}
function getLanguageFromPath(path) {
	if (path.endsWith(".ts")) return "typescript";
	if (path.endsWith(".json")) return "json";
	return "javascript";
}
async function gzipString(str) {
	const bytes = new TextEncoder().encode(str);
	const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"));
	const blob = await new Response(stream).blob();
	return new Uint8Array(await blob.arrayBuffer());
}
function uint8ArrayToBase64(bytes) {
	let binary = "";
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
	return typeof btoa !== "undefined" ? btoa(binary) : "";
}
var ENTRY_FILE = "src/main.js";
var MONACO_THEME_LIGHT = "app-light";
var MONACO_THEME_DARK = "app-dark";
function resolveCssColorToHex(cssValue, fallback) {
	if (typeof document === "undefined" || !cssValue?.trim()) return fallback;
	const trimmed = cssValue.trim();
	if (/^#[0-9A-Fa-f]{6}$/.test(trimmed)) return trimmed;
	const el = document.createElement("div");
	el.style.setProperty("background", trimmed);
	el.style.setProperty("color", "transparent");
	el.style.setProperty("position", "absolute");
	el.style.setProperty("visibility", "hidden");
	el.style.setProperty("pointer-events", "none");
	document.body.appendChild(el);
	const computed = getComputedStyle(el).backgroundColor;
	document.body.removeChild(el);
	const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
	if (m) {
		const [, r, g, b] = m;
		return "#" + [
			r,
			g,
			b
		].map((x) => Number(x).toString(16).padStart(2, "0")).join("");
	}
	return fallback;
}
function defineAppThemes(monaco) {
	monaco.editor.defineTheme(MONACO_THEME_LIGHT, {
		base: "vs",
		inherit: true,
		rules: monacoSyntaxHighlightRules(false),
		colors: {
			"editor.background": "#ffffff",
			"editor.foreground": "#1a1a1a",
			"editorLineNumber.foreground": "#6b7280",
			"editorCursor.foreground": "#1a1a1a",
			"editor.selectionBackground": "#e5e7eb"
		}
	});
	const root = typeof document !== "undefined" ? document.documentElement : null;
	const isDark = root ? isHtmlDarkChrome() : false;
	const editorBgVar = root ? getComputedStyle(root).getPropertyValue("--editor-bg").trim() : "";
	const DARK_BG = editorBgVar && editorBgVar.startsWith("#") ? editorBgVar : "#09090b";
	const darkFgVar = root ? getComputedStyle(root).getPropertyValue("--foreground").trim() : "";
	const darkFg = isDark && darkFgVar ? resolveCssColorToHex(darkFgVar, "#fafafa") : "#fafafa";
	const darkMutedVar = root ? getComputedStyle(root).getPropertyValue("--muted-foreground").trim() : "";
	const darkMuted = isDark && darkMutedVar ? resolveCssColorToHex(darkMutedVar, "#71717a") : "#71717a";
	monaco.editor.defineTheme(MONACO_THEME_DARK, {
		base: "vs-dark",
		inherit: true,
		rules: monacoSyntaxHighlightRules(true),
		colors: {
			"editor.background": DARK_BG,
			"editorGutter.background": DARK_BG,
			"editor.foreground": darkFg,
			"editor.lineHighlightBackground": DARK_BG,
			"editorLineNumber.foreground": darkMuted,
			"editorCursor.foreground": darkFg,
			"editor.selectionBackground": "#2d2d30",
			"editorWidget.background": DARK_BG,
			"editorSuggestWidget.background": DARK_BG,
			"minimap.background": DARK_BG,
			"minimapGutter.background": DARK_BG
		}
	});
}
function View() {
	const t = useT();
	const { isMac } = usePlatform();
	const { projectId } = useParams({ strict: false });
	const { resolvedTheme } = useTheme();
	const isDark = isResolvedThemeDarkChrome(resolvedTheme);
	const [files, setFiles] = useState(DEFAULT_FILES);
	const [activeFile, setActiveFile] = useState(ENTRY_FILE);
	const [isCompressing, setIsCompressing] = useState(false);
	const [gzipSize, setGzipSize] = useState(null);
	const [addFileOpen, setAddFileOpen] = useState(false);
	const [newFilePath, setNewFilePath] = useState("");
	const [deleteConfirmPath, setDeleteConfirmPath] = useState(null);
	const [expandedFolders, setExpandedFolders] = useState(() => new Set(["src"]));
	const [fileSearchQuery, setFileSearchQuery] = useState("");
	const [explorerOpen, setExplorerOpen] = useState(true);
	const [openFiles, setOpenFiles] = useState([ENTRY_FILE, "package.json"]);
	const [findPanelMode, setFindPanelMode] = useState(false);
	const [findInFileQuery, setFindInFileQuery] = useState("");
	const [replaceValue, setReplaceValue] = useState("");
	const [findMatchIndex, setFindMatchIndex] = useState(0);
	const [findMatches, setFindMatches] = useState([]);
	const editorRef = useRef(null);
	const findDecorationIdsRef = useRef([]);
	const findInputRef = useRef(null);
	const [currentTemplateLabel, setCurrentTemplateLabel] = useState("Getting started");
	const [dirtyFiles, setDirtyFiles] = useState(/* @__PURE__ */ new Set());
	const [cursorPosition, setCursorPosition] = useState(null);
	const editorSplitContainerRef = useRef(null);
	const explorerPanelRef = useRef(null);
	const prevEditorSplitWidthRef = useRef(0);
	const [editorSplitWidth, setEditorSplitWidth] = useState(0);
	useLayoutEffect(() => {
		const el = editorSplitContainerRef.current;
		if (!el) return;
		const ro = new ResizeObserver((entries) => {
			setEditorSplitWidth(entries[0]?.contentRect.width ?? 0);
		});
		ro.observe(el);
		setEditorSplitWidth(el.getBoundingClientRect().width);
		return () => ro.disconnect();
	}, [explorerOpen]);
	const explorerPanelLayout = useMemo(() => {
		const layout = computeTwoPanelHorizontalLayout({
			containerWidth: editorSplitWidth,
			firstPx: 280,
			firstMinPx: 200,
			firstMaxPx: 480,
			secondMinPx: 400
		});
		return {
			explorerDefault: layout.firstPercent,
			explorerMin: layout.firstMinPercent,
			explorerMax: layout.firstMaxPercent,
			mainDefault: layout.secondPercent,
			mainMin: layout.secondMinPercent
		};
	}, [editorSplitWidth]);
	useLayoutEffect(() => {
		if (!explorerOpen || editorSplitWidth <= 0) return;
		const prevWidth = prevEditorSplitWidthRef.current;
		prevEditorSplitWidthRef.current = editorSplitWidth;
		if (prevWidth <= 0 || prevWidth === editorSplitWidth) return;
		syncPanelGroupFirstPanePx(explorerPanelRef.current, editorSplitWidth, 280, {
			firstMinPx: 200,
			firstMaxPx: 480,
			secondMinPx: 400
		});
	}, [editorSplitWidth, explorerOpen]);
	const shortcutFind = isMac ? "⌘F" : "Ctrl+F";
	const shortcutReplace = isMac ? "⌘H" : "Ctrl+H";
	const filePaths = useMemo(() => Object.keys(files).sort((a, b) => a.localeCompare(b)), [files]);
	const fileTree = useMemo(() => buildFileTree(filePaths), [filePaths]);
	const filteredFileTree = useMemo(() => filterFileTree(fileTree, fileSearchQuery), [fileTree, fileSearchQuery]);
	const expandedForView = useMemo(() => {
		if (!fileSearchQuery.trim()) return expandedFolders;
		const allInFiltered = getAllPathPrefixes(filteredFileTree);
		return new Set([...expandedFolders, ...allInFiltered]);
	}, [
		expandedFolders,
		fileSearchQuery,
		filteredFileTree
	]);
	const toggleFolder = useCallback((pathPrefix) => {
		setExpandedFolders((prev) => {
			const next = new Set(prev);
			if (next.has(pathPrefix)) next.delete(pathPrefix);
			else next.add(pathPrefix);
			return next;
		});
	}, []);
	const openFile = useCallback((path) => {
		setActiveFile(path);
		setOpenFiles((prev) => prev.includes(path) ? prev : [...prev, path]);
	}, []);
	const closeTab = useCallback((path, e) => {
		e.stopPropagation();
		if (openFiles.length <= 1) return;
		setOpenFiles((prev) => prev.filter((p) => p !== path));
		if (activeFile === path) {
			const remaining = openFiles.filter((p) => p !== path);
			setActiveFile(remaining[remaining.length - 1] ?? "");
		}
	}, [activeFile, openFiles]);
	const reorderOpenFiles = useCallback((fromIndex, toIndex) => {
		if (fromIndex < 0 || toIndex < 0 || fromIndex >= openFiles.length || toIndex >= openFiles.length || fromIndex === toIndex) return;
		const next = [...openFiles];
		const [removed] = next.splice(fromIndex, 1);
		next.splice(toIndex, 0, removed);
		setOpenFiles(next);
	}, [openFiles]);
	const applyTemplate = useCallback((template) => {
		const paths = Object.keys(template.files).sort((a, b) => a.localeCompare(b));
		const firstPath = paths[0] ?? "src/main.js";
		setFiles(template.files);
		setActiveFile(firstPath);
		setOpenFiles(paths);
		setDirtyFiles(/* @__PURE__ */ new Set());
		setGzipSize(null);
		setCurrentTemplateLabel(template.label);
		setFindInFileQuery("");
		setFindMatches([]);
		setFindMatchIndex(0);
		const editor = editorRef.current;
		if (editor) {
			editor.deltaDecorations(findDecorationIdsRef.current, []);
			findDecorationIdsRef.current = [];
		}
		setExpandedFolders((prev) => {
			const next = new Set(prev);
			if (paths.some((p) => p.startsWith("src/"))) next.add("src");
			return next;
		});
		toast.success(`${t("Loaded template:")} ${t(template.label)}`);
	}, [t]);
	const activeContent = files[activeFile] ?? "";
	const activeLang = getLanguageFromPath(activeFile);
	const lineCount = useMemo(() => activeContent ? activeContent.split("\n").length : 0, [activeContent]);
	useEffect(() => {
		setCursorPosition(null);
	}, [activeFile]);
	const handleEditorMount = useCallback((editor, monaco) => {
		editorRef.current = editor;
		defineAppThemes(monaco);
		monaco.editor.setTheme(isDark ? MONACO_THEME_DARK : MONACO_THEME_LIGHT);
		const pos = editor.getPosition();
		setCursorPosition(pos ? {
			lineNumber: pos.lineNumber,
			column: pos.column
		} : null);
		const disposable = editor.onDidChangeCursorPosition((e) => {
			setCursorPosition({
				lineNumber: e.position.lineNumber,
				column: e.position.column
			});
		});
		return () => {
			editorRef.current = null;
			disposable.dispose();
		};
	}, [isDark]);
	const runFindInFile = useCallback(() => {
		const editor = editorRef.current;
		const model = editor?.getModel();
		const q = findInFileQuery.trim();
		if (!editor || !model || !q) {
			setFindMatches([]);
			setFindMatchIndex(0);
			if (editor) {
				editor.deltaDecorations(findDecorationIdsRef.current, []);
				findDecorationIdsRef.current = [];
			}
			return;
		}
		const matches = model.findMatches(q, true, false, false, null, false).map((m) => ({
			lineNumber: m.range.startLineNumber,
			column: m.range.startColumn,
			endLineNumber: m.range.endLineNumber,
			endColumn: m.range.endColumn
		}));
		setFindMatches(matches);
		setFindMatchIndex(0);
		const newDecorations = matches.map((m) => ({
			range: {
				startLineNumber: m.lineNumber,
				startColumn: m.column,
				endLineNumber: m.endLineNumber,
				endColumn: m.endColumn
			},
			options: {
				className: "find-in-file-highlight",
				stickiness: 1
			}
		}));
		findDecorationIdsRef.current = editor.deltaDecorations(findDecorationIdsRef.current, newDecorations);
		if (matches.length > 0) {
			const current = matches[0];
			editor.setSelection({
				startLineNumber: current.lineNumber,
				startColumn: current.column,
				endLineNumber: current.endLineNumber,
				endColumn: current.endColumn
			});
			editor.revealLineInCenter(current.lineNumber);
		}
	}, [findInFileQuery]);
	useEffect(() => {
		runFindInFile();
	}, [
		runFindInFile,
		activeFile,
		activeContent
	]);
	const goToFindMatch = useCallback((delta) => {
		if (findMatches.length === 0) return;
		const next = (findMatchIndex + delta + findMatches.length) % findMatches.length;
		setFindMatchIndex(next);
		const m = findMatches[next];
		const editor = editorRef.current;
		if (editor) {
			editor.setSelection({
				startLineNumber: m.lineNumber,
				startColumn: m.column,
				endLineNumber: m.endLineNumber,
				endColumn: m.endColumn
			});
			editor.revealLineInCenter(m.lineNumber);
		}
	}, [findMatches, findMatchIndex]);
	const replaceCurrent = useCallback(() => {
		const editor = editorRef.current;
		const model = editor?.getModel();
		if (!editor || !model || findMatches.length === 0) return;
		const m = findMatches[findMatchIndex];
		const range = {
			startLineNumber: m.lineNumber,
			startColumn: m.column,
			endLineNumber: m.endLineNumber,
			endColumn: m.endColumn
		};
		editor.executeEdits("find-replace", [{
			range,
			text: replaceValue
		}]);
		const newValue = model.getValue();
		setFiles((prev) => ({
			...prev,
			[activeFile]: newValue
		}));
		setDirtyFiles((prev) => new Set(prev).add(activeFile));
		setGzipSize(null);
		runFindInFile();
		toast.success(t("Replaced"));
	}, [
		findMatches,
		findMatchIndex,
		replaceValue,
		activeFile,
		runFindInFile,
		t
	]);
	const replaceAll = useCallback(() => {
		const editor = editorRef.current;
		const model = editor?.getModel();
		if (!editor || !model || findMatches.length === 0) return;
		const edits = findMatches.slice().reverse().map((m) => ({
			range: {
				startLineNumber: m.lineNumber,
				startColumn: m.column,
				endLineNumber: m.endLineNumber,
				endColumn: m.endColumn
			},
			text: replaceValue
		}));
		editor.executeEdits("find-replace-all", edits);
		const newValue = model.getValue();
		setFiles((prev) => ({
			...prev,
			[activeFile]: newValue
		}));
		setDirtyFiles((prev) => new Set(prev).add(activeFile));
		setGzipSize(null);
		runFindInFile();
		toast.success(`${t("Replaced")} ${findMatches.length} ${findMatches.length === 1 ? t("occurrence") : t("occurrences")}`);
	}, [
		findMatches,
		replaceValue,
		activeFile,
		runFindInFile,
		t
	]);
	const handleEditorChange = useCallback((value) => {
		setCurrentTemplateLabel(null);
		setFiles((prev) => ({
			...prev,
			[activeFile]: value ?? ""
		}));
		setGzipSize(null);
		setDirtyFiles((prev) => new Set(prev).add(activeFile));
	}, [activeFile]);
	const addFile = useCallback(() => {
		const path = newFilePath.trim();
		if (!path) return;
		if (files[path]) {
			toast.error(t("A file with this path already exists"));
			return;
		}
		setCurrentTemplateLabel(null);
		setFiles((prev) => ({
			...prev,
			[path]: ""
		}));
		setActiveFile(path);
		setOpenFiles((prev) => prev.includes(path) ? prev : [...prev, path]);
		setNewFilePath("");
		setAddFileOpen(false);
		toast.success(t("File added"));
	}, [
		newFilePath,
		files,
		t
	]);
	const deleteFile = useCallback((path) => {
		if (filePaths.length <= 1) {
			toast.error(t("Keep at least one file"));
			return;
		}
		setCurrentTemplateLabel(null);
		setFiles((prev) => {
			const next = { ...prev };
			delete next[path];
			return next;
		});
		if (activeFile === path) setActiveFile(filePaths.filter((p) => p !== path)[0] ?? "");
		setOpenFiles((prev) => prev.filter((p) => p !== path));
		setDirtyFiles((prev) => {
			const next = new Set(prev);
			next.delete(path);
			return next;
		});
		setDeleteConfirmPath(null);
		toast.success(t("File removed"));
	}, [
		filePaths,
		activeFile,
		t
	]);
	const bundleForExport = useCallback(() => {
		return JSON.stringify({ files });
	}, [files]);
	const compressAndPrepare = useCallback(async () => {
		if (typeof CompressionStream === "undefined") {
			toast.error(t("Gzip compression is not supported in this browser"));
			return;
		}
		setIsCompressing(true);
		try {
			const gzipBytes = await gzipString(bundleForExport());
			setGzipSize(gzipBytes.byteLength);
			toast.success(`${t("Compressed to")} ${gzipBytes.byteLength} ${t("bytes")}`);
		} catch (e) {
			toast.error(t("Failed to compress code"));
			console.error(e);
		} finally {
			setIsCompressing(false);
		}
	}, [bundleForExport, t]);
	const downloadGzip = useCallback(async () => {
		if (typeof CompressionStream === "undefined") {
			toast.error(t("Gzip compression is not supported in this browser"));
			return;
		}
		setIsCompressing(true);
		try {
			const gzipBytes = await gzipString(bundleForExport());
			const blob = new Blob([gzipBytes], { type: "application/gzip" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "function.tar.gz";
			a.click();
			URL.revokeObjectURL(url);
			setGzipSize(gzipBytes.byteLength);
			toast.success(t("Downloaded function.tar.gz"));
		} catch (e) {
			toast.error(t("Failed to create gzip file"));
			console.error(e);
		} finally {
			setIsCompressing(false);
		}
	}, [bundleForExport, t]);
	const handleEditorAreaKeyDown = useCallback((e) => {
		if (e.key === "Escape" && findPanelMode !== false) {
			e.preventDefault();
			e.stopPropagation();
			setFindPanelMode(false);
			setFindInFileQuery("");
			setReplaceValue("");
			setFindMatches([]);
			setFindMatchIndex(0);
			const editor = editorRef.current;
			if (editor) {
				editor.deltaDecorations(findDecorationIdsRef.current, []);
				findDecorationIdsRef.current = [];
			}
		} else if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			setFindPanelMode("find");
			setTimeout(() => findInputRef.current?.focus(), 0);
		} else if (e.key === "h" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			setFindPanelMode("replace");
			setTimeout(() => findInputRef.current?.focus(), 0);
		}
	}, [findPanelMode]);
	const copyGzipBase64 = useCallback(async () => {
		if (typeof CompressionStream === "undefined") {
			toast.error(t("Gzip compression is not supported in this browser"));
			return;
		}
		setIsCompressing(true);
		try {
			const gzipBytes = await gzipString(bundleForExport());
			const base64 = uint8ArrayToBase64(gzipBytes);
			await navigator.clipboard.writeText(base64);
			setGzipSize(gzipBytes.byteLength);
			toast.success(t("Gzip (base64) copied to clipboard"));
		} catch (e) {
			toast.error(t("Failed to copy"));
			console.error(e);
		} finally {
			setIsCompressing(false);
		}
	}, [bundleForExport, t]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-1 min-h-0 flex-col bg-background",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center justify-between gap-4 border-b border-border bg-background px-3 py-2 sm:px-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 min-w-0",
					children: [/* @__PURE__ */ jsx(TooltipProvider, {
						delayDuration: 0,
						children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: projectId ? /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 shrink-0",
								asChild: true,
								"aria-label": t("Back to functions"),
								children: /* @__PURE__ */ jsx(Link, {
									to: "/projects/$projectId/functions",
									params: { projectId },
									children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
								})
							}) : /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 shrink-0",
								"aria-label": t("Back to functions"),
								onClick: () => window.history.back(),
								children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							side: "bottom",
							children: /* @__PURE__ */ jsx("p", { children: t("Back to functions") })
						})] })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[13px] font-medium text-foreground truncate",
						children: currentTemplateLabel ? `${t("Function editor")} – ${t(currentTemplateLabel)}` : t("Function editor")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 shrink-0",
					children: [
						/* @__PURE__ */ jsxs(TooltipProvider, {
							delayDuration: 0,
							children: [
								/* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 gap-1.5 text-[13px]",
									onClick: compressAndPrepare,
									disabled: isCompressing,
									children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), t("Prepare for deployment")]
								}),
								/* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 gap-1.5 text-[13px]",
									onClick: downloadGzip,
									disabled: isCompressing,
									children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), t("Download gzip")]
								}),
								/* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 gap-1.5 text-[13px]",
									onClick: copyGzipBase64,
									disabled: isCompressing,
									children: [/* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }), t("Copy gzip (base64)")]
								})
							]
						}),
						/* @__PURE__ */ jsxs(TooltipProvider, {
							delayDuration: 0,
							children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 gap-1.5 text-[13px]",
									onClick: () => {
										setFindPanelMode("find");
										setTimeout(() => findInputRef.current?.focus(), 0);
									},
									children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }), t("Find")]
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "bottom",
								children: /* @__PURE__ */ jsxs("p", { children: [
									t("Find in file"),
									" (",
									shortcutFind,
									")"
								] })
							})] }), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 gap-1.5 text-[13px]",
									onClick: () => {
										setFindPanelMode("replace");
										setTimeout(() => findInputRef.current?.focus(), 0);
									},
									children: [/* @__PURE__ */ jsx(Replace, { className: "h-4 w-4" }), t("Replace")]
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "bottom",
								children: /* @__PURE__ */ jsxs("p", { children: [
									t("Find and replace"),
									" (",
									shortcutReplace,
									")"
								] })
							})] })]
						}),
						/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								className: "h-9 gap-1.5 text-[13px]",
								children: [
									/* @__PURE__ */ jsx(FileCode, { className: "h-4 w-4" }),
									t("Templates"),
									/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })
								]
							})
						}), /* @__PURE__ */ jsx(DropdownMenuContent, {
							align: "end",
							className: "min-w-[180px]",
							children: EDITOR_TEMPLATES.map((template) => /* @__PURE__ */ jsx(DropdownMenuItem, {
								onClick: () => applyTemplate(template),
								children: t(template.label)
							}, template.id))
						})] })
					]
				})]
			}),
			gzipSize !== null && /* @__PURE__ */ jsxs("div", {
				className: "shrink-0 border-b border-border bg-muted/20 px-3 py-1.5 text-[12px] text-muted-foreground sm:px-4",
				children: [
					t("Compressed:"),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-medium text-foreground tabular-nums",
						children: gzipSize
					}),
					" ",
					t("bytes"),
					" (",
					filePaths.length,
					" ",
					filePaths.length === 1 ? t("file") : t("files"),
					")"
				]
			}),
			/* @__PURE__ */ jsx("div", {
				ref: editorSplitContainerRef,
				className: "flex h-full min-h-0 min-w-0 flex-1",
				children: explorerOpen ? /* @__PURE__ */ jsxs(ResizablePanelGroup, {
					direction: "horizontal",
					className: "h-full min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsx(ResizablePanel, {
							ref: explorerPanelRef,
							defaultSize: explorerPanelLayout.explorerDefault,
							minSize: explorerPanelLayout.explorerMin,
							maxSize: explorerPanelLayout.explorerMax,
							style: { minWidth: 200 },
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-full flex-col border-e border-border bg-background",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-8 shrink-0 items-center justify-between border-b border-border px-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wider",
											children: t("Explorer")
										}), /* @__PURE__ */ jsx(TooltipProvider, {
											delayDuration: 0,
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-0.5",
												children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx("button", {
														type: "button",
														className: "rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring",
														onClick: () => setExpandedFolders(/* @__PURE__ */ new Set()),
														"aria-label": t("Collapse all"),
														children: /* @__PURE__ */ jsx(ListCollapse, { className: "h-3.5 w-3.5" })
													})
												}), /* @__PURE__ */ jsx(TooltipContent, {
													side: "bottom",
													children: /* @__PURE__ */ jsx("p", { children: t("Collapse all") })
												})] }), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx("button", {
														type: "button",
														className: "rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring",
														onClick: () => setAddFileOpen(true),
														"aria-label": t("New file"),
														children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
													})
												}), /* @__PURE__ */ jsx(TooltipContent, {
													side: "bottom",
													children: /* @__PURE__ */ jsx("p", { children: t("New file") })
												})] })]
											})
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[41px] shrink-0 items-center border-b border-border px-2",
										children: /* @__PURE__ */ jsxs("div", {
											className: "relative w-full",
											children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ jsx(Input, {
												type: "search",
												placeholder: t("Search files..."),
												value: fileSearchQuery,
												onChange: (e) => setFileSearchQuery(e.target.value),
												className: "h-7 ps-7 pe-2 text-[12px] font-normal",
												"aria-label": t("Search files")
											})]
										})
									}),
									/* @__PURE__ */ jsx(ScrollArea, {
										className: "flex-1",
										children: /* @__PURE__ */ jsx("nav", {
											className: "py-1 pe-1 ps-0.5",
											"aria-label": t("Project files"),
											children: fileTree.length === 0 ? /* @__PURE__ */ jsxs("div", {
												className: "px-3 py-4 text-center",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground",
													children: t("No files yet")
												}), /* @__PURE__ */ jsxs(Button, {
													variant: "ghost",
													size: "sm",
													className: "mt-2 h-7 text-[12px]",
													onClick: () => setAddFileOpen(true),
													children: [/* @__PURE__ */ jsx(Plus, { className: "h-3 w-3 me-1.5" }), t("New file")]
												})]
											}) : filteredFileTree.length === 0 ? /* @__PURE__ */ jsx("div", {
												className: "px-3 py-4 text-center",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground",
													children: t("No matching files")
												})
											}) : /* @__PURE__ */ jsx(FileTreeNodes, {
												nodes: filteredFileTree,
												activeFile,
												expandedFolders: expandedForView,
												onToggleFolder: toggleFolder,
												onSelectFile: openFile,
												onDeleteFile: (path) => setDeleteConfirmPath(path),
												canDelete: filePaths.length > 1,
												depth: 0
											})
										})
									})
								]
							})
						}),
						/* @__PURE__ */ jsx(ResizableHandle, { className: verticalPanelResizeHandleClass("z-10 before:z-10") }),
						/* @__PURE__ */ jsx(ResizablePanel, {
							defaultSize: explorerPanelLayout.mainDefault,
							minSize: explorerPanelLayout.mainMin,
							style: { minWidth: 400 },
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-full flex-col min-h-0",
								onKeyDown: (e) => e.stopPropagation(),
								onKeyDownCapture: handleEditorAreaKeyDown,
								onKeyUp: (e) => e.stopPropagation(),
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-8 shrink-0 items-end border-b border-border bg-muted/50",
										children: [/* @__PURE__ */ jsx(TooltipProvider, {
											delayDuration: 0,
											children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("button", {
													type: "button",
													className: "flex h-8 w-8 shrink-0 items-center justify-center border-e border-border text-muted-foreground hover:bg-muted/60 hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset",
													onClick: () => setExplorerOpen(false),
													"aria-label": t("Close explorer"),
													children: /* @__PURE__ */ jsx(PanelLeftClose, { className: "h-3.5 w-3.5" })
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "bottom",
												children: /* @__PURE__ */ jsx("p", { children: t("Close explorer") })
											})] })
										}), /* @__PURE__ */ jsx("div", {
											className: "flex min-w-0 flex-1 items-end overflow-x-auto",
											children: (() => {
												const visibleOpenFiles = openFiles.filter((path) => path in files);
												const canCloseTab = visibleOpenFiles.length > 1;
												return visibleOpenFiles.map((path) => {
													const tabIndex = openFiles.indexOf(path);
													const isActive = activeFile === path;
													const isDirty = dirtyFiles.has(path);
													const name = path.split("/").pop() ?? path;
													return /* @__PURE__ */ jsxs("div", {
														role: "tab",
														"aria-selected": isActive,
														"data-tab-index": tabIndex,
														draggable: true,
														className: cn("group flex shrink-0 cursor-grab active:cursor-grabbing items-center gap-1.5 border-b-2 px-3 py-1.5 font-mono text-[12px] transition-colors", isActive ? "border-t-2 border-t-primary border-b-background bg-background text-foreground -mb-px" : "border-t-2 border-t-transparent border-b-transparent bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground"),
														onClick: () => setActiveFile(path),
														onDragStart: (e) => {
															e.dataTransfer.setData("application/x-tab-index", String(tabIndex));
															e.dataTransfer.effectAllowed = "move";
															e.dataTransfer.dropEffect = "move";
														},
														onDragOver: (e) => {
															e.preventDefault();
															e.stopPropagation();
															e.dataTransfer.dropEffect = "move";
														},
														onDrop: (e) => {
															e.preventDefault();
															e.stopPropagation();
															const fromIndex = parseInt(e.dataTransfer.getData("application/x-tab-index"), 10);
															const toIndex = tabIndex;
															if (!Number.isNaN(fromIndex) && fromIndex !== toIndex) reorderOpenFiles(fromIndex, toIndex);
														},
														children: [
															/* @__PURE__ */ jsx("span", {
																className: "min-w-0 max-w-[140px] truncate",
																title: path,
																children: name
															}),
															isDirty && /* @__PURE__ */ jsx(Circle, {
																className: "h-1 w-1 shrink-0 fill-current text-amber-500",
																"aria-label": t("Unsaved")
															}),
															canCloseTab && /* @__PURE__ */ jsx("button", {
																type: "button",
																className: "rounded p-0.5 opacity-0 group-hover:opacity-100 hover:bg-muted hover:text-foreground focus:opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring text-muted-foreground",
																onClick: (e) => closeTab(path, e),
																onDragStart: (e) => e.stopPropagation(),
																"aria-label": `${t("Close")} ${name}`,
																children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
															})
														]
													}, path);
												});
											})()
										})]
									}),
									findPanelMode !== false && /* @__PURE__ */ jsxs("div", {
										className: "flex h-[41px] shrink-0 items-center border-b border-border bg-muted/30 px-2 gap-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex min-w-0 flex-1 items-center gap-2 sm:min-w-[160px]",
												children: [/* @__PURE__ */ jsx("label", {
													className: "shrink-0 text-[11px] font-medium text-muted-foreground",
													children: t("Find")
												}), /* @__PURE__ */ jsx(Input, {
													ref: findInputRef,
													type: "search",
													placeholder: `${t("Search in file")} (${shortcutFind})`,
													value: findInFileQuery,
													onChange: (e) => setFindInFileQuery(e.target.value),
													className: "h-7 min-w-0 flex-1 max-w-[180px] text-[12px]",
													"aria-label": t("Find in file")
												})]
											}),
											findPanelMode === "replace" && /* @__PURE__ */ jsxs("div", {
												className: "flex min-w-0 flex-1 items-center gap-2 sm:min-w-[160px]",
												children: [/* @__PURE__ */ jsx("label", {
													className: "shrink-0 text-[11px] font-medium text-muted-foreground",
													children: t("Replace")
												}), /* @__PURE__ */ jsx(Input, {
													type: "text",
													placeholder: t("Replace with"),
													value: replaceValue,
													onChange: (e) => setReplaceValue(e.target.value),
													className: "h-7 min-w-0 flex-1 max-w-[180px] text-[12px]",
													"aria-label": t("Replace with")
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex shrink-0 items-center gap-0.5",
												children: [
													findMatches.length > 0 && /* @__PURE__ */ jsxs("span", {
														className: "shrink-0 text-[11px] text-muted-foreground tabular-nums",
														children: [
															findMatchIndex + 1,
															"/",
															findMatches.length
														]
													}),
													/* @__PURE__ */ jsx(Button, {
														type: "button",
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7 shrink-0",
														onClick: () => goToFindMatch(-1),
														disabled: findMatches.length === 0,
														"aria-label": t("Previous match"),
														children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-3.5 w-3.5" })
													}),
													/* @__PURE__ */ jsx(Button, {
														type: "button",
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7 shrink-0",
														onClick: () => goToFindMatch(1),
														disabled: findMatches.length === 0,
														"aria-label": t("Next match"),
														children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })
													}),
													findPanelMode === "replace" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
														type: "button",
														variant: "secondary",
														size: "sm",
														className: "h-7 shrink-0 text-[11px] px-2",
														onClick: replaceCurrent,
														disabled: findMatches.length === 0,
														children: t("Replace")
													}), /* @__PURE__ */ jsx(Button, {
														type: "button",
														variant: "secondary",
														size: "sm",
														className: "h-7 shrink-0 text-[11px] px-2",
														onClick: replaceAll,
														disabled: findMatches.length === 0,
														children: t("All")
													})] }),
													/* @__PURE__ */ jsx(Button, {
														type: "button",
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7 shrink-0",
														onClick: () => {
															setFindPanelMode(false);
															setFindInFileQuery("");
															setReplaceValue("");
															setFindMatches([]);
															setFindMatchIndex(0);
															const editor = editorRef.current;
															if (editor) {
																editor.deltaDecorations(findDecorationIdsRef.current, []);
																findDecorationIdsRef.current = [];
															}
														},
														"aria-label": t("Close find"),
														children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
													})
												]
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "min-h-0 flex-1",
										children: /* @__PURE__ */ jsx(Editor, {
											height: "100%",
											defaultLanguage: activeLang,
											language: activeLang,
											value: activeContent,
											onChange: handleEditorChange,
											onMount: handleEditorMount,
											theme: isDark ? MONACO_THEME_DARK : MONACO_THEME_LIGHT,
											beforeMount: defineAppThemes,
											options: {
												minimap: { enabled: true },
												fontSize: 13,
												lineNumbers: "on",
												scrollBeyondLastLine: false,
												wordWrap: "on",
												padding: { top: 16 }
											},
											loading: /* @__PURE__ */ jsx("div", {
												className: "flex h-full items-center justify-center bg-background text-muted-foreground",
												children: t("Loading editor...")
											}),
											className: cn("rounded-b-lg")
										}, `${activeFile}-${isDark}`)
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex shrink-0 items-center justify-between gap-4 border-t border-border bg-muted/20 px-3 py-1.5 text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex min-w-0 items-center gap-3",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "truncate font-mono",
													title: activeFile,
													children: activeFile
												}),
												/* @__PURE__ */ jsx("span", {
													className: "shrink-0 capitalize",
													children: activeLang
												}),
												dirtyFiles.has(activeFile) && /* @__PURE__ */ jsx("span", {
													className: "shrink-0 text-amber-600 dark:text-amber-500",
													children: t("Unsaved")
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex shrink-0 items-center gap-3 tabular-nums",
											children: [
												cursorPosition && /* @__PURE__ */ jsxs("span", { children: [
													t("Ln"),
													" ",
													cursorPosition.lineNumber,
													", ",
													t("Col"),
													" ",
													cursorPosition.column
												] }),
												/* @__PURE__ */ jsxs("span", { children: [
													lineCount,
													" ",
													t("lines")
												] }),
												/* @__PURE__ */ jsxs("span", { children: [
													activeContent.length,
													" ",
													t("chars")
												] })
											]
										})]
									})
								]
							})
						})
					]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 flex-1 flex-col min-w-0 bg-background",
					onKeyDown: (e) => e.stopPropagation(),
					onKeyDownCapture: handleEditorAreaKeyDown,
					onKeyUp: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex h-8 shrink-0 items-end border-b border-border bg-muted/50",
							children: [/* @__PURE__ */ jsx(TooltipProvider, {
								delayDuration: 0,
								children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx("button", {
										type: "button",
										className: "flex h-8 w-8 shrink-0 items-center justify-center border-e border-border text-muted-foreground hover:bg-muted/60 hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset",
										onClick: () => setExplorerOpen(true),
										"aria-label": t("Open explorer"),
										children: /* @__PURE__ */ jsx(PanelLeft, { className: "h-3.5 w-3.5" })
									})
								}), /* @__PURE__ */ jsx(TooltipContent, {
									side: "bottom",
									children: /* @__PURE__ */ jsx("p", { children: t("Open explorer") })
								})] })
							}), /* @__PURE__ */ jsx("div", {
								className: "flex min-w-0 flex-1 items-end overflow-x-auto",
								children: openFiles.filter((path) => path in files).map((path) => {
									const tabIndex = openFiles.indexOf(path);
									const isActive = activeFile === path;
									const isDirty = dirtyFiles.has(path);
									const name = path.split("/").pop() ?? path;
									const canCloseTab = openFiles.filter((p) => p in files).length > 1;
									return /* @__PURE__ */ jsxs("div", {
										role: "tab",
										"aria-selected": isActive,
										"data-tab-index": tabIndex,
										draggable: true,
										className: cn("group flex shrink-0 cursor-grab active:cursor-grabbing items-center gap-1.5 border-b-2 px-3 py-1.5 font-mono text-[12px] transition-colors", isActive ? "border-t-2 border-t-primary border-b-background bg-background text-foreground -mb-px" : "border-t-2 border-t-transparent border-b-transparent bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground"),
										onClick: () => setActiveFile(path),
										onDragStart: (e) => {
											e.dataTransfer.setData("application/x-tab-index", String(tabIndex));
											e.dataTransfer.effectAllowed = "move";
											e.dataTransfer.dropEffect = "move";
										},
										onDragOver: (e) => {
											e.preventDefault();
											e.stopPropagation();
											e.dataTransfer.dropEffect = "move";
										},
										onDrop: (e) => {
											e.preventDefault();
											e.stopPropagation();
											const fromIndex = parseInt(e.dataTransfer.getData("application/x-tab-index"), 10);
											const toIndex = tabIndex;
											if (!Number.isNaN(fromIndex) && fromIndex !== toIndex) reorderOpenFiles(fromIndex, toIndex);
										},
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "min-w-0 max-w-[140px] truncate",
												title: path,
												children: name
											}),
											isDirty && /* @__PURE__ */ jsx(Circle, {
												className: "h-1 w-1 shrink-0 fill-current text-amber-500",
												"aria-label": t("Unsaved")
											}),
											canCloseTab && /* @__PURE__ */ jsx("button", {
												type: "button",
												className: "rounded p-0.5 opacity-0 group-hover:opacity-100 hover:bg-muted hover:text-foreground focus:opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring text-muted-foreground",
												onClick: (e) => closeTab(path, e),
												onDragStart: (e) => e.stopPropagation(),
												"aria-label": `${t("Close")} ${name}`,
												children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
											})
										]
									}, path);
								})
							})]
						}),
						findPanelMode !== false && /* @__PURE__ */ jsxs("div", {
							className: "flex h-[41px] shrink-0 items-center border-b border-border bg-muted/30 px-2 gap-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 flex-1 items-center gap-2 sm:min-w-[160px]",
									children: [/* @__PURE__ */ jsx("label", {
										className: "shrink-0 text-[11px] font-medium text-muted-foreground",
										children: t("Find")
									}), /* @__PURE__ */ jsx(Input, {
										ref: findInputRef,
										type: "search",
										placeholder: `${t("Search in file")} (${shortcutFind})`,
										value: findInFileQuery,
										onChange: (e) => setFindInFileQuery(e.target.value),
										className: "h-7 min-w-0 flex-1 max-w-[180px] text-[12px]",
										"aria-label": t("Find in file")
									})]
								}),
								findPanelMode === "replace" && /* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 flex-1 items-center gap-2 sm:min-w-[160px]",
									children: [/* @__PURE__ */ jsx("label", {
										className: "shrink-0 text-[11px] font-medium text-muted-foreground",
										children: t("Replace")
									}), /* @__PURE__ */ jsx(Input, {
										type: "text",
										placeholder: t("Replace with"),
										value: replaceValue,
										onChange: (e) => setReplaceValue(e.target.value),
										className: "h-7 min-w-0 flex-1 max-w-[180px] text-[12px]",
										"aria-label": t("Replace with")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex shrink-0 items-center gap-0.5",
									children: [
										findMatches.length > 0 && /* @__PURE__ */ jsxs("span", {
											className: "shrink-0 text-[11px] text-muted-foreground tabular-nums",
											children: [
												findMatchIndex + 1,
												"/",
												findMatches.length
											]
										}),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "h-7 w-7 shrink-0",
											onClick: () => goToFindMatch(-1),
											disabled: findMatches.length === 0,
											"aria-label": t("Previous match"),
											children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "h-7 w-7 shrink-0",
											onClick: () => goToFindMatch(1),
											disabled: findMatches.length === 0,
											"aria-label": t("Next match"),
											children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })
										}),
										findPanelMode === "replace" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "secondary",
											size: "sm",
											className: "h-7 shrink-0 text-[11px] px-2",
											onClick: replaceCurrent,
											disabled: findMatches.length === 0,
											children: t("Replace")
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "secondary",
											size: "sm",
											className: "h-7 shrink-0 text-[11px] px-2",
											onClick: replaceAll,
											disabled: findMatches.length === 0,
											children: t("All")
										})] }),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "h-7 w-7 shrink-0",
											onClick: () => {
												setFindPanelMode(false);
												setFindInFileQuery("");
												setReplaceValue("");
												setFindMatches([]);
												setFindMatchIndex(0);
												const editor = editorRef.current;
												if (editor) {
													editor.deltaDecorations(findDecorationIdsRef.current, []);
													findDecorationIdsRef.current = [];
												}
											},
											"aria-label": t("Close find"),
											children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "min-h-0 flex-1",
							children: /* @__PURE__ */ jsx(Editor, {
								height: "100%",
								defaultLanguage: activeLang,
								language: activeLang,
								value: activeContent,
								onChange: handleEditorChange,
								onMount: handleEditorMount,
								theme: isDark ? MONACO_THEME_DARK : MONACO_THEME_LIGHT,
								beforeMount: defineAppThemes,
								options: {
									minimap: { enabled: true },
									fontSize: 13,
									lineNumbers: "on",
									scrollBeyondLastLine: false,
									wordWrap: "on",
									padding: { top: 16 }
								},
								loading: /* @__PURE__ */ jsx("div", {
									className: "flex h-full items-center justify-center bg-background text-muted-foreground",
									children: t("Loading editor...")
								}),
								className: cn("rounded-b-lg")
							}, `${activeFile}-${isDark}`)
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 items-center justify-between gap-4 border-t border-border bg-muted/20 px-3 py-1.5 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 items-center gap-3",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "truncate font-mono",
										title: activeFile,
										children: activeFile
									}),
									/* @__PURE__ */ jsx("span", {
										className: "shrink-0 capitalize",
										children: activeLang
									}),
									dirtyFiles.has(activeFile) && /* @__PURE__ */ jsx("span", {
										className: "shrink-0 text-amber-600 dark:text-amber-500",
										children: t("Unsaved")
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex shrink-0 items-center gap-3 tabular-nums",
								children: [
									cursorPosition && /* @__PURE__ */ jsxs("span", { children: [
										t("Ln"),
										" ",
										cursorPosition.lineNumber,
										", ",
										t("Col"),
										" ",
										cursorPosition.column
									] }),
									/* @__PURE__ */ jsxs("span", { children: [
										lineCount,
										" ",
										t("lines")
									] }),
									/* @__PURE__ */ jsxs("span", { children: [
										activeContent.length,
										" ",
										t("chars")
									] })
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: addFileOpen,
				onOpenChange: setAddFileOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add file") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t("Enter the file path (e.g. src/utils.js or lib/helper.ts).")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "new-file-path",
								className: "text-[13px]",
								children: t("File path")
							}), /* @__PURE__ */ jsx(Input, {
								id: "new-file-path",
								value: newFilePath,
								onChange: (e) => setNewFilePath(e.target.value),
								placeholder: "src/utils.js",
								className: "mt-2 text-[13px] font-mono",
								onKeyDown: (e) => e.key === "Enter" && addFile()
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setAddFileOpen(false),
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								onClick: addFile,
								disabled: !newFilePath.trim(),
								children: t("Add file")
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: deleteConfirmPath !== null,
				onOpenChange: (open) => !open && setDeleteConfirmPath(null),
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Remove file") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("Remove"),
								" \"",
								deleteConfirmPath,
								"\"",
								" ",
								t("from the project? This cannot be undone.")
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => setDeleteConfirmPath(null),
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							onClick: () => deleteConfirmPath && deleteFile(deleteConfirmPath),
							children: t("Remove")
						})]
					})]
				})
			})
		]
	});
}
export { View as t };
