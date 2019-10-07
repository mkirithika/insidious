import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    setUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }
    setPassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onLogin() {
        this.props.loginDetails(this.state);
    }

    render() {
        return <div>
            <div>
                <label>Name</label>
                <input type='text' value={this.state.userName} onChange={this.setUserName} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' value={this.state.password} onChange={this.setPassword} />
            </div>
            <div>
                <button onClick={this.onLogin}>Login</button>
            </div>
            {this.props.userLoginDetails
                && this.props.userLoginDetails.isAuthenticated &&
                <Redirect to='/user'></Redirect>
            }
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginDetails: (loginDetails) => dispatch({
            type: 'LOGIN_CLICK',
            loginDetails
        })
    };
}
const mapStateToProps = (state) => ({
    userLoginDetails: state.loginReducer.userLoginDetails
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);