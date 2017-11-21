import React from 'react';
import { Menu } from 'semantic-ui-react';
import logo from './newsapi.jpeg';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


class HeaderNav extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    componentWillMount() {
        if(sessionStorage.getItem('accessToken') !== null) {
            this.setState({
                isLoggedIn: true
            });
        }
    }
    responseGoogle = (response) => {
        if(response.profileObj) {
            this.setState((prevState, prop) => ({
                isLoggedIn: !prevState.isLoggedIn
            }), () => {
                sessionStorage.setItem('accessToken', response.accessToken);
            });
        }
    }

    log_out = (response) => {
        this.setState((prevState, prop) => ({
            isLoggedIn: !prevState.isLoggedIn
        }), () => {
            sessionStorage.removeItem('accessToken');
        });
    }


    render () {
        if (this.state.isLoggedIn) {
            return (
                <Menu stackable>
                    <Menu.Item>
                        <img src={logo} />
                    </Menu.Item>

                    <Menu.Item
                        name='home'
                        >
                        Home
                    </Menu.Item>

                    <Menu.Menu position='right'>
                    <Menu.Item
                        name='welcome'
                        >
                        Welcome, dear reader
                    </Menu.Item>
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
        else {
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
                                clientId="35613451563-ku9a585k8l9mekcfpvbpejsoq3f11q98.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            );
        }
    }
}

// const responseGoogle = (response) => {
//     console.log(response);
//     console.log(response.isSignedIn);
//     console.log(response.profileObj);
//     console.log(response.profileObj.givenName);
// }

// const HeaderNav = () => {
//     return (
//         <Menu stackable>
//             <Menu.Item>
//                 <img src={logo} />
//             </Menu.Item>

//             <Menu.Item
//                 name='home'
//                 // onClick={this.handleItemClick}
//                 >
//                 Home
//             </Menu.Item>

//             <Menu.Menu position='right'>
//                 <Menu.Item
//                     name='sign-in'
//                     >
//                     <GoogleLogin
//                         clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//                         buttonText="Login"
//                         onSuccess={responseGoogle}
//                         onFailure={responseGoogle}
//                     />
//                     {/* // <Button primary>Login</Button> */}
//                 </Menu.Item>
//             </Menu.Menu>
//       </Menu>
//     );
// };

export default HeaderNav;