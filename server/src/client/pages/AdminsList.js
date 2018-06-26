import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAdmins} from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsList extends Component {
  componentDidMount () {
    console.log(this.props)
    // TODO: use staticContext to determine if this page was loaded on the server
    this.props.fetchAdmins()
  }

  renderAdmins () {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render () {
    return (
      <div>
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
