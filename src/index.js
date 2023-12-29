import React from 'react';
import ReactDOM from 'react-dom/client';

// Router:
import { BrowserRouter } from 'react-router-dom';

// App Component:
import App from './App';

// Bootstrap Files:
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Font Awesome Files:
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// Style [ main file ]:
import './style/index.css';

// Store:
import { Provider } from 'react-redux';
import { store } from './store/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);