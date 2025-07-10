import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompts,
    showResult,
    resultData,
    loading,
    input,
    setInput,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div  className="greet">
              <span>Hello,Dev.</span>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest a good song which matches the cloudy weather</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Help me to write a code</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card">
                <p>Slove the math problem for me</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>:<p dangerouslySetInnerHTML={{ __html: resultData}}></p>}
              
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                onClick={() => onSent(input)}
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            molestiae eveniet quasi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
