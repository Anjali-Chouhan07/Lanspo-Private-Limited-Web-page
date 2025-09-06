import { useState } from "react";
import {  menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6 fixed top-0 z-50 bg-transparent">
      
      <div className="flex flex-col items-start">
        <span className="text-dimWhite font-bold text-[24px] leading-[28px]">
          LANSPO
        </span>
        <span className="text-white text-[12px] leading-[14px]">
          Private Limited
        </span>
      </div>

      {/* Desktop Links */}
      <div className="flex-1 flex justify-center">
        <ul className="list-none sm:flex hidden items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[18px] whitespace-nowrap transition-colors duration-200 ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.id === "home" ? "/" : `/${nav.id.toLowerCase()}`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } hover:text-white`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <Link to={nav.id === "home" ? "/" : `/${nav.id.toLowerCase()}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
