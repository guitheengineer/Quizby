import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';

function App() {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setInnerHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className="App" style={{ height: `${innerHeight}px` }}>
        <Routes />
        <div className="info">{`iH: ${window.innerHeight}  iW: ${window.innerWidth} `}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
