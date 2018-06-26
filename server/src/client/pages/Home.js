import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

class Home extends Component {
  renderHead () {
    return (
      <Helmet>
        <title>React SSR Example</title>
        <meta property='og:title' content='React SSR Example'/>
      </Helmet>
    )
  }

  render () {
    return (
      <div className='center-align' style={{marginTop: '200px'}}>
        {this.renderHead()}

        <h3>Welcome</h3>
        <p>Check out these awesome features</p>
      </div>
    )
  }
}

export default {
  component: Home,
}
