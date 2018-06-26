import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import {fetchAdmins} from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsList extends Component {
  componentDidMount () {
    this.props.fetchAdmins()
  }

  renderHead () {
    return (
      <Helmet>
        <title>{`${this.props.admins.length} Users`}</title>
        <meta property='og:title' content='Admins List'/>
      </Helmet>
    )
  }

  renderAdmins () {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render () {
    return (
      <div>
        {this.renderHead()}

        <h3>Here&apos;s a big (PROTECTED) list of admins:</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({admins}) => ({admins})
const mapDispatchToProps = {fetchAdmins}

const loadData = ({dispatch}) => dispatch(fetchAdmins())

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(AdminsList)),
  loadData,
}
