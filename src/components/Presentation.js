import React from "react";

function Presentation({ title, desc, mgTop }) {
  return (
    <div style={{ marginTop: mgTop }} className="App__presentation">
      <p className="App__presentation--title">{title}</p>
      <p className="App__presentation--desc">{desc}</p>
    </div>
  );
}

export default Presentation;
