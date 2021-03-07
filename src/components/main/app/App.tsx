import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import { Routes } from 'routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
