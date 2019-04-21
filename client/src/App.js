import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllUsers } from './Actions/userAction';
import Users from './Components/users';
import PropTypes from 'prop-types';
import Loader from './Components/loader';
import EmptyUser from './Components/emptyUser';

class App extends Component {

  //props have evrything including initial state properties
  componentDidMount() {
    console.log('props---', this.props)
    this.props.getAllUsers()
  }

  render() {
    const { users, loading, addUser } = this.props
    const loader = loading === true ? <Loader /> : ''
    const userAdd = addUser === true ? <EmptyUser /> : <Users users={users} />

    return (
      <div className="App">
        <header className="App-header">
          Todo-User
        </header>
        {loader && <div className="container">
          <h1>{loader}</h1>
          <h6>User Loading...</h6>
        </div>
        }
        {userAdd}
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
  addUser: PropTypes.bool.isRequired
}

//complete responsive state will be rendered only after `this.props.getAllUsers()` called
const mapStateToProps = state => {
  console.log('state----', state)
  return {
    users: state.users,
    loading: state.loading,
    addUser: state.addUser,
    user: state.user
  }
}

export default connect(mapStateToProps, { getAllUsers })(App);
