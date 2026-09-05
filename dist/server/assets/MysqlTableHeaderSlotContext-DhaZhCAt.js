import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useLayoutEffect, useMemo, useRef } from "react";
var MysqlTableHeaderSlotContext = createContext(null);
function MysqlTableHeaderSlotProvider({ setSlot, children }) {
	const setSlotRef = useRef(setSlot);
	setSlotRef.current = setSlot;
	const value = useMemo(() => ({ setSlot: (slot) => {
		setSlotRef.current(slot);
	} }), []);
	return /* @__PURE__ */ jsx(MysqlTableHeaderSlotContext.Provider, {
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
function useMysqlTableHeaderSlot(slot) {
	const context = useContext(MysqlTableHeaderSlotContext);
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
export { useMysqlTableHeaderSlot as n, MysqlTableHeaderSlotProvider as t };
