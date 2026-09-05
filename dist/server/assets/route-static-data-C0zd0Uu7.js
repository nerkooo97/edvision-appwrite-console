const MARKETING_PAGE_ROUTE_STATIC_DATA = { pageType: "marketing" };
function isMarketingRouteMatch(match) {
	return match.staticData?.pageType === MARKETING_PAGE_ROUTE_STATIC_DATA.pageType;
}
export { isMarketingRouteMatch as n, MARKETING_PAGE_ROUTE_STATIC_DATA as t };
