import React from "react";

const SidebarItem = ({ img, text, extended }) => {
  return (
    <div className="flex items-center gap-2.5 p-2 rounded-full cursor-pointer hover:bg-[#e2e6eb]">
      <img src={img} alt="${img}-icon" className="w-5" />
      {extended ? <p className="text-[#282828] font-outfit">{text}</p> : null}
    </div>
  );
};

export default SidebarItem;
