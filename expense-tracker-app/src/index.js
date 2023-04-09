import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './Components/App';
import toast , {Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster/>
    <App />
  </React.StrictMode>
);