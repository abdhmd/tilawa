import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { RiHomeLine, RiHeartLine, RiBookLine } from "react-icons/ri";

const menu = [
  {
    name: "الرئيسية",
    icon: <RiHomeLine />,
  },
  {
    name: "المفضلات",
    icon: <RiHeartLine />,
  },
  {
    name: "المصحف",
    icon: <RiBookLine />,
  },
];

const Navbar = ({ dark, setDark, theme, setTheme }) => {
  return (
    <nav className="  h-14 border mt-6 md:mt-10 px-2  rounded-full text-xl    flex justify-between items-center flex-row-reverse ">
      <div className="w-10 h-10   bg-skin-primary text-white flex rounded-full justify-center items-center">
        <span className="text-xs">تلاوة</span>
      </div>
      <div className="">
        <ul className="flex flex-row-reverse gap-6">
          {menu.map((item, i) => {
            return (
              <li
                key={i}
                className="w-10 h-10   flex flex-col rounded-full justify-center items-center opacity-50"
              >
                <span>{item.icon}</span>
                <span className=" text-xs">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-10 h-10   flex rounded-full justify-center items-center">
        <span>
          <FiMoon />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
