import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
var CarouselContext = React$1.createContext(null);
function useCarousel() {
	const context = React$1.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React$1.useState(false);
	const [canScrollNext, setCanScrollNext] = React$1.useState(false);
	const onSelect = React$1.useCallback((api$1) => {
		if (!api$1) return;
		setCanScrollPrev(api$1.canScrollPrev());
		setCanScrollNext(api$1.canScrollNext());
	}, []);
	const scrollPrev = React$1.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React$1.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React$1.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React$1.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React$1.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			...props,
			children
		})
	});
}
function CarouselContent({ className, ...props }) {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("flex", orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col", className),
			...props
		})
	});
}
function CarouselItem({ className, ...props }) {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "ps-4" : "pt-4", className),
		...props
	});
}
function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		"data-slot": "carousel-previous",
		variant,
		size,
		className: cn("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -start-12 -translate-y-1/2" : "-top-12 start-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowLeft, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
}
function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		"data-slot": "carousel-next",
		variant,
		size,
		className: cn("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -end-12 -translate-y-1/2" : "-bottom-12 start-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowRight, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
}
export { CarouselPrevious as a, CarouselNext as i, CarouselContent as n, CarouselItem as r, Carousel as t };
