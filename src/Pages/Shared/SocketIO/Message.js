import React, { useContext, useState } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./Message.css";

const socket = io("http://localhost:5000/");

const Message = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (user?.displayName !== "" && user?.email !== "") {
      socket.emit("join_room", user?.email);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          {/* <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          /> */}
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={user?.displayName} room={user?.email} />
      )}
    </div>
  );
};

export default Message;
