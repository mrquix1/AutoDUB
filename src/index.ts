export default class AutoDUBGojoWtf {
    id = "AutoDUB-GojoWtf";
    name = "GojoWtf Dub Only";
    supportsDub = true;

    // This function searches for anime (you can expand later)
    async search(query: string) {
        return [];
    }

    // This function gets episodes
    async findEpisodes(id: string) {
        return [];
    }

    // This function returns stream info
    async getStream(id: string) {
        return null;
    }
}
