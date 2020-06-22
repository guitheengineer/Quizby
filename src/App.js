import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/landing/Container";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import {} from "./slices/rootSlice";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ height: `${window.innerHeight}px` }}>
        {" "}
        <Switch>
          <Route path="/game">
            <Header logo={true} />
            <Container />
          </Route>
          <Route path="/signup">
            <Header logo={false} />
            <Signup />
            {/* <Redirect from="/signup" to="/login">*/}
          </Route>
          <Route path="/login">
            <Header logo={false} />
            <Login />
          </Route>
        </Switch>
        <div className="info">{`iH: ${window.innerHeight}  iW: ${window.innerWidth} `}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
