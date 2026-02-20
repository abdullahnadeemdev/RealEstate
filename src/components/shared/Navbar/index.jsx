import { useState, useEffect } from "react";
import { MenuIcon } from "../../../assets/icons";
import { Logo } from "../../../assets/images";

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
    <nav className="relative bg-main text-textLight p-4 flex justify-between font-lato z-100">
      {/* main menu */}
      <div className=" justify-between items-center w-full font-semibold hidden sm:flex">
        <div className="flex items-center ">
          <span className="w-[8vw]">
            <img src={Logo} alt="Logo" />
          </span>
          <h3 className="font-bold  md:text-xl lg:text-2xl">Mian & Sons</h3>
        </div>
        <ul className="flex gap-4 text-textLight ">
          {navList.map((item) => {
            return (
              <li className="hover:text-secondary duration-300 cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* phone menu */}
      <div className="relative z-100 flex sm:hidden justify-between w-full items-center">
        <MenuIcon onClick={() => setIsHamMenu((prev) => !prev)} />
        {ishamMenu && (
          <ul className="absolute bg-main text-textLight left-0 top-11 w-[90vw] ">
            {navList.map((item) => {
              return (
                <li className="hover:text-secondary duration-300 cursor-pointer p-1 border-text-prim  border-t">
                  {item}
                </li>
              );
            })}
          </ul>
        )}
        <span className="w-[20vw]">
          <img src={Logo} alt="Logo" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
