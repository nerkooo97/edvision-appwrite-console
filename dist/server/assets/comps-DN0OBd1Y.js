import { t as cn } from "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import { t as shouldSuppressGlobalShortcuts } from "./global-shortcut-suppress-C5j6k0iy.js";
import { t as Slider } from "./slider-BKjrzSmD.js";
import { n as buttonVariants, t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, o as DropdownMenuLabel, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { a as SheetHeader, i as SheetDescription, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./sheet-CbM5lIV1.js";
import { c as ContextMenuTrigger, n as ContextMenuContent, r as ContextMenuItem, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as Calendar$1 } from "./calendar-6OJ5dwYN.js";
import { n as ToggleGroupItem, r as Toggle, t as ToggleGroup } from "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./horizontal-resize-BcegzCwH.js";
import { n as ResizablePanel, r as ResizablePanelGroup, t as ResizableHandle } from "./resizable-CfBrThFG.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as Separator } from "./separator-B2hXZdKL.js";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-DJFLXbij.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import { t as useIsMobile } from "./use-mobile-C9thwzsE.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-BZWeW6wv.js";
import { i as InputOTPSlot, n as InputOTPGroup, t as InputOTP } from "./input-otp-DTuOA8dL.js";
import { n as AvatarFallback, t as Avatar } from "./avatar-DsYcfNc5.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, l as AlertDialogTrigger, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-CRQIrNDu.js";
import { a as DrawerFooter, c as DrawerTrigger, i as DrawerDescription, n as DrawerClose, o as DrawerHeader, r as DrawerContent, s as DrawerTitle, t as Drawer } from "./drawer-By6QdQ1h.js";
import { t as ScrollArea } from "./scroll-area-CakPDLgR.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { useMemo, useState } from "react";
import { AlertCircle, ChevronLeftIcon, ChevronRightIcon, Component as Component$1, FormInput, Info, Layers, LayoutDashboard, Navigation, Sparkles, Table } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React$1.createContext(null);
function useSidebar() {
	const context = React$1.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React$1.useState(false);
	const [_open, _setOpen] = React$1.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React$1.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
	}, [setOpenProp, open]);
	const toggleSidebar = React$1.useCallback(() => {
		return isMobile ? setOpenMobile((open$1) => !open$1) : setOpen((open$1) => !open$1);
	}, [
		isMobile,
		setOpen,
		setOpenMobile
	]);
	React$1.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				if (shouldSuppressGlobalShortcuts(document.activeElement)) return;
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = React$1.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ jsx(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsx("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": SIDEBAR_WIDTH,
					"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
					...style
				},
				className: cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className),
				...props,
				children
			})
		})
	});
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar",
		className: cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className),
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ jsx(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: /* @__PURE__ */ jsxs(SheetContent, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: [/* @__PURE__ */ jsxs(SheetHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full flex-col",
				children
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "group peer text-sidebar-foreground hidden md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ jsx("div", {
			"data-slot": "sidebar-gap",
			className: cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ jsx("div", {
			"data-slot": "sidebar-container",
			className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "start-0 group-data-[collapsible=offcanvas]:start-[calc(var(--sidebar-width)*-1)]" : "end-0 group-data-[collapsible=offcanvas]:end-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-e group-data-[side=right]:border-s", className),
			...props,
			children: /* @__PURE__ */ jsx("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border",
				children
			})
		})]
	});
}
function SidebarContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
}
function SidebarGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: cn("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "div", {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: cn("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
		...props
	});
}
function SidebarGroupContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: cn("w-full text-sm", className),
		...props
	});
}
function SidebarMenu({ className, ...props }) {
	return /* @__PURE__ */ jsx("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: cn("flex w-full min-w-0 flex-col gap-1", className),
		...props
	});
}
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-start text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pe-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
	const Comp = asChild ? Slot : "button";
	const { isMobile, state } = useSidebar();
	const button = /* @__PURE__ */ jsx(Comp, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": size,
		"data-active": isActive,
		className: cn(sidebarMenuButtonVariants({
			variant,
			size
		}), className),
		...props
	});
	if (!tooltip) return button;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: button
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
}
function Pagination({ className, ...props }) {
	return /* @__PURE__ */ jsx("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: cn("mx-auto flex w-full justify-center", className),
		...props
	});
}
function PaginationContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("ul", {
		"data-slot": "pagination-content",
		className: cn("flex flex-row items-center gap-1", className),
		...props
	});
}
function PaginationItem({ ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "pagination-item",
		...props
	});
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
	return /* @__PURE__ */ jsx("a", {
		"aria-current": isActive ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": isActive,
		className: cn(buttonVariants({
			variant: isActive ? "outline" : "ghost",
			size
		}), className),
		...props
	});
}
function PaginationPrevious({ className, ...props }) {
	return /* @__PURE__ */ jsxs(PaginationLink, {
		"aria-label": "Go to previous page",
		size: "default",
		className: cn("gap-1 px-2.5 sm:ps-2.5", className),
		...props,
		children: [/* @__PURE__ */ jsx(ChevronLeftIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function PaginationNext({ className, ...props }) {
	return /* @__PURE__ */ jsxs(PaginationLink, {
		"aria-label": "Go to next page",
		size: "default",
		className: cn("gap-1 px-2.5 sm:pe-2.5", className),
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ jsx(ChevronRightIcon, {})]
	});
}
function HoverCard({ ...props }) {
	return /* @__PURE__ */ jsx(HoverCardPrimitive.Root, {
		"data-slot": "hover-card",
		...props
	});
}
function HoverCardTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(HoverCardPrimitive.Trigger, {
		"data-slot": "hover-card-trigger",
		...props
	});
}
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
	return /* @__PURE__ */ jsx(HoverCardPrimitive.Portal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ jsx(HoverCardPrimitive.Content, {
			"data-slot": "hover-card-content",
			align,
			sideOffset,
			className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
			...props
		})
	});
}
function AspectRatio({ ...props }) {
	return /* @__PURE__ */ jsx(AspectRatioPrimitive.Root, {
		"data-slot": "aspect-ratio",
		...props
	});
}
var UI_COMPONENTS = [
	{
		name: "Card",
		file: "card",
		category: "layout",
		description: "Container for content sections"
	},
	{
		name: "Separator",
		file: "separator",
		category: "layout",
		description: "Visual divider between sections"
	},
	{
		name: "Aspect Ratio",
		file: "aspect-ratio",
		category: "layout",
		description: "Maintain aspect ratio for media"
	},
	{
		name: "Resizable",
		file: "resizable",
		category: "layout",
		description: "Resizable panels and containers"
	},
	{
		name: "Scroll Area",
		file: "scroll-area",
		category: "layout",
		description: "Custom scrollable container"
	},
	{
		name: "Skeleton",
		file: "skeleton",
		category: "layout",
		description: "Loading placeholder component"
	},
	{
		name: "Breadcrumb",
		file: "breadcrumb",
		category: "navigation",
		description: "Navigation breadcrumb trail"
	},
	{
		name: "Navigation Menu",
		file: "navigation-menu",
		category: "navigation",
		description: "Main navigation menu"
	},
	{
		name: "Menubar",
		file: "menubar",
		category: "navigation",
		description: "Application menubar"
	},
	{
		name: "Sidebar",
		file: "sidebar",
		category: "navigation",
		description: "Collapsible sidebar component"
	},
	{
		name: "Tabs",
		file: "tabs",
		category: "navigation",
		description: "Tabbed interface"
	},
	{
		name: "Pagination",
		file: "pagination",
		category: "navigation",
		description: "Page navigation controls"
	},
	{
		name: "Button",
		file: "button",
		category: "forms",
		description: "Interactive button element"
	},
	{
		name: "Input",
		file: "input",
		category: "forms",
		description: "Text input field"
	},
	{
		name: "Textarea",
		file: "textarea",
		category: "forms",
		description: "Multi-line text input"
	},
	{
		name: "Select",
		file: "select",
		category: "forms",
		description: "Dropdown selection"
	},
	{
		name: "Checkbox",
		file: "checkbox",
		category: "forms",
		description: "Checkbox input"
	},
	{
		name: "Radio Group",
		file: "radio-group",
		category: "forms",
		description: "Radio button group"
	},
	{
		name: "Switch",
		file: "switch",
		category: "forms",
		description: "Toggle switch"
	},
	{
		name: "Slider",
		file: "slider",
		category: "forms",
		description: "Range slider input"
	},
	{
		name: "Form",
		file: "form",
		category: "forms",
		description: "Form wrapper with validation"
	},
	{
		name: "Label",
		file: "label",
		category: "forms",
		description: "Form field label"
	},
	{
		name: "Input OTP",
		file: "input-otp",
		category: "forms",
		description: "OTP code input"
	},
	{
		name: "ID Input",
		file: "id-input",
		category: "forms",
		description: "Custom ID input field"
	},
	{
		name: "Dialog",
		file: "dialog",
		category: "overlays",
		description: "Modal dialog window"
	},
	{
		name: "Alert Dialog",
		file: "alert-dialog",
		category: "overlays",
		description: "Confirmation dialog"
	},
	{
		name: "Sheet",
		file: "sheet",
		category: "overlays",
		description: "Slide-out panel"
	},
	{
		name: "Drawer",
		file: "drawer",
		category: "overlays",
		description: "Mobile drawer component"
	},
	{
		name: "Popover",
		file: "popover",
		category: "overlays",
		description: "Popover tooltip"
	},
	{
		name: "Hover Card",
		file: "hover-card",
		category: "overlays",
		description: "Hover-triggered card"
	},
	{
		name: "Tooltip",
		file: "tooltip",
		category: "overlays",
		description: "Contextual tooltip"
	},
	{
		name: "Context Menu",
		file: "context-menu",
		category: "overlays",
		description: "Right-click menu"
	},
	{
		name: "Dropdown Menu",
		file: "dropdown-menu",
		category: "overlays",
		description: "Dropdown menu"
	},
	{
		name: "Alert",
		file: "alert",
		category: "feedback",
		description: "Alert notification"
	},
	{
		name: "Badge",
		file: "badge",
		category: "feedback",
		description: "Status badge"
	},
	{
		name: "Progress",
		file: "progress",
		category: "feedback",
		description: "Progress indicator"
	},
	{
		name: "Sonner",
		file: "sonner",
		category: "feedback",
		description: "Toast notifications"
	},
	{
		name: "Loader",
		file: "loader",
		category: "feedback",
		description: "Loading spinner"
	},
	{
		name: "Table",
		file: "table",
		category: "data-display",
		description: "Data table component"
	},
	{
		name: "Accordion",
		file: "accordion",
		category: "data-display",
		description: "Collapsible content sections"
	},
	{
		name: "Collapsible",
		file: "collapsible",
		category: "data-display",
		description: "Expandable content"
	},
	{
		name: "Chart",
		file: "chart",
		category: "data-display",
		description: "Chart visualization"
	},
	{
		name: "Avatar",
		file: "avatar",
		category: "data-display",
		description: "User avatar image"
	},
	{
		name: "Calendar",
		file: "calendar",
		category: "data-display",
		description: "Date picker calendar"
	},
	{
		name: "Carousel",
		file: "carousel",
		category: "data-display",
		description: "Image/content carousel"
	},
	{
		name: "Upgrade Curtain",
		file: "upgrade-curtain",
		category: "layout",
		description: "Feature upgrade overlay"
	},
	{
		name: "Command",
		file: "command",
		category: "navigation",
		description: "Command palette"
	},
	{
		name: "Toggle",
		file: "toggle",
		category: "forms",
		description: "Toggle button"
	},
	{
		name: "Toggle Group",
		file: "toggle-group",
		category: "forms",
		description: "Toggle button group"
	}
];
var CATEGORIES = [
	{
		id: "all",
		label: "All Components",
		icon: Component$1
	},
	{
		id: "layout",
		label: "Layout",
		icon: Layers
	},
	{
		id: "navigation",
		label: "Navigation",
		icon: Navigation
	},
	{
		id: "forms",
		label: "Forms",
		icon: FormInput
	},
	{
		id: "overlays",
		label: "Overlays",
		icon: Sparkles
	},
	{
		id: "feedback",
		label: "Feedback",
		icon: AlertCircle
	},
	{
		id: "data-display",
		label: "Data Display",
		icon: Table
	}
];
function View() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const filteredComponents = useMemo(() => {
		if (selectedCategory === "all") return UI_COMPONENTS;
		return UI_COMPONENTS.filter((comp) => comp.category === selectedCategory);
	}, [selectedCategory]);
	const categories = useMemo(() => {
		return CATEGORIES.map((cat) => ({
			...cat,
			count: UI_COMPONENTS.filter((comp) => cat.id === "all" ? true : comp.category === cat.id).length
		}));
	}, []);
	return /* @__PURE__ */ jsx(SidebarProvider, { children: /* @__PURE__ */ jsxs("div", {
		className: "flex h-dvh w-full",
		children: [/* @__PURE__ */ jsx(Sidebar, {
			className: "border-e",
			children: /* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsxs(SidebarGroup, { children: [/* @__PURE__ */ jsxs(SidebarGroupLabel, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(LayoutDashboard, { className: "h-4 w-4" }), "UI Components"]
			}), /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: categories.map((category) => /* @__PURE__ */ jsxs(SidebarMenuButton, {
				onClick: () => setSelectedCategory(category.id),
				className: cn("w-full justify-between", selectedCategory === category.id && "bg-accent"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(category.icon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: category.label })]
				}), /* @__PURE__ */ jsx("span", {
					className: "text-xs text-muted-foreground",
					children: category.count
				})]
			}, category.id)) }) })] }) })
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 overflow-auto",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto p-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-3xl font-bold mb-2",
							children: "UI Components Showcase"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "Browse and preview all available UI components in the design system"
						})]
					}),
					/* @__PURE__ */ jsx(Separator, { className: "mb-6" }),
					/* @__PURE__ */ jsxs(Tabs, {
						value: selectedCategory,
						onValueChange: (v) => setSelectedCategory(v),
						children: [/* @__PURE__ */ jsx(TabsList, {
							className: "mb-6",
							children: categories.map((category) => /* @__PURE__ */ jsxs(TabsTrigger, {
								value: category.id,
								children: [
									category.label,
									" (",
									category.count,
									")"
								]
							}, category.id))
						}), /* @__PURE__ */ jsx(TabsContent, {
							value: selectedCategory,
							className: "mt-0",
							children: /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
								children: filteredComponents.map((component) => /* @__PURE__ */ jsx(ComponentCard, { component }, component.file))
							})
						})]
					})
				]
			})
		})]
	}) });
}
function ComponentCard({ component }) {
	return /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsxs(CardTitle, {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ jsx(Component$1, { className: "h-4 w-4" }), component.name]
	}), component.description && /* @__PURE__ */ jsx(CardDescription, { children: component.description })] }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "text-sm",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "File: "
				}), /* @__PURE__ */ jsxs("code", {
					className: "text-xs bg-muted px-1.5 py-0.5 rounded",
					children: [component.file, ".tsx"]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "text-sm",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "Category: "
				}), /* @__PURE__ */ jsx("span", {
					className: "capitalize",
					children: component.category
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-2",
				children: /* @__PURE__ */ jsx(ComponentPreview, { component })
			})
		]
	}) })] });
}
function ComponentPreview({ component }) {
	const preview = {
		button: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ jsx(Button, { children: "Default" }),
				/* @__PURE__ */ jsx(Button, {
					variant: "secondary",
					children: "Secondary"
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					children: "Outline"
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					children: "Destructive"
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					children: "Ghost"
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "link",
					children: "Link"
				})
			]
		}),
		input: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx(Input, { placeholder: "Enter text..." }), /* @__PURE__ */ jsx(Input, {
				type: "email",
				placeholder: "email@example.com"
			})]
		}),
		textarea: /* @__PURE__ */ jsx(Textarea, { placeholder: "Type your message here..." }),
		select: /* @__PURE__ */ jsxs(Select, { children: [/* @__PURE__ */ jsx(SelectTrigger, {
			className: "w-full",
			children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select an option" })
		}), /* @__PURE__ */ jsxs(SelectContent, { children: [
			/* @__PURE__ */ jsx(SelectItem, {
				value: "option1",
				children: "Option 1"
			}),
			/* @__PURE__ */ jsx(SelectItem, {
				value: "option2",
				children: "Option 2"
			}),
			/* @__PURE__ */ jsx(SelectItem, {
				value: "option3",
				children: "Option 3"
			})
		] })] }),
		checkbox: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx(Checkbox, { id: "preview-check" }), /* @__PURE__ */ jsx(Label, {
				htmlFor: "preview-check",
				children: "Accept terms"
			})]
		}),
		"radio-group": /* @__PURE__ */ jsxs(RadioGroup, {
			defaultValue: "option1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(RadioGroupItem, {
					value: "option1",
					id: "r1"
				}), /* @__PURE__ */ jsx(Label, {
					htmlFor: "r1",
					children: "Option 1"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(RadioGroupItem, {
					value: "option2",
					id: "r2"
				}), /* @__PURE__ */ jsx(Label, {
					htmlFor: "r2",
					children: "Option 2"
				})]
			})]
		}),
		switch: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx(Switch, {}), /* @__PURE__ */ jsx(Label, { children: "Enable notifications" })]
		}),
		slider: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx(Slider, {
				defaultValue: [50],
				max: 100,
				step: 1
			}), /* @__PURE__ */ jsx(Slider, {
				defaultValue: [25, 75],
				max: 100,
				step: 1
			})]
		}),
		label: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx(Label, { children: "Label text" }), /* @__PURE__ */ jsx(Label, {
				htmlFor: "input-id",
				children: "Label with htmlFor"
			})]
		}),
		toggle: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ jsx(Toggle, { children: "Toggle" }), /* @__PURE__ */ jsx(Toggle, {
				variant: "outline",
				children: "Outline"
			})]
		}),
		"toggle-group": /* @__PURE__ */ jsxs(ToggleGroup, {
			type: "single",
			children: [
				/* @__PURE__ */ jsx(ToggleGroupItem, {
					value: "a",
					children: "A"
				}),
				/* @__PURE__ */ jsx(ToggleGroupItem, {
					value: "b",
					children: "B"
				}),
				/* @__PURE__ */ jsx(ToggleGroupItem, {
					value: "c",
					children: "C"
				})
			]
		}),
		card: /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Card Title" }), /* @__PURE__ */ jsx(CardDescription, { children: "Card description text" })] }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", {
			className: "text-sm",
			children: "Card content goes here"
		}) })] }),
		separator: /* @__PURE__ */ jsx(Separator, {}),
		"aspect-ratio": /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-xs",
			children: /* @__PURE__ */ jsx(AspectRatio, {
				ratio: 16 / 9,
				className: "bg-muted rounded-md flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-sm text-muted-foreground",
					children: "16:9"
				})
			})
		}),
		"scroll-area": /* @__PURE__ */ jsx(ScrollArea, {
			className: "h-24 w-full rounded border p-4",
			children: /* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ jsxs("div", {
					className: "text-sm",
					children: ["Item ", i + 1]
				}, i))
			})
		}),
		resizable: /* @__PURE__ */ jsxs(ResizablePanelGroup, {
			direction: "horizontal",
			className: "max-w-md rounded-lg border",
			children: [
				/* @__PURE__ */ jsx(ResizablePanel, {
					defaultSize: 50,
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full items-center justify-center p-4",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-sm",
							children: "Panel 1"
						})
					})
				}),
				/* @__PURE__ */ jsx(ResizableHandle, {}),
				/* @__PURE__ */ jsx(ResizablePanel, {
					defaultSize: 50,
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full items-center justify-center p-4",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-sm",
							children: "Panel 2"
						})
					})
				})
			]
		}),
		skeleton: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
				/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
				/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" })
			]
		}),
		breadcrumb: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
			/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
				href: "#",
				children: "Home"
			}) }),
			/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
			/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
				href: "#",
				children: "Components"
			}) }),
			/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
			/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Breadcrumb" }) })
		] }) }),
		tabs: /* @__PURE__ */ jsxs(Tabs, {
			defaultValue: "tab1",
			children: [
				/* @__PURE__ */ jsxs(TabsList, { children: [
					/* @__PURE__ */ jsx(TabsTrigger, {
						value: "tab1",
						children: "Tab 1"
					}),
					/* @__PURE__ */ jsx(TabsTrigger, {
						value: "tab2",
						children: "Tab 2"
					}),
					/* @__PURE__ */ jsx(TabsTrigger, {
						value: "tab3",
						children: "Tab 3"
					})
				] }),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "tab1",
					className: "mt-2 text-sm",
					children: "Content for Tab 1"
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "tab2",
					className: "mt-2 text-sm",
					children: "Content for Tab 2"
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "tab3",
					className: "mt-2 text-sm",
					children: "Content for Tab 3"
				})
			]
		}),
		pagination: /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
			/* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationPrevious, { href: "#" }) }),
			/* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, {
				href: "#",
				children: "1"
			}) }),
			/* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, {
				href: "#",
				isActive: true,
				children: "2"
			}) }),
			/* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, {
				href: "#",
				children: "3"
			}) }),
			/* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationNext, { href: "#" }) })
		] }) }),
		command: /* @__PURE__ */ jsxs(Command$1, {
			className: "rounded-lg border",
			children: [/* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search..." }), /* @__PURE__ */ jsxs(CommandList, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }), /* @__PURE__ */ jsxs(CommandGroup, {
				heading: "Suggestions",
				children: [
					/* @__PURE__ */ jsx(CommandItem, { children: /* @__PURE__ */ jsx("span", { children: "Calendar" }) }),
					/* @__PURE__ */ jsx(CommandItem, { children: /* @__PURE__ */ jsx("span", { children: "Search Emoji" }) }),
					/* @__PURE__ */ jsx(CommandItem, { children: /* @__PURE__ */ jsx("span", { children: "Calculator" }) })
				]
			})] })]
		}),
		dialog: /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, { children: "Open Dialog" })
		}), /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Dialog Title" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Dialog description text" })] }), /* @__PURE__ */ jsx("p", {
			className: "text-sm",
			children: "Dialog content goes here"
		})] })] }),
		"alert-dialog": /* @__PURE__ */ jsxs(AlertDialog, { children: [/* @__PURE__ */ jsx(AlertDialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				children: "Open Alert"
			})
		}), /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Are you sure?" }), /* @__PURE__ */ jsx(AlertDialogDescription, { children: "This action cannot be undone." })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ jsx(AlertDialogAction, { children: "Continue" })] })] })] }),
		sheet: /* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsx(SheetTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, { children: "Open Sheet" })
		}), /* @__PURE__ */ jsxs(SheetContent, { children: [/* @__PURE__ */ jsxs(SheetHeader, { children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Sheet Title" }), /* @__PURE__ */ jsx(SheetDescription, { children: "Sheet description" })] }), /* @__PURE__ */ jsx("p", {
			className: "text-sm mt-4",
			children: "Sheet content"
		})] })] }),
		drawer: /* @__PURE__ */ jsxs(Drawer, { children: [/* @__PURE__ */ jsx(DrawerTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, { children: "Open Drawer" })
		}), /* @__PURE__ */ jsxs(DrawerContent, { children: [
			/* @__PURE__ */ jsxs(DrawerHeader, { children: [/* @__PURE__ */ jsx(DrawerTitle, { children: "Drawer Title" }), /* @__PURE__ */ jsx(DrawerDescription, { children: "Drawer description" })] }),
			/* @__PURE__ */ jsx("div", {
				className: "p-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-sm",
					children: "Drawer content"
				})
			}),
			/* @__PURE__ */ jsxs(DrawerFooter, { children: [/* @__PURE__ */ jsx(Button, { children: "Submit" }), /* @__PURE__ */ jsx(DrawerClose, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					children: "Cancel"
				})
			})] })
		] })] }),
		popover: /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				children: "Open Popover"
			})
		}), /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx("h4", {
				className: "font-medium text-sm",
				children: "Popover Title"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Popover content text"
			})]
		}) })] }),
		"hover-card": /* @__PURE__ */ jsxs(HoverCard, { children: [/* @__PURE__ */ jsx(HoverCardTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "link",
				children: "Hover me"
			})
		}), /* @__PURE__ */ jsx(HoverCardContent, { children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("h4", {
				className: "text-sm font-semibold",
				children: "Hover Card"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Hover card content"
			})]
		}) })] }),
		tooltip: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "icon",
				"aria-label": "Show tooltip",
				children: /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Tooltip content" }) })] }) }),
		"context-menu": /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
			className: "flex h-24 w-full items-center justify-center rounded-md border border-dashed",
			children: "Right click here"
		}), /* @__PURE__ */ jsxs(ContextMenuContent, { children: [
			/* @__PURE__ */ jsx(ContextMenuItem, { children: "Copy" }),
			/* @__PURE__ */ jsx(ContextMenuItem, { children: "Paste" }),
			/* @__PURE__ */ jsx(ContextMenuItem, { children: "Delete" })
		] })] }),
		"dropdown-menu": /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				children: "Open Menu"
			})
		}), /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
			/* @__PURE__ */ jsx(DropdownMenuLabel, { children: "My Account" }),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Profile" }),
			/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Settings" }),
			/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Logout" })
		] })] }),
		alert: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx(Alert, { children: /* @__PURE__ */ jsx(AlertDescription, { children: "This is a default alert message." }) }), /* @__PURE__ */ jsx(Alert, {
				variant: "destructive",
				children: /* @__PURE__ */ jsx(AlertDescription, { children: "This is a destructive alert message." })
			})]
		}),
		badge: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ jsx(Badge, { children: "Default" }),
				/* @__PURE__ */ jsx(Badge, {
					variant: "secondary",
					children: "Secondary"
				}),
				/* @__PURE__ */ jsx(Badge, {
					variant: "outline",
					children: "Outline"
				}),
				/* @__PURE__ */ jsx(Badge, {
					variant: "destructive",
					children: "Destructive"
				})
			]
		}),
		progress: /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ jsx(Progress, { value: 33 }),
				/* @__PURE__ */ jsx(Progress, { value: 66 }),
				/* @__PURE__ */ jsx(Progress, { value: 100 })
			]
		}),
		table: /* @__PURE__ */ jsx("div", {
			className: "rounded-md border",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Name"
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Status"
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Role"
					})
				]
			}) }), /* @__PURE__ */ jsxs(TableBody, { children: [/* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: "Walter O'Brien"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: "Active"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: "Admin"
				})
			] }), /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: "Jane Smith"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: "Active"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: "User"
				})
			] })] })] })
		}),
		accordion: /* @__PURE__ */ jsxs(Accordion, {
			type: "single",
			collapsible: true,
			children: [/* @__PURE__ */ jsxs(AccordionItem, {
				value: "item-1",
				children: [/* @__PURE__ */ jsx(AccordionTrigger, { children: "Is it accessible?" }), /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It adheres to the WAI-ARIA design pattern." })]
			}), /* @__PURE__ */ jsxs(AccordionItem, {
				value: "item-2",
				children: [/* @__PURE__ */ jsx(AccordionTrigger, { children: "Is it styled?" }), /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It comes with default styles that match the design system." })]
			})]
		}),
		collapsible: /* @__PURE__ */ jsxs(Collapsible, { children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				children: "Toggle"
			})
		}), /* @__PURE__ */ jsx(CollapsibleContent, {
			className: "mt-2",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-md border p-4 text-sm",
				children: "Collapsible content goes here"
			})
		})] }),
		avatar: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2",
			children: [
				/* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarFallback, { children: "JD" }) }),
				/* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarFallback, { children: "AB" }) }),
				/* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarFallback, { children: "CD" }) })
			]
		}),
		calendar: /* @__PURE__ */ jsx(Calendar$1, {
			mode: "single",
			className: "rounded-md border"
		}),
		"input-otp": /* @__PURE__ */ jsx(InputOTP, {
			maxLength: 6,
			children: /* @__PURE__ */ jsxs(InputOTPGroup, { children: [
				/* @__PURE__ */ jsx(InputOTPSlot, { index: 0 }),
				/* @__PURE__ */ jsx(InputOTPSlot, { index: 1 }),
				/* @__PURE__ */ jsx(InputOTPSlot, { index: 2 }),
				/* @__PURE__ */ jsx(InputOTPSlot, { index: 3 }),
				/* @__PURE__ */ jsx(InputOTPSlot, { index: 4 }),
				/* @__PURE__ */ jsx(InputOTPSlot, { index: 5 })
			] })
		}),
		"id-input": /* @__PURE__ */ jsx(IdInput, { placeholder: "Enter custom ID" })
	}[component.file];
	if (preview) return /* @__PURE__ */ jsx("div", {
		className: "border rounded-md p-4 bg-muted/30 min-h-[100px] flex items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full",
			children: preview
		})
	});
	const complexNote = {
		form: "Requires react-hook-form setup",
		"navigation-menu": "Complex navigation component",
		menubar: "Application menubar component",
		sidebar: "Used in this view",
		chart: "Requires chart library setup",
		carousel: "Image/content carousel",
		sonner: "Toast notifications (requires Toaster provider)",
		loader: "Fullscreen loading component",
		"upgrade-curtain": "Feature upgrade overlay"
	}[component.file];
	return /* @__PURE__ */ jsx("div", {
		className: "border rounded-md p-4 bg-muted/30 min-h-[100px] flex items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center space-y-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: complexNote ? complexNote : `Preview for ${component.name}`
			}), /* @__PURE__ */ jsxs("span", {
				className: "text-xs text-muted-foreground/70",
				children: ["Import from @/components/ui/", component.file]
			})]
		})
	});
}
var SplitComponent = View;
export { SplitComponent as component };
