import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../Actions/userAction';
import PropTypes from 'prop-types';

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            gender: '',
            balance: 0
        };
    }

    onKeyUpHandle = (target, e) => {
        if (e.keyCode === 13) {
            switch (target) {
                case 'name':
                    this.email.focus();
                    break;
                case 'email':
                    this.gender.focus();
                    break;
                case 'balance':
                    this.balance.focus();
                    break;
                case 'submit':
                    this.submit.focus();
                    break;
                default:
                    this.name.focus();
                    break;
            }
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const userData = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            balance: this.state.balance
        };

        this.props.addNewUser(userData, this.props.history);
    }

    render() {
        const { name, email, gender, balance } = this.state

        const btnProp = (!name || !email || !gender) ? 'button-disabled' : 'button-enable';

        const btnDisabled = (!name || !email || !gender) ?
            <button type="submit" className={btnProp} disabled>Submit</button> :
            <button type="submit" className={btnProp}
                ref={(input) => { this.submit = input }}
                onKeyUp={this.onKeyUpHandle.bind(this, 'submit')}>
                Submit
            </button>;

        return (
            <div className="container" >
                <div className="card adduser-card">
                    <section>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleInputChange}
                                ref={(input) => { this.name = input }}
                                onKeyUp={this.onKeyUpHandle.bind(this, 'name')}
                                placeholder="Enter Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                ref={(input) => { this.email = input }}
                                onKeyUp={this.onKeyUpHandle.bind(this, 'email')}
                                onChange={this.handleInputChange}
                                placeholder="Enter Email"
                            />
                            <input
                                type="text"
                                name="gender"
                                value={gender}
                                onChange={this.handleInputChange}
                                ref={(input) => { this.gender = input }}
                                onKeyUp={this.onKeyUpHandle.bind(this, 'gender')}
                                placeholder="Enter Gender"
                            />
                            <input
                                type="number"
                                name="balance"
                                value={balance}
                                onChange={this.handleInputChange}
                                ref={(input) => { this.balance = input }}
                                onKeyUp={this.onKeyUpHandle.bind(this)}
                                placeholder="Enter Balance"
                            />
                            {btnDisabled}
                        </form>
                    </section>
                </div>
            </div >
        );
    }

}

AddUser.propTypes = {
    addNewUser: PropTypes.func.isRequired
}

export default connect(null, { addNewUser })(AddUser);