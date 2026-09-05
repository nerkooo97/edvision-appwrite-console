import { t as cn } from "./utils-DoqqkI3X.js";
const CONTENT_BODY_FONT_CLASS = "font-inter font-normal tracking-[-0.0045em]";
const DOCS_BODY_TEXT_CLASS = cn(CONTENT_BODY_FONT_CLASS, "text-[16px] leading-[1.7] text-muted-foreground @[640px]:text-[17px] @[640px]:leading-[1.65]");
const DOCS_TOC_LINK_TEXT_CLASS = "text-[14px] leading-5 text-muted-foreground";
const DOCS_TABLE_CELL_TEXT_CLASS = "text-[14px] leading-6 text-muted-foreground";
const DOCS_PAGE_EYEBROW_CLASS = "text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground";
const DOCS_PAGE_TITLE_CLASS = "font-aeonik-pro text-balance text-[30px] font-normal leading-[1.3] tracking-tight text-foreground @[640px]:text-[36px] @[640px]:leading-[1.25]";
const DOCS_STICKY_TITLE_CLASS = "min-w-0 truncate font-aeonik-pro text-[17px] font-medium leading-snug text-foreground @[560px]:text-[19px]";
const DOCS_PAGE_DESCRIPTION_CLASS = cn("mt-4 max-w-2xl", DOCS_BODY_TEXT_CLASS);
const DOCS_PROSE_WRAPPER_CLASS = cn("docs-prose", DOCS_BODY_TEXT_CLASS);
const DOCS_PROSE_DETAIL_CLASSES = [
	"[&>article>*:first-child]:mt-0",
	"[&_p]:my-0 [&_p+p]:mt-4",
	"[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-5",
	"[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:ps-5",
	"[&_li]:my-0 [&_li]:leading-[1.7] @[640px]:[&_li]:leading-[1.65]",
	"[&_strong]:font-semibold [&_strong]:text-foreground/90",
	"[&_code]:rounded-md [&_code]:border [&_code]:border-border [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-foreground/85",
	"[&_hr]:my-8 [&_hr]:border-border"
];
const DOCS_TOC_SECTION_TITLE_CLASS = "pb-2 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground";
const THREAD_PROSE_WRAPPER_CLASS = cn(DOCS_PROSE_WRAPPER_CLASS, "prose-links-neutral min-w-0 break-words");
const THREAD_PROSE_DETAIL_CLASSES = [
	...DOCS_PROSE_DETAIL_CLASSES,
	"[&_blockquote]:border-[var(--brand-cta)] [&_blockquote]:italic",
	"[&_img]:inline-block [&_img]:h-5 [&_img]:w-5 [&_img]:align-text-bottom"
];
export { DOCS_PAGE_TITLE_CLASS as a, DOCS_STICKY_TITLE_CLASS as c, DOCS_TOC_SECTION_TITLE_CLASS as d, THREAD_PROSE_DETAIL_CLASSES as f, DOCS_PAGE_EYEBROW_CLASS as i, DOCS_TABLE_CELL_TEXT_CLASS as l, DOCS_BODY_TEXT_CLASS as n, DOCS_PROSE_DETAIL_CLASSES as o, THREAD_PROSE_WRAPPER_CLASS as p, DOCS_PAGE_DESCRIPTION_CLASS as r, DOCS_PROSE_WRAPPER_CLASS as s, CONTENT_BODY_FONT_CLASS as t, DOCS_TOC_LINK_TEXT_CLASS as u };
