import React from "react";
import './ChaBot.css';

const ChatBot = () => {
  return (
    <div className="wrapper">
      <div className="title">Simple Chatbot</div>
      <div className="box">
        <div className="item">
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
        </div>
      </div>

      <div className="typing-area">
        <div className="input-field">
          <input type="text" placeholder="Type your message" required />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
