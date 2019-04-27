import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from './Actions/userAction';
import PropTypes from 'prop-types';

import Users from './Components/users';
import Loader from './Components/loader';
import EmptyUser from './Components/emptyUser';
import { Redirect } from 'react-router-dom';

class App extends Component {

  //props have evrything including initial state properties
  componentDidMount() {
    this.props.getAllUsers(this.props.history)
  }

  deleteUser = (e) => {
    const userId = e.target.getAttribute('value')
    this.props.deleteUser(userId, this.props.history)
  }

  render() {
    const { users, loading } = this.props
    const loader = loading === true ? <Loader /> : ''
    return (
      <div>
        {loader && <div className="container">
          <h1>{loader}</h1>
          <h6>User Loading...</h6>
        </div>
        }
        <Users users={users} onDelete={this.deleteUser} />
      </div>
    );
  }
}

//what are there in props and what they are(..based on action and reducer)???  (..best practice)
App.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  deleteUser: PropTypes.func.isRequired
}

//complete responsive state will be rendered only after `this.props.getAllUsers()` called
const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getAllUsers, deleteUser })(App);
