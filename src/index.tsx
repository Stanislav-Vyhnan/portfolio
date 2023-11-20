import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';

import App from './App';
import { globalStyles } from './global.styles';
import reportWebVitals from './reportWebVitals';
import { ThemeOptions, theme } from './theme';

import 'normalize.css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme as unknown as ThemeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
