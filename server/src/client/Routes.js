import React from 'react'
import App from './App'
import Home from './pages/Home'
import AdminsList from './pages/AdminsList'
import UsersList from './pages/UsersList'
import NotFound from './pages/NotFound'

const Routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...Home,
      },
      {
        path: '/admins',
        exact: true,
        ...AdminsList,
      },
      {
        path: '/users',
        exact: true,
        ...UsersList,
      },
      {
        path: '*',
        ...NotFound,
      },
    ],
  },
]

export default Routes
