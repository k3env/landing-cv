import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/sofia-sans';
import '@fontsource/comfortaa';
import './index.css';
import { store as toastsStore } from './stores/toasts';
import { Provider } from 'react-redux';

if (!import.meta.env.SSR) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={toastsStore}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
} else {
  ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
}
