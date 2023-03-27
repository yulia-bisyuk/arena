import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/bootstrap.min.css';
import './styles/animate.min.css';
import './styles/flaticon.css';
import './styles/style.scss';
import './styles/fontawesome.min.css';
import './styles/responsive.scss';
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
