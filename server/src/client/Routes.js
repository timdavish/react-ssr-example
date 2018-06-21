import React from 'react'
import Home from './pages/Home'
import UsersList from './pages/UsersList'

const Routes = [
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
]

export default Routes
