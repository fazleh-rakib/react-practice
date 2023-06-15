import React from "react";

const NavLink = ({ navLink }) => {
  return (
    <li className=" mr-10">
      <a href={navLink.path}> {navLink.name}</a>
    </li>
  );
};

export default NavLink;
