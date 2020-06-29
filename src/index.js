import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
