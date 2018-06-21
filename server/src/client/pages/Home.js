import React from 'react'

const Home = () => {
  return (
    <div>
      <div>I&apos;m the Home component</div>
      <button onClick={() => console.log('hi there')}>Click me!</button>
    </div>
  )
}

export default {
  component: Home,
}
