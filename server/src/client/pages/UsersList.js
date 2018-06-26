import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'

class UsersList extends Component {
  componentDidMount () {
    console.log(this.props)
    // TODO: use staticContext to determine if this page was loaded on the server
    this.props.fetchUsers()
  }

  renderUsers () {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render () {
    return (
      <div>
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
