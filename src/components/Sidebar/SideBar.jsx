import React, { useContext, useState } from "react";
import "src/components/Sidebar/Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const{onSent,prevPrompt,setRecentPrompt}=useContext(Context);
  console.log(prevPrompt);
  const showPrevResult = (item) => {
    
    onSent(item);
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chart">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((items,index)=>{
              return(
                <div onClick={() => showPrevResult(items)} className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="" />
                  <p>{items}</p>
                </div>
              )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}{" "}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
