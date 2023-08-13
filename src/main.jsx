import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ErrorPage from './components/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productAndCartData } from './Loaders/getCart&ProductData'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />,
                loader: () => fetch('products.json'),
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "cart",
                element: <Cart />,
                loader: productAndCartData
            },
        ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
