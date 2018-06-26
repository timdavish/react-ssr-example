import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  renderHead () {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users`}</title>
        <meta property='og:title' content='Users List'/>
      </Helmet>
    )
  }

  renderUsers () {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render () {
    return (
      <div>
        {this.renderHead()}

        <h3>Here&apos;s a big list of users:</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => ({users})
const mapDispatchToProps = {fetchUsers}

const loadData = ({dispatch}) => dispatch(fetchUsers())

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UsersList),
  loadData,
}
