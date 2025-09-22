// AutoDUB extension for Seanime - GojoWtf
// Forces English dub automatically

export default class AutoDUBGojoWtf {
    id = "AutoDUB-GojoWtf";
    name = "GojoWtf Dub Only";
    supportsDub = true;

    // Search for anime (always dub)
    async search(query: string) {
        const language = "dub"; // force dub
        const url = `https://gojo.wtf/search?q=${encodeURIComponent(query)}&lang=${language}`;
        const html = await fetch(url).then(r => r.text());
        return this.parseEpisodes(html);
    }

    // Get episodes for an anime (always dub)
    async findEpisodes(animeId: string) {
        const language = "dub"; // force dub
        const url = `https://gojo.wtf/anime/${animeId}?lang=${language}`;
        const html = await fetch(url).then(r => r.text());
        return this.parseEpisodes(html);
    }

    // Get stream URL for an episode (always dub)
    async getStream(episodeId: string) {
        const language = "dub"; // force dub
        const url = `https://gojo.wtf/episode/${episodeId}?lang=${language}`;
        const html = await fetch(url).then(r => r.text());
        return this.parseStream(html);
    }

    // Parse episodes from HTML (placeholder, adjust as needed)
    parseEpisodes(html: string) {
        // Replace this with actual parsing logic from GojoWtf
        return [];
    }

    // Parse video stream from HTML (placeholder)
    parseStream(html: string) {
        // Replace with actual parsing logic from GojoWtf
        const streamUrl = html.match(/source.*?dub.*?url="(.*?)"/)?.[1];
        return streamUrl;
    }
}
