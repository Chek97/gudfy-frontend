import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CounterPage, MainPage, RevertPage, TaskPage } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/counter',
        element: <CounterPage />
    },
    {
        path: '/revert',
        element: <RevertPage />
    },
    {
        path: '/tasks',
        element: <TaskPage />
    },
]);

export const AppRouter = () => {
  return (<RouterProvider router={router} />)
}
