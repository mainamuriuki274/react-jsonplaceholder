import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './constants/routes';

const App: FunctionComponent = () => (
  <Router>
    <BaseRouter />
  </Router>
);

export default App;
