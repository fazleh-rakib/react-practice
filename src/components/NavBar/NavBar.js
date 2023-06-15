import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Product", path: "/product" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 3, name: "About", path: "/about" },
  ];
  return (
    <div>
      <nav className="flex  w-full p-5">
        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`  md:flex justify-center w-full font-medium absolute duration-500 ease-in md:static ${
            open ? "top-6" : "top-[-1222px]"
          }`}
        >
          {navLinks.map((navLink) => (
            <NavLink key={navLink.id} navLink={navLink} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
