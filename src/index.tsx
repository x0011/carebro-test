import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ControllInput } from './ControllInput';
import { InputPage } from './pages/input';
import { ArraySort } from './components/array';
import { ArraysPage } from './pages/arrays';

const getBasename = (path: string) => path.slice(0, path.lastIndexOf('/'));

const BrowserRouter = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/input',
    element: <InputPage />
  },  
  {
    path:'/sort',
    element: <ArraysPage />
  }
], {basename:getBasename(window.location.pathname)});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
