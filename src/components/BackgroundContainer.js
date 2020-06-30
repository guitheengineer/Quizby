import React from "react";

function BackgroundContainer({ mgTop, minHeight, children }) {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#F8FAF7",
        borderRadius: "20px 20px 0px 0px",
        width: "100%",
        flex: "1 1 100%",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: mgTop,
        minHeight,
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundContainer;
