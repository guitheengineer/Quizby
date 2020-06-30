import React from "react";

function Notification({ type }) {
  return (
    <div className="App__notification">
      <div className="App__notification--text">
        <p className="App__notification--text--title">Error</p>
        <p className="App__notification--text--desc">
          Sorry for that, seems like we had a connection problem
        </p>
      </div>
    </div>
  );
}

export default Notification;
