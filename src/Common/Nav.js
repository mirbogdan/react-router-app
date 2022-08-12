import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navStyles">
      <NavLink to="/" end>
        Products
      </NavLink>
      <NavLink to="/admin" activeStyle={{ fontStyle: "italic", color: "red" }}>
        Admin
      </NavLink>
    </nav>
  );
};

export default Nav;
