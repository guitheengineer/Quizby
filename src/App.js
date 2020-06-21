import React from "react";
import "./App.css";
import Header from "./components/landing/Header";
import Container from "./components/landing/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import {} from "./slices/rootSlice";

function App() {
  return (
    <div className="App" style={{ height: `${window.innerHeight}px` }}>
      <Header />
      <Container />

      <div className="info">{`iH: ${window.innerHeight}  iW: ${window.innerWidth} `}</div>
    </div>
  );
}

export default App;
