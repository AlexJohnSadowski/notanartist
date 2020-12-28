import React from "react";
import { Link } from "gatsby";


const Burger = () => {

  function hideMenu() {
    let menuOpen = document.querySelector(".main-navigation-toggle").checked;
    if ((menuOpen = true)) {
      document.querySelector(".main-navigation-toggle").checked = false;
    }
  }
  return (
    <>
      <input
        id="page-nav-toggle"
        className="main-navigation-toggle"
        type="checkbox"
      />
      <label htmlFor="page-nav-toggle">
        <svg className="icon--menu-toggle" viewBox="0 0 60 30">
          <g className="icon-group">
            <g className="icon--menu">
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g className="icon--close">
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>
      <div className="main-navigation" onClick={() => hideMenu()}>
        <ul>
          <li>
            <Link to="/">ACT I</Link>
          </li>
          <li>
            <Link to="/products">ACT II</Link>
          </li>
          <li></li>
          <li>
            <Link to="/contact">ACT III</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Burger;