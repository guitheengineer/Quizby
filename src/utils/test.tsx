// test-utils.js
import { ComponentType, ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Import your own reducer
import reducer from 'store/rootReducer';

function render(
  ui: ReactElement,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
