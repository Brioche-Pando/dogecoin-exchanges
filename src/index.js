import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ExchangePage from './pages/ExchangePage/ExchangePage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/exchange/:exchangeId",
    element: <ExchangePage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);