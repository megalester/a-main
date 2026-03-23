import React from "react";
import NavItem from "../ui/NavItem";
import { LiaSearchSolid } from "react-icons/lia";

const Nav = () => {
  return (
    <div
      className="mt-3 flex flex-col gap-3 bg-[#F0F5F7] px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12"
      style={{ boxShadow: "0 1px 10px #0000001f" }}
    >
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <NavItem name={"Credit Cards"} />
        <NavItem name={"Banking"} />
        <NavItem name={"Lending"} />
        <NavItem name={"Investing"} />
        <NavItem name={"Wealth Management"} />
        <NavItem name={"Open an Account ›"} />
      </div>

      <div className="hidden cursor-pointer rounded-lg p-3 text-primary hover:!text-white hover:bg-[#5E676B] lg:block">
        <LiaSearchSolid size={30} />
      </div>
    </div>
  );
};

export default Nav;
