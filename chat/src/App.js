import async from "async";
import React, { useState, useEffect, createRef } from "react";
import "./App.css";
import { ChatDisplay } from "./components/ChatDisplay";
import { ChatKeyBoard } from "./components/ChatKeyBoard";

function App() {
  const [messages, setMessages] = useState([]);
  const inputRef = createRef();
  const btnRef = createRef();

  const keyId = "keyId";

  const getUserId = (keyId) => {
    if (!localStorage.getItem(keyId)) {
      localStorage.setItem(
        keyId,
        parseInt(Math.random().toFixed(10).slice(3, 10), 16)
      );
    }
    return localStorage.getItem(keyId);
  };

  const userId = getUserId(keyId);

  const sendMessages = async (userId) => {
    const url = `http://localhost:7777/messages?from={${userId}}`;
    // const data = {};
    const message = {
      id: messages.length,
      userId: userId,
      content: inputRef.current.value,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      inputRef.current.value = "";
      console.log("from add: ", messages);
      fetch("http://localhost:7777/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages([...data]);
        console.log(messages, data);
      });
    }
  };


  useEffect(() => {
    fetch("http://localhost:7777/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages([...messages, ...data]);
        console.log(messages, data);
      });
  }, []);

  return (
    <div className="App">
      <ChatDisplay messages={messages} userId={userId} />
      <ChatKeyBoard
        messages={messages}
        inputRef={inputRef}
        btnRef={btnRef}
        sendMessages={sendMessages}
        userId={userId}
      />
    </div>
  );
}

export default App;
