import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Header({ logo }) {
  return (
    <div className="App__header">
      {logo && (
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="App__header--title">Lorem ipsum</span>
        </Link>
      )}
    </div>
  );
}

export default Header;
