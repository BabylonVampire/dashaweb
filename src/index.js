import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setAppearance from './animations/appearance/appearance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

setTimeout(setAppearance, 0);
