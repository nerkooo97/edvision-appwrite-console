import { useEffect, useState } from "react";
function useDebouncedValue(value, delayMs) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => setDebounced(value), delayMs);
		return () => clearTimeout(timer);
	}, [value, delayMs]);
	return debounced;
}
export { useDebouncedValue as t };
