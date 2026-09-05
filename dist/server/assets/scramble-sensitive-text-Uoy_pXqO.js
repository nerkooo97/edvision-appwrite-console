var LOWER = "abcdefghijklmnopqrstuvwxyz";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var DIGIT = "0123456789";
var OTHER = `${LOWER}${UPPER}${DIGIT}`;
function nextRandomUnit() {
	if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
		const buf = new Uint32Array(1);
		crypto.getRandomValues(buf);
		return (buf[0] ?? 0) / 4294967296;
	}
	return Math.random();
}
function randomChar(alphabet) {
	return alphabet[Math.floor(nextRandomUnit() * alphabet.length)] ?? alphabet[0];
}
function scrambleSensitiveText(value) {
	let out = "";
	for (const ch of value) {
		if (/\s/u.test(ch)) {
			out += ch;
			continue;
		}
		if (ch >= "a" && ch <= "z") {
			out += randomChar(LOWER);
			continue;
		}
		if (ch >= "A" && ch <= "Z") {
			out += randomChar(UPPER);
			continue;
		}
		if (ch >= "0" && ch <= "9") {
			out += randomChar(DIGIT);
			continue;
		}
		out += randomChar(OTHER);
	}
	return out;
}
export { scrambleSensitiveText as t };
