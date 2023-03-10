import "../../App.css";
// import React, {useEffect, useRef} from "react";

export function ChatDisplay({ chat, messages, userId }) {
  

  return (
    <div>
      <h1>Anonimus chat</h1>
    <div className="chat-display" ref={chat}>
       
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
    </div>
  );
}
