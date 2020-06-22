import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Header({ logo }) {
  return (
    <div className="App__header">
      {logo && <span className="App__header--title">Lorem ipsum</span>}
    </div>
  );
}

export default Header;
