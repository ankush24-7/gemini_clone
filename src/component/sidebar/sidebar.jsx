import "./sidebar.style.css";
import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import SidebarItem from "./sidebarItem";
import { Context } from "../../context/context";

const sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      id="sidebar"
      className="h-[100%] max-w-max flex flex-col justify-between items-center bg-[#ecf1f8] py-6 px-4 relative md:min-w-20">
      <div id="top">
        <img
          id="burger-btn"
          onClick={() => setExtended((prev) => !prev)}
          className="w-6 block ml-2 cursor-pointer relative"
          src={assets.menu_icon}
          alt="menu-icon"
        />

        <div
          id="new-chat"
          className="mt-14 inline-flex justify-between items-center gap-2.5 p-2 ml-1 bg-[#e6eaf1] rounded-full text-base cursor-pointer text-[#707070]"
          onClick={() => newChat()}>
          <img className="w-5" src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p className="text-sm font-outfit">New Chat</p> : null}
        </div>

        {extended ? (
          <div id="recent" className="flex flex-col mr-8 gap-1.5">
            <p className="mt-5 font-outfit pl-2">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  id="recent-entry"
                  className="flex items-center gap-2.5 py-0.5 px-2 min-w-40 rounded-full cursor-pointer hover:bg-[#e2e6eb] overflow-y-scroll no-scrollbar"
                  onClick={() => loadPrompt(item)}>
                  <img
                    className="w-5"
                    src={assets.message_icon}
                    alt="message_icon"
                  />
                  <p className="text-[#282828] font-outfit">
                    {item.slice(0, 13)}...
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div id="bottom" className="flex w-[100%] flex-col mb-2.5">
        <SidebarItem
          img={assets.question_icon}
          text="Help"
          extended={extended}
        />
        <SidebarItem
          img={assets.history_icon}
          text="History"
          extended={extended}
        />
        <SidebarItem
          img={assets.setting_icon}
          text="Setting"
          extended={extended}
        />
      </div>
    </div>
  );
};

export default sidebar;
