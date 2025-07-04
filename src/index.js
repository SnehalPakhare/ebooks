import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import App from './App';
import ThemeProvider from './Context/ThemeProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children:[
            {
                index:'Home',
                element:<Home/>
            },
            {
                path:'/Home',
                element:<Home/>
            },
            {
                path:'/Contact',
                element:<Contact/>
            },
            {
                path:'/About',
                element:<About/>
            },
            {
                path:'/Portfolio',
                element:<Portfolio/>
            },
             {
                path:'/Product',
                element:<App/>
            },

            
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ThemeProvider>

    <RouterProvider router={router}>

    </RouterProvider>
      </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
