import React from "react";
import { useQuery, gql } from "@apollo/client";

const ROOM_QUERY = gql`
  query GetRooms {
    rooms {
      id
      name
    }
  }
`;

const Room = () => {
  const { loading, error, data } = useQuery(ROOM_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Room List</h2>
      <ul>
        {data.rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Room;
