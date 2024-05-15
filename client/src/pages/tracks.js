import React from "react";
import { useQuery, gql } from "@apollo/client";
import QueryResult from "../components/query-result";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
            <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
