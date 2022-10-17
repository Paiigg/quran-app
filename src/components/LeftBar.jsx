import React from "react";
import { BiBookOpen, BiHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="">
      <div className="w-[10%] hidden md:block ">
        <ul className="flex flex-col gap-5 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            <BiBookOpen size={30} />
          </NavLink>
          <NavLink
            to="/like"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiHeart size={30} />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
