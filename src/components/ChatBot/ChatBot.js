import React, { useRef, useState } from "react";
import "./ChaBot.css";
import axios from "axios";
import Loading from "../../shared/Loading";

const ChatBot = () => {
  const parentRef = useRef(null);
  const inputMsgRef = useRef("");
  const sendMessageRef = useRef(null);
  const [error, setError] = useState("");  
  const [searching, setSearching] = useState("");
  


  const handleClick = async () => {   
    const box = document.createElement("div");
    box.classList.add("item", "right");
    const boxMessage = document.createElement("div");
    boxMessage.classList.add("msg");
    boxMessage.innerHTML += `<p>${inputMsgRef.current.value}</p>`;
    box.appendChild(boxMessage);
    boxMessage.classList.add("msg");
    parentRef.current.appendChild(box);
    setSearching('Searching.....')
  

    /// Response  ///
    try {      
      await axios
        .post(
          "/Stage/process_input",
          {
            question: inputMsgRef.current.value,
          }
        )
        .then((res) => {
          try {
            setSearching('')
            inputMsgRef.current.value = '';
           
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
            setSearching('')
            setError(error.message);
            console.log(error);            
          }
        });
    } catch (error) {
      setSearching('')      
      setError(error.message);     
      console.log(error);
    } 
  };


  // Pressing enter to run function

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessageRef.current.click();
      inputMsgRef.current.value = '';  
    }
  }

  

  return (
    <div className="wrapper">
      {error && <p style={{ color: "red" }}> {error}</p>}
      {searching &&
        <p style={{display:'flex', color: "#3498db", flexDirection: "row-reverse",
        padding: "20px"}}> <Loading/> {searching} </p>
      }
     
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
            onKeyPress={handleKeyPress}           
            required
          />
          <button ref={sendMessageRef} onClick={handleClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
