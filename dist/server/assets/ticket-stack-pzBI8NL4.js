const INIT_TICKET_STACK_OPTIONS = [
	{
		id: "appwrite",
		label: "Appwrite",
		iconKey: "appwrite"
	},
	{
		id: "react",
		label: "React",
		iconKey: "react"
	},
	{
		id: "tanstack",
		label: "TanStack Start",
		iconKey: "tanstack"
	},
	{
		id: "next",
		label: "Next.js",
		iconKey: "next"
	},
	{
		id: "vue",
		label: "Vue.js",
		iconKey: "vue"
	},
	{
		id: "nuxt",
		label: "Nuxt",
		iconKey: "nuxt"
	},
	{
		id: "sveltekit",
		label: "SvelteKit",
		iconKey: "sveltekit"
	},
	{
		id: "angular",
		label: "Angular",
		iconKey: "angular"
	},
	{
		id: "solid",
		label: "Solid",
		iconKey: "solid"
	},
	{
		id: "astro",
		label: "Astro",
		iconKey: "astro"
	},
	{
		id: "flutter",
		label: "Flutter",
		iconKey: "flutter"
	},
	{
		id: "react-native",
		label: "React Native",
		iconKey: "react-native"
	},
	{
		id: "node",
		label: "Node.js",
		iconKey: "node"
	},
	{
		id: "python",
		label: "Python",
		iconKey: "python"
	},
	{
		id: "go",
		label: "Go",
		iconKey: "go"
	},
	{
		id: "php",
		label: "PHP",
		iconKey: "php"
	},
	{
		id: "ruby",
		label: "Ruby",
		iconKey: "ruby"
	},
	{
		id: "dotnet",
		label: ".NET",
		iconKey: "dotnet"
	},
	{
		id: "dart",
		label: "Dart",
		iconKey: "dart"
	},
	{
		id: "deno",
		label: "Deno",
		iconKey: "deno"
	},
	{
		id: "swift",
		label: "Swift",
		iconKey: "swift"
	},
	{
		id: "kotlin",
		label: "Kotlin",
		iconKey: "kotlin"
	},
	{
		id: "android",
		label: "Android",
		iconKey: "android"
	},
	{
		id: "apple",
		label: "Apple",
		iconKey: "apple"
	}
];
const INIT_TICKET_STACK_IDS = new Set(INIT_TICKET_STACK_OPTIONS.map((option) => option.id));
const INIT_TICKET_MAX_STACK = 6;
const INIT_TICKET_DEFAULT_STACK = ["appwrite"];
function getInitTicketStackOption(id) {
	return INIT_TICKET_STACK_OPTIONS.find((option) => option.id === id);
}
function parseInitTicketStack(value) {
	if (!Array.isArray(value)) return [];
	return value.filter((item) => typeof item === "string" && INIT_TICKET_STACK_IDS.has(item));
}
export { parseInitTicketStack as a, getInitTicketStackOption as i, INIT_TICKET_MAX_STACK as n, INIT_TICKET_STACK_OPTIONS as r, INIT_TICKET_DEFAULT_STACK as t };
