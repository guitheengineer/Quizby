import React from 'react';
import setHeight from './setHeight';

const App = (children) => {
  const { height } = setHeight();
  return (
    <div className="App" style={{ height: `${height}px` }}>
      {children}
    </div>
  );
};

export default App;
