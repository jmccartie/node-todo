import React from 'react';
import { render } from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import App from './components/App.jsx';
 
import styles from './scss/application.scss';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);