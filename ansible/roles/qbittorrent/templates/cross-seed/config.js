"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    delay: 10,

    torznab: [
	    "http://prowlarr.local.{{ personal_domain }}/1/api?apikey={{ prowlarr_api_key }}", // TorrentLeech
	    "http://prowlarr.local.{{ personal_domain }}/2/api?apikey={{ prowlarr_api_key }}", // DigitalCore
	    "http://prowlarr.local.{{ personal_domain }}/3/api?apikey={{ prowlarr_api_key }}", // ImmortalSeed
	    "http://prowlarr.local.{{ personal_domain }}/4/api?apikey={{ prowlarr_api_key }}", // TorrentSeeds
	    "http://prowlarr.local.{{ personal_domain }}/5/api?apikey={{ prowlarr_api_key }}", // AnimeTosho
	    "http://prowlarr.local.{{ personal_domain }}/6/api?apikey={{ prowlarr_api_key }}", // Aither
	    "http://prowlarr.local.{{ personal_domain }}/7/api?apikey={{ prowlarr_api_key }}", // Reelflix
    ],

    torrentDir: "/torrents",
    outputDir: "/cross-seeds",
    includeEpisodes: false,
    includeNonVideos: false,
    fuzzySizeThreshold: 0.02,
    excludeOlder: undefined,
    excludeRecentSearch: undefined,
    action: "inject",
    rtorrentRpcUrl: undefined,
    qbittorrentUrl: "https://qbittorrent.local.{{ personal_domain }}",
    duplicateCategories: true,
    notificationWebhookUrl: "ntfy://push.{{ personal_domain }}/{{ ntfy_crossseed_topic }}",
    port: 2468,
    rssCadence: "2w",
    searchCadence: "6w",
};
