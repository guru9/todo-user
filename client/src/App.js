import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllUsers } from './Actions/userAction';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    console.log(this.props.getAllUsers())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    users: state.users
  }
}

App.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.array
}

export default connect(mapStateToProps, { getAllUsers })(App);
