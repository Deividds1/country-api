import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CountryDetails from './components/CountryDetails';
import { ThemeProvider } from './ThemeContext';

const Router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/country/:alphacode', element: <CountryDetails /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);
