import React from "react";

const NavItem = ({ name }) => {
  return (
    <div className="cursor-pointer rounded-xl px-2 py-2 text-sm font-semibold text-[#333] hover:bg-[#5E676B] hover:text-slate-50 sm:px-3 sm:text-base lg:py-3 lg:text-lg">
      {name}
    </div>
  );
};

export default NavItem;
