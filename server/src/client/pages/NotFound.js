import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

class NotFound extends Component {
  renderHead () {
    return (
      <Helmet>
        <title>React SSR Example - Page Not Found</title>
        <meta property='og:title' content='React SSR Example - Page Not Found'/>
      </Helmet>
    )
  }

  render () {
    const {staticContext = {}} = this.props
    staticContext.status = 404

    return (
      <div>
        {this.renderHead()}

        <h1>Oops! Route not found.</h1>
      </div>
    )
  }
}

export default {
  component: NotFound,
}
