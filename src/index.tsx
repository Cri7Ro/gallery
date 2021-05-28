import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset.css';
import { Page } from './styles/globalStyles';

ReactDOM.render(
  <>
  <Page />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
