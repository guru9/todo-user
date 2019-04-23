import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllUsers } from './Actions/userAction';
import PropTypes from 'prop-types';

import Users from './Components/users';
import Loader from './Components/loader';
import EmptyUser from './Components/emptyUser';

class App extends Component {

  //props have evrything including initial state properties
  componentDidMount() {
    console.log('props---', this.props)
    this.props.getAllUsers()
  }

  render() {
    const { users, loading, emptyUser } = this.props
    const loader = loading === true ? <Loader /> : ''
    const usersOrEmpty = (emptyUser === true || users === null) ? <EmptyUser /> : <Users users={users} />

    return (
      <div>
        {loader && <div className="container">
          <h1>{loader}</h1>
          <h6>User Loading...</h6>
        </div>
        }
        {usersOrEmpty}
      </div>
    );
  }
}

//what are there in props and what they are(..based on action and reducer)???  (..best practice)
App.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  emptyUser: PropTypes.bool.isRequired
}

//complete responsive state will be rendered only after `this.props.getAllUsers()` called
const mapStateToProps = state => {
  console.log('state----', state)
  return {
    users: state.users,
    loading: state.loading,
    emptyUser: state.emptyUser,
    user: state.user
  }
}

export default connect(mapStateToProps, { getAllUsers })(App);
