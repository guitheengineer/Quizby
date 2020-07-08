import React from "react";
import { Link } from "react-router-dom";

export default function FourHundredFour() {
  return (
    <div className="App__fourhundred">
      <p className="App__fourhundred--message">Page not found</p>
      <Link to="/">
        <button className="App__fourhundred--button">Go home</button>
      </Link>
    </div>
  );
}
