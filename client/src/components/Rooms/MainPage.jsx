import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Room from "./Room";

const socket = io.connect("http://localhost:4000");

const MainPage = () => {
  const [roomId, setRoomId] = useState(""); //actual id for the room
  const [room, setRoom] = useState(""); //room that the users input
  const [usersList, setUserLists] = useState([]);

  useEffect(() => {
    enterRoom();
  }, [roomId]);

  const hostRoom = () => {
    setRoomId("test");
  };

  const enterRoom = () => {
    if (roomId != "") {
      console.log(roomId);
      socket.emit("join room", { room: roomId });
    }
  };

  const validateRoom = () => {
    if (room === "") {
      alert("Invalid room ID");
      return;
    }
    setRoomId(room);
  };

  return (
    <>
      {roomId ? (
        <Room />
      ) : (
        <div>
          <button onClick={hostRoom}> Create a Room </button>
          <br />
          <input placeholder="room" onChange={(e) => setRoom(e.target.value)} />
          <button onClick={validateRoom}>Join a Room</button>
        </div>
      )}
    </>
  );
};
export default MainPage;
