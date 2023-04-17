import React, { useRef } from "react";
import "./ChaBot.css";

const ChatBot = () => {

    const parentRef = useRef(null);

  const handleClick = () => {
    const box = document.createElement("div");
    box.classList.add("item", "right");  
    const boxMessage = document.createElement("div");
    boxMessage.classList.add("msg");
    boxMessage.innerHTML += `<p>This is message</p>`;
    box.appendChild(boxMessage);    
    boxMessage.classList.add("msg");
    parentRef.current.appendChild(box);

    /// Response  ///    
    
    const item = document.createElement("div");
    item.classList.add("item");
    const icon = document.createElement("div");
    icon.classList.add('icon')
    const iconSvf = document.createElement("i");
    iconSvf.classList.add('fa', 'fa-user')
    const replay = document.createElement("div");
    replay.classList.add("msg");
    replay.innerHTML = `<p>Hello everyone, How are you?</p>`;

    item.appendChild(icon)
    icon.appendChild(iconSvf)
    item.appendChild(replay)
    parentRef.current.appendChild(item);

  };

  return (
    <div className="wrapper">
      <div className="title">Simple Chatbot</div>
      <div ref={parentRef} className="box">

        {/* <div className="item">
          <div className="icon">
            <i className="fa fa-user"></i>
          </div>
          <div className="msg">
            <p>Hello everyone, How are you?</p>
          </div>
        </div>

        <br clear="both" />

        <div className="item right">
          <div className="msg">
            <p>Nice</p>
          </div>
        </div> */}
        
      </div>

      <div className="typing-area">
        <div className="input-field">
          <input type="text" placeholder="Type your message" required />
          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
