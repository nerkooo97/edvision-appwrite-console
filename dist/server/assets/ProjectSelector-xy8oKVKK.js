import { n as useT } from "./translate-DZcqveGn.js";
import { U as organizationProjectScopeQueryOptions } from "./organizations-BKtnlNrj.js";
import { R as useProject, U as useProjectsForTeamInfinite, _ as formatProjectNameForDisplay } from "./projects-BaTJenfQ.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import { jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
var DEFAULT_PROJECT_LIMIT = 15;
function ProjectSelector({ orgTeamId, value = "", excludeProjectIds, showProjectId = false, onSelectProject, getProjectLink, placeholder = "Select project", limit = DEFAULT_PROJECT_LIMIT, showApiKeysCount = false, triggerClassName, contentClassName, listClassName, disabled = false }) {
	const t = useT();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) setSearch("");
	}, [open]);
	const { data: projectScope } = useQuery(organizationProjectScopeQueryOptions(orgTeamId));
	const { projects, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useProjectsForTeamInfinite(open ? orgTeamId : null, limit, debouncedSearch || void 0, excludeProjectIds, projectScope ?? null);
	const { project: selectedProject } = useProject(value || void 0);
	const items = useMemo(() => {
		const mapped = projects.map((project) => {
			const name = formatProjectNameForDisplay(project.name);
			const paused = project.paused === true;
			const apiKeysCount = 0;
			return {
				value: project.$id,
				label: paused ? `${name} ${t("(Paused)")}` : name,
				searchText: `${project.name} ${project.$id}`,
				description: showApiKeysCount && apiKeysCount > 0 ? `${apiKeysCount} API key${apiKeysCount === 1 ? "" : "s"}` : showProjectId ? project.$id : void 0
			};
		});
		if (value && !mapped.some((item) => item.value === value)) {
			const name = selectedProject?.name ? formatProjectNameForDisplay(selectedProject.name) : value;
			mapped.unshift({
				value,
				label: name,
				searchText: `${name} ${value}`,
				description: showProjectId ? value : void 0
			});
		}
		return mapped;
	}, [
		projects,
		showApiKeysCount,
		showProjectId,
		t,
		value,
		selectedProject
	]);
	const handleSelectProject = (projectId) => {
		const link = getProjectLink?.(projectId);
		if (link) {
			navigate({
				to: link.to,
				params: link.params
			});
			return;
		}
		onSelectProject?.(projectId);
	};
	return /* @__PURE__ */ jsx(SearchableSelect, {
		value,
		onValueChange: handleSelectProject,
		items,
		placeholder: t(placeholder),
		searchPlaceholder: t("Search projects..."),
		emptyMessage: isFetching ? "" : t("No projects found"),
		disabled: disabled || !orgTeamId,
		triggerClassName,
		contentClassName,
		listClassName,
		onSearchChange: setSearch,
		isFetching,
		hasNextPage,
		isFetchingNextPage,
		onLoadMore: fetchNextPage,
		onOpenChange: setOpen,
		showPlaceholderWhenEmpty: true
	});
}
export { ProjectSelector as t };
