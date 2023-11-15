import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material'
import HomePage from './Components/Home/HomePage.tsx';
import LoginPage from './Components/Authentication/LoginPage.tsx';
import RegistrationPage from './Components/Authentication/RegistrationPage.tsx';
import AuthProvider from './Providers/AuthProvider.tsx';
import PostSomethingPage from './Components/PostPage/PostSomethingPage.tsx';
import PrivateRoute from './Providers/PrivateRoute.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/registration",
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path: "/post",
        element: <PrivateRoute><PostSomethingPage></PostSomethingPage></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </AuthProvider>
  </React.StrictMode>,
)
