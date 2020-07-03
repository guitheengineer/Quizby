import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/landing/Container";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Notification from "./components/Notification";
import Error from "./components/Error";
import FourHundredFour from "./components/FourHundredFour";
import BackgroundContainer from "./components/BackgroundContainer";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import {} from "./slices/rootSlice";

function App() {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setInnerHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const dataIsFetched = useSelector((d) => d.rootReducer.dataIsFetched);
  return (
    <BrowserRouter>
      <div className="App" style={{ height: `${innerHeight}px` }}>
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
          <Route>
            <Header logo={true} />
            <BackgroundContainer>
              <FourHundredFour />
            </BackgroundContainer>
          </Route>
        </Switch>
        <div className="info">{`iH: ${window.innerHeight}  iW: ${window.innerWidth} `}</div>
        {/* {dataIsFetched === "error" && <Error />} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
