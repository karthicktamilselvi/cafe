// src/config/routes.js
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Profile = lazy(() => import('../pages/Profile'));

export const routesConfig = [
  {
    path: '/',
    element: <Home />,
    isPublic:true,
  },
  {
    path: '/login',
    element: <Login />,
    isPublic:true,
  },
  {
    path: '/register',
    element: <Register />,
    isPublic:true,
  },
  {
    path: '/profile',
    element: <Profile />,
    isPublic:false,
  },
];