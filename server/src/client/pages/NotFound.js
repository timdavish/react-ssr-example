import React from 'react'

const NotFound = ({staticContext = {}}) => {
  // staticContext is passed from StaticRouter when this is server rendered
  staticContext.notFound = true

  return (
    <h1>Oops! Route not found.</h1>
  )
}

export default {
  component: NotFound,
}
