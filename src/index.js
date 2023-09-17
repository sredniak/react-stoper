import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
