import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const INIT_CHAT = "initChat";
const JOIN_CHAT = "joinChat";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = ({projectId, user}) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      if ((message.ufrom === user.id) || (message.uto === user.id)) {
        setMessages((messages) => [...messages, message]);
      }
    });

    socketRef.current.on(INIT_CHAT, ({ messages }) => {
      if (Array.isArray(messages)) {
        setMessages(messages);
      }
    })

    socketRef.current.emit(JOIN_CHAT, {
      projectId: projectId,
      userId: user.id,
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, [projectId]);

  const sendMessage = (messageBody, receiverFlag) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      sender: user,
      receiverFlag: receiverFlag,
      projectId: projectId,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
