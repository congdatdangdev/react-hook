import "./Nav.css";
import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/time">Times App</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink to="/blog">Blog App</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
};

export default Nav;
