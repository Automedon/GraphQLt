const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getAuthor(id) {
        return this.get(`author/${id}`);
    }
    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }
    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }
    getTracksForHome() {
        return this.get('tracks');
    }
    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
}

module.exports = TrackAPI