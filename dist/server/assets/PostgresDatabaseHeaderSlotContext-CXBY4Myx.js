import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useLayoutEffect, useMemo, useRef } from "react";
var PostgresDatabaseHeaderSlotContext = createContext(null);
function PostgresDatabaseHeaderSlotProvider({ setSlot, children }) {
	const setSlotRef = useRef(setSlot);
	setSlotRef.current = setSlot;
	const value = useMemo(() => ({ setSlot: (slot) => {
		setSlotRef.current(slot);
	} }), []);
	return /* @__PURE__ */ jsx(PostgresDatabaseHeaderSlotContext.Provider, {
		value,
		children
	});
}
function headerSlotEffectDeps(slot) {
	return [
		slot.searchPlaceholder,
		slot.searchValue,
		slot.onSearchChange,
		slot.createLabel,
		slot.onCreate,
		slot.createDisabled,
		slot.createDisabledTooltip,
		slot.showRefresh,
		slot.onRefresh,
		slot.isRefreshing,
		slot.filterTrigger
	];
}
function usePostgresDatabaseHeaderSlot(slot) {
	const context = useContext(PostgresDatabaseHeaderSlotContext);
	const slotRef = useRef(slot);
	slotRef.current = slot;
	useLayoutEffect(() => {
		if (!context) return;
		context.setSlot(slotRef.current);
		return () => {
			context.setSlot({});
		};
	}, [context, ...headerSlotEffectDeps(slot)]);
}
export { usePostgresDatabaseHeaderSlot as n, PostgresDatabaseHeaderSlotProvider as t };
