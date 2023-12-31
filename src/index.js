import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './routes/ErrorPage';
import Expenses from './components/Expenses';
import Summary from './components/Summary';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Income from './components/Income';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/expenses",
        element: <Expenses />
      },
      {
        path: "/income",
        element: <Income />
      },
      {
        path: "/summary",
        element: <Summary />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
