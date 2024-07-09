import React from "react";
import Sidebar from "./component/sidebar/sidebar";
import Main from "./component/main/main";

const App = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
