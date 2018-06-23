import React from 'react'
import App from './App'
import Home from './pages/Home'
import UsersList from './pages/UsersList'

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
        path: '/users',
        exact: true,
        ...UsersList,
      },
    ],
  },
]

export default Routes
