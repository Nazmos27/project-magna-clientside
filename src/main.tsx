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

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Cart from './Components/MyCart/Cart.tsx';
import ErrorPage from './Components/Shared/ErrorPage.tsx';
import SideMenu from './Components/Dashboards/SideMenu.tsx';
import MyProfile from './Components/Dashboards/User/MyProfile.tsx';
import MyChat from './Components/Dashboards/User/MessageComponents/MyChat.tsx'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path: "/mycart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      }
    ]
  },
  {
    path:'/dashboard',
    element: <SideMenu></SideMenu>,
    children:[
      {
        path:'myprofile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'chat',
        element:<MyChat></MyChat>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <RouterProvider router={router} />
        </StyledEngineProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
