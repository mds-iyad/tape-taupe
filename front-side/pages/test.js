import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../context/SocketContext";
export default function Messages() {
    const [newMessages, setNewMessages] = useState([])
    const socket = useSocket();
    const addMessage = useCallback((message) => {
    setNewMessages([...newMessages, message])
    console.log(message);
  }, [newMessages]);
  
  useEffect(() => {
    socket.on("addMessage", addMessage);
    return () => {
      socket.off("addMessage", addMessage);
    };
  }, [addMessage, socket]);
  return <div>{newMessages.map( message => ( <div key={message._id} >{message.content}</div>) )}</div>;
}