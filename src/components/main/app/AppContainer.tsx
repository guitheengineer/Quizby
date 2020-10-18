import React, { CSSProperties, useCallback } from 'react';
import useHeight from './useHeight';

type props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: props) => {
  const height = useHeight();

  const setHeight = useCallback(
    (height: number): CSSProperties => {
      return { height: `${height}px` };
    },
    [height]
  );

  return (
    <div className="App" style={setHeight(height)}>
      {children}
    </div>
  );
};

export default AppContainer;
