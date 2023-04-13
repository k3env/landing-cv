import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/sofia-sans';
import '@fontsource/comfortaa';
import './index.css';

if (!import.meta.env.SSR) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
}
