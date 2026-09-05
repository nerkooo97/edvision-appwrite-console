const POSTGRES_SQL_RUN_SHORTCUT_RAW = "mod+enter";
const POSTGRES_SQL_RUN_SHORTCUT_COMBOS = ["meta+enter", "control+enter"];
const POSTGRES_SQL_EXPLAIN_SHORTCUT_RAW = "mod+shift+e";
const POSTGRES_SQL_EXPLAIN_SHORTCUT_COMBOS = ["meta+shift+e", "control+shift+e"];
const POSTGRES_SQL_SAVE_SHORTCUT_RAW = "mod+s";
const POSTGRES_SQL_SAVE_SHORTCUT_COMBOS = ["meta+s", "control+s"];
const POSTGRES_SQL_FORMAT_SHORTCUT_RAW = "shift+alt+f";
const POSTGRES_SQL_FORMAT_SHORTCUT_COMBOS = ["shift+alt+f"];
const POSTGRES_SQL_UNDO_SHORTCUT_RAW = "mod+z";
const POSTGRES_SQL_REDO_SHORTCUT_RAW = "mod+shift+z";
const POSTGRES_SQL_NEXT_TAB_SHORTCUT_RAW = "ctrl+tab";
const POSTGRES_SQL_NEXT_TAB_SHORTCUT_COMBOS = ["control+tab"];
const POSTGRES_SQL_PREV_TAB_SHORTCUT_RAW = "ctrl+shift+tab";
const POSTGRES_SQL_PREV_TAB_SHORTCUT_COMBOS = ["control+shift+tab"];
const POSTGRES_SQL_NEW_TAB_SHORTCUT_RAW = "mod+t";
const POSTGRES_SQL_NEW_TAB_SHORTCUT_COMBOS = ["meta+t", "control+t"];
const POSTGRES_SQL_CLOSE_TAB_SHORTCUT_RAW = "mod+w";
const POSTGRES_SQL_CLOSE_TAB_SHORTCUT_COMBOS = ["meta+w", "control+w"];
const POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW = "mod+shift+p";
const POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_COMBOS = ["meta+shift+p", "control+shift+p"];
const POSTGRES_SQL_JUMP_TAB_DIGIT_SHORTCUTS = Array.from({ length: 8 }, (_, index) => ({
	id: `postgres-sql.jump-tab-${index + 1}`,
	description: `Jump to tab ${index + 1}`,
	raw: `mod+${index + 1}`
}));
const POSTGRES_SQL_EDITOR_SHORTCUTS = [
	{
		id: "postgres-sql.run",
		description: "Run",
		raw: POSTGRES_SQL_RUN_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.explain",
		description: "Explain",
		raw: POSTGRES_SQL_EXPLAIN_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.save",
		description: "Save query",
		raw: POSTGRES_SQL_SAVE_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.format",
		description: "Format SQL",
		raw: POSTGRES_SQL_FORMAT_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.undo",
		description: "Undo",
		raw: POSTGRES_SQL_UNDO_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.redo",
		description: "Redo",
		raw: POSTGRES_SQL_REDO_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.next-tab",
		description: "Next query tab",
		raw: POSTGRES_SQL_NEXT_TAB_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.prev-tab",
		description: "Previous query tab",
		raw: POSTGRES_SQL_PREV_TAB_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.new-tab",
		description: "New query tab",
		raw: POSTGRES_SQL_NEW_TAB_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.close-tab",
		description: "Close query tab",
		raw: POSTGRES_SQL_CLOSE_TAB_SHORTCUT_RAW
	},
	{
		id: "postgres-sql.jump-tab-picker",
		description: "Go to query tab",
		raw: POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW
	},
	...POSTGRES_SQL_JUMP_TAB_DIGIT_SHORTCUTS,
	{
		id: "postgres-sql.jump-tab-last",
		description: "Jump to last tab",
		raw: "mod+9"
	}
];
export { POSTGRES_SQL_RUN_SHORTCUT_COMBOS as _, POSTGRES_SQL_EXPLAIN_SHORTCUT_RAW as a, POSTGRES_SQL_SAVE_SHORTCUT_RAW as b, POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_COMBOS as c, POSTGRES_SQL_NEW_TAB_SHORTCUT_RAW as d, POSTGRES_SQL_NEXT_TAB_SHORTCUT_COMBOS as f, POSTGRES_SQL_REDO_SHORTCUT_RAW as g, POSTGRES_SQL_PREV_TAB_SHORTCUT_RAW as h, POSTGRES_SQL_EXPLAIN_SHORTCUT_COMBOS as i, POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW as l, POSTGRES_SQL_PREV_TAB_SHORTCUT_COMBOS as m, POSTGRES_SQL_CLOSE_TAB_SHORTCUT_RAW as n, POSTGRES_SQL_FORMAT_SHORTCUT_COMBOS as o, POSTGRES_SQL_NEXT_TAB_SHORTCUT_RAW as p, POSTGRES_SQL_EDITOR_SHORTCUTS as r, POSTGRES_SQL_FORMAT_SHORTCUT_RAW as s, POSTGRES_SQL_CLOSE_TAB_SHORTCUT_COMBOS as t, POSTGRES_SQL_NEW_TAB_SHORTCUT_COMBOS as u, POSTGRES_SQL_RUN_SHORTCUT_RAW as v, POSTGRES_SQL_UNDO_SHORTCUT_RAW as x, POSTGRES_SQL_SAVE_SHORTCUT_COMBOS as y };
