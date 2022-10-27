import React from "react";
import { FaQuran } from "react-icons/fa";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleChange, filter }) => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <header className="sticky top-0 bg-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex md:gap-10 gap-5 items-center">
          <div className="bg-primary rounded-full flex justify-center items-center w-[50px] h-[50px]">
            <FaQuran size={25} color="white" />
          </div>
          <div className="text-3xl font-bold ">
            <Link to="/">Quran</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <form
            action=""
            className={
              search
                ? "absolute top-[80px] left-0 w-full px-4"
                : "relative hidden md:block"
            }
          >
            <input
              type="text"
              value={filter}
              onChange={handleChange}
              className="px-4 py-3 rounded-full border border-sub md:w-[400px] w-full focus:outline-none "
              placeholder="Search"
            />
            <BiSearch
              size={20}
              className={search ? "hidden" : "absolute right-[15px] top-[15px]"}
            />
          </form>
          <div className="bg-primary px-4 py-3 rounded-full text-white hidden md:block">
            <p>Support</p>
          </div>
        </div>
        <div className="flex items-center gap-5 md:hidden">
          <div onClick={handleSearch}>
            <BiSearch size={25} className="" />
          </div>
          <div onClick={handleNav}>
            {nav ? <BiX size={30} /> : <BiMenu size={30} />}
          </div>
          <ul
            className={
              nav
                ? "absolute top-[70px] right-[40px] bg-white shadow-lg p-4 font-semibold text-lg"
                : "hidden"
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/like">Like</Link>
            </li>
            <li>
              <a href="#latest">Baru Dibaca</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
