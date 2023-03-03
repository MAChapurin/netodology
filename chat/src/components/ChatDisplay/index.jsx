import "../../App.css";
// import React, {useEffect, useRef} from "react";

export function ChatDisplay({ messages, userId }) {

  return (
    <div className="chat-display">
        <h1>Anonimus Chat</h1>
      {messages.map((message) => {
        return (
          <div key={message.id}
            className={
              userId === message.userId ? "message-right" : "message-left"
            }
          >
            {message.content}
          </div>
        );
      })}
    </div>
  );
}
