import { a as getActiveProfileId, g as subscribeToProfileChange, r as getActiveProfile } from "./console-profiles-D__E5Kgi.js";
import { useEffect, useState } from "react";
function useConsoleProfile() {
	const [profileId, setProfileId] = useState(getActiveProfileId);
	const [, setProfileVersion] = useState(0);
	useEffect(() => {
		return subscribeToProfileChange(() => {
			setProfileId(getActiveProfileId());
			setProfileVersion((v) => v + 1);
		});
	}, []);
	const profile = getActiveProfile();
	return {
		profileId,
		profile,
		features: profile.features,
		isCloud: profileId === "cloud",
		isSelfHosted: profileId === "self-hosted"
	};
}
export { useConsoleProfile as t };
