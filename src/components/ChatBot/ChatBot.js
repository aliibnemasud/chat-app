import React, { useRef, useState } from "react";
import "./ChaBot.css";
import axios from "axios";

const ChatBot = () => {
  const parentRef = useRef(null);
  const inputMsgRef = useRef("");
  const [error, setError] = useState('')

  const handleClick = async () => {
    const box = document.createElement("div");
    box.classList.add("item", "right");
    const boxMessage = document.createElement("div");
    boxMessage.classList.add("msg");
    boxMessage.innerHTML += `<p>${inputMsgRef.current.value}</p>`;
    box.appendChild(boxMessage);
    boxMessage.classList.add("msg");
    parentRef.current.appendChild(box);

    /// Response  ///

    try {
      await axios
        .post(
          "https://e63f4y64m4.execute-api.ap-south-1.amazonaws.com/prod/process_input",
          {
            question: inputMsgRef.current.value,
          }
        )
        .then((res) => {
          try {
            const response = res?.data?.processed_output;

            const item = document.createElement("div");
            item.classList.add("item");
            const icon = document.createElement("div");
            icon.classList.add("icon");
            const iconSvf = document.createElement("i");
            iconSvf.classList.add("fa", "fa-user");
            const replay = document.createElement("div");
            replay.classList.add("msg");
            replay.innerHTML = `<p>${response}</p>`;
            item.appendChild(icon);
            icon.appendChild(iconSvf);
            item.appendChild(replay);
            parentRef.current.appendChild(item);

          } catch (error) {
            setError(error.message);
            console.log(error.message);
          }
        });
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      {error && <p style={{color: 'red'}}> {error}</p> }
      <div className="title">Ai Chatbot</div>
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
          <input
            ref={inputMsgRef}
            type="text"
            placeholder="Type your message"
            required
          />
          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
