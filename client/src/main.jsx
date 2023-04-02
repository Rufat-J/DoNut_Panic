import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.jsx";
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Root from './components/Root'
import ErrorPage from "./components/ErrorPage.jsx";
import AdminPage from './pages/AdminPage.jsx'

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
            <Route index element={<Home/>}/>
            <Route path="menu" element={<AdminPage />}/>
        </Route>
    ])
);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);