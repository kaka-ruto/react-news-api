import React from 'react';
import { Menu } from 'semantic-ui-react';
import logo from './newsapi.jpeg';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { login, logout } from '../../actions/Login/loginAction.jsx';
import { connect } from 'react-redux';



class HeaderNav extends React.Component {
    constructor (props) {
        super(props);
    }
    responseGoogle = (response) => {
        console.log('login resp', response);
        console.log('login resp------>>>>>>', this);

        // this.props.login(response);
    }

    log_out = (response) => {
        console.log('Logout resp', response);
        // this.props.logout(response);

    }


    render () {
        console.log('--------------->>>>>>>>>', this.props)
        console.log('this.props.is', this.props.auth.isLoggedIn)
        if (!this.props.auth.isLoggedIn) {
            return (
                <Menu stackable>
                    <Menu.Item>
                        <img src={logo} />
                    </Menu.Item>

                    <Menu.Item
                        name='home'
                        // onClick={this.handleItemClick}
                        >
                        Home
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='sign-in'
                            >
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            );
        } else {
            console.log('this.props.is', this.props.auth.isLoggedIn);
            return (
                <Menu stackable>
                    <Menu.Item>
                        <img src={logo} />
                    </Menu.Item>

                    <Menu.Item
                        name='home'
                        // onClick={this.handleItemClick}
                        >
                        Home
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='sign-in'
                            >
                            <GoogleLogout
                                    buttonText="Logout"
                                    onLogoutSuccess={this.log_out}
                                />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (authData) => dispatch(login(authData)),
        logout: (authData) => dispatch(logout(authData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);