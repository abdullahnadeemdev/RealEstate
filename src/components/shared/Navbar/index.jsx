import { useState, useEffect } from "react";
import { MenuIcon } from "../../../assets/icons";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [ishamMenu, setIsHamMenu] = useState(false);
  const navList = ["Home", "About", "Portfolio", "Contact"];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="relative bg-main text-text-prim p-4 flex justify-between font-lato">
      {/* main menu */}
      <div className=" justify-between w-full font-semibold hidden sm:flex">
        <p>I am logo</p>
        <ul className="flex gap-4 text-text-prim ">
          {navList.map((item) => {
            return (
              <li className="hover:text-text-hover duration-300 cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* phone menu */}
      <div className="flex  sm:hidden justify-between w-full">
        <MenuIcon onClick={() => setIsHamMenu((prev) => !prev)} />
        {ishamMenu && (
          <ul className="absolute bg-main text-text-prim left-0 top-14 w-[90vw] ">
            {navList.map((item) => {
              return (
                <li className="hover:text-text-hover duration-300 cursor-pointer p-1 border-text-prim  border-t">
                  {item}
                </li>
              );
            })}
          </ul>
        )}
        <p>I am logo</p>
      </div>
    </nav>
  );
};

export default Navbar;
