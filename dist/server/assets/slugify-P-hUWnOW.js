function slugifyHeading(text) {
	return text.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}
export { slugifyHeading as t };
