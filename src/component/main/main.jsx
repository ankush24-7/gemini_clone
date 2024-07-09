import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import Card from "./card";
import { Context } from "../../context/context";
import "./main.style.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div id="main" className="px-4 flex flex-grow flex-col w-full">
      <div
        id="nav"
        className="flex items-center justify-between w-full text-xl pt-4">
        <a href="https://geemini-clone.netlify.app/" className="text-[#585858]">
          Gemini
        </a>
        <div className="flex items-center gap-2">
          <img
            id="history_icon"
            src={assets.history_icon}
            alt="history_icon"
            className="h-6 aspect-square"
          />
          <img
            id="user_icon"
            className="rounded-full pt-0.5 h-8 w-8"
            src={assets.user_icon}
            alt="user_icon"
          />
        </div>
      </div>

      <div id="main-container" className="w-full">
        {!showResult ? (
          <div
            id="sub-main"
            className="pt-6 flex flex-col items-start lg:pt-16">
            <div id="greet">
              <p
                id="Hello"
                className="font-outfit font-medium text-3xl lg:text-6xl">
                Hello, User
              </p>
              <p className="text-[#c4c7c5] font-outfit font-medium text-3xl lg:text-6xl">
                How can I help you today?
              </p>
            </div>

            <div
              id="cards"
              className="pt-7 gap-2 overflow-x-scroll w-full flex no-scrollbar lg:pt-16">
              <Card
                img={assets.compass_icon}
                text="Suggest beautiful place to see on an evening"
              />
              <Card
                img={assets.bulb_icon}
                text="As a social trend expert, explain a term"
              />
              <Card img={assets.code_icon} text="Shorten the following code" />
              <Card
                img={assets.message_icon}
                text="Write an essay about road safety"
              />
            </div>
          </div>
        ) : (
          <div id="result" className="pt-4 flex flex-col items-start">
            <div
              id="result-title"
              className="flex w-full gap-2 items-center md:gap-5">
              <img
                src={assets.user_icon}
                alt="user_icon"
                className="w-7 rounded-full"
              />
              <p className="font-outfit leading-snug md:leading-normal">
                {recentPrompt}
              </p>
            </div>

            <div
              id="result-data"
              className="flex items-start mt-3 h-[21rem] w-full overflow-y-auto no-scrollbar">
              <img
                src={assets.gemini_icon}
                alt="gemini_icon"
                className="w-7 mt-1 mr-1"
              />
              {loading ? (
                <div id="loader" className="w-full flex flex-col gap-3">
                  <hr className="rounded-sm bg-gradient-to-r from-[#9ed7ff] via-[#fff] to-[#9ed7ff] min-h-2 w-[90%]" />
                  <hr className="rounded-sm bg-gradient-to-r from-[#9ed7ff] via-[#fff] to-[#9ed7ff] min-h-2 w-[90%]" />
                  <hr className="rounded-sm bg-gradient-to-r from-[#9ed7ff] via-[#fff] to-[#9ed7ff] min-h-2 w-[90%]" />
                </div>
              ) : (
                <div id="output" className="w-full overflow-y-scroll">
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="font-outfit leading-snug"></p>
                </div>
              )}
            </div>
          </div>
        )}

        <div
          id="main-bottom"
          className="fixed left-[4%] bottom-0 w-[90%] bg-white">
          <div
            id="search-box"
            className="flex items-center w-full justify-between bg-[#f0f4f9] py-4 rounded-full px-4">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="border-0 bg-transparent w-3/4 py-1 placeholder:text-[#707070] placeholder:font-outfit focus:outline-none"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && e.target.value != "" && onSent()
              }
              value={input}
            />
            <div className="flex gap-2.5 md:gap-7">
              <img
                src={assets.gallery_icon}
                alt="gallery_icon"
                className="h-5 md:h-6"
              />
              <img
                src={assets.mic_icon}
                alt="mic_icon"
                className="h-5 md:h-6"
              />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt="send_icon"
                  className="h-5 md:h-6 cursor-pointer"
                  onClick={() => {
                    onSent();
                  }}
                />
              ) : null}
            </div>
          </div>
          <p className="font-outfit text-xs font-light text-center mt-0.5 pb-1 leading-none tracking-tighter text-[#707070] md:text-sm md:mt-1.5 md:leading-tight md:tracking-tight">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <span className="underline cursor-pointer">
              Your privacy and Gemini Apps
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
