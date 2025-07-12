import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'


const routes =  createBrowserRouter([
    {
        path: '/signup',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} /> 
  </StrictMode>,
)
