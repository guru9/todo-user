import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllUsers } from './Actions/userAction';
import Users from './Components/users';

class App extends Component {

  //props have evrything including initial state properties
  componentDidMount() {
    console.log('props---', this.props)
    this.props.getAllUsers()
  }
  render() {
    const { users, loading } = this.props
    const loader = loading === true ? 'user loading...' : ''
    return (
      <div className="App">
        <header className="App-header">
          Todo-User
        </header>
        {loader && <div className="container">
          <h1>{loader}</h1>
        </div>}
        <Users users={users} />
      </div>
    );
  }
}

//complete responsive state will be rendered only after `this.props.getAllUsers()` called
const mapStateToProps = state => {
  console.log('state----', state)
  return {
    users: state.users,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getAllUsers })(App);
