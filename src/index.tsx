import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import { store } from './redux/store'
import { Provider } from 'react-redux'
// global styles
import './index.scss';
// components
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
