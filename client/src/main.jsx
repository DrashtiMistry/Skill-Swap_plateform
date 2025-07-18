import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Profile from './Pages/Profile.jsx'
import SwapRequest from './Pages/SwapRequest.jsx'
import SwapRequestDetails from './Pages/SwapRequestDetails.jsx'
import { ToastContainer } from 'react-toastify'


const routes =  createBrowserRouter([
    {
        path: '/signup',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: ':id',
                element: <SwapRequestDetails />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'swap-request',
                element: <SwapRequest />,
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={routes} /> 
  </StrictMode>,
)
