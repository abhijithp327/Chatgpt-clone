import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/homepage/Home.jsx';
import Dashboard from './routes/dashboard/Dashboard.jsx';
import Chat from './routes/chat/Chat.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import Login from './routes/signIn/Login.jsx';
import SignUp from './routes/signUp/SignUp.jsx';

const router = createBrowserRouter([

  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in/*',
        element: <Login />,
      },
      {
        path: '/sign-up/*',
        element: <SignUp />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <Chat />,
          },
        ],
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
