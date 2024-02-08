import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_ROOM_MUTATION = gql`
  mutation AddRoom($name: String!) {
    addRoom(name: $name) {
      id
      name
    }
  }
`;

const AddRoom = () => {
  const [name, setName] = useState("");

  const [addRoom] = useMutation(ADD_ROOM_MUTATION, {
    variables: {
      name: name,
    },
    refetchQueries: ["GetRooms"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRoom();
    setName("");
  };

  return (
    <div>
      <h2>Add a Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
