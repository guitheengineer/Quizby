import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
// import Error from "./components/errors/Error";
// import {} from "./slices/rootSlice";

function App() {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setInnerHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // const dataIsFetched = useSelector((d) => d.rootReducer.dataIsFetched);
  return (
    <BrowserRouter>
      <div className="App" style={{ height: `${innerHeight}px` }}>
        <Routes />
        <div className="info">{`iH: ${window.innerHeight}  iW: ${window.innerWidth} `}</div>
        {/* {dataIsFetched === "error" && <Error />} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
