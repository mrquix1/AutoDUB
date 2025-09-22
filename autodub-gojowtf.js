/**
 * Seanime Extension: AutoDub for GojoWTF
 * Author: mrquix1
 * Forces dub on GojoWTF provider when enabled in settings.
 */
(function () {
  // Seanime extension API globals
  const EXT_ID = "autodub-gojowtf";
  const PROVIDER_ID = "gojowtf"; // Make sure this matches GojoWTF's registered id

  // Listen for provider search events
  window.seanime?.on?.("provider:search:before", async (ctx) => {
    // Only patch if GojoWTF is the provider and setting is enabled
    if (
      ctx.provider?.id === PROVIDER_ID &&
      window.seanime?.ext?.getSetting(EXT_ID, "forceDub")
    ) {
      ctx.options.dub = true;
    }
  });

  // Optionally, patch episode fetching if needed
  window.seanime?.on?.("provider:findEpisodes:before", async (ctx) => {
    if (
      ctx.provider?.id === PROVIDER_ID &&
      window.seanime?.ext?.getSetting(EXT_ID, "forceDub")
    ) {
      // If episode id does not include '/dub', patch it
      if (typeof ctx.options.id === "string" && !ctx.options.id.includes("/dub")) {
        ctx.options.id = ctx.options.id.replace("/sub", "") + "/dub";
      }
    }
  });

  // Register extension (if needed by API)
  window.seanime?.ext?.register?.({
    id: EXT_ID,
    name: "AutoDub for GojoWTF"
  });

})();
