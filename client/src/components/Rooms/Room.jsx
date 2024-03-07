import React from "react";
import Users from "./Users.jsx";
import Game from "../Game.jsx";
const Room = () => {
  return (
    <>
      <Game rows={20} cols={10} />
      <Users />
    </>
  );
};

export default Room;
