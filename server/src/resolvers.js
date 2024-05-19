const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by ID, for the track page
    track: async (parent, { id }, { dataSources }, info) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    // where our new resolver function will go
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      // where we'll call the TrackAPI
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          // we'll return a new object here
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            track: null
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
