import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import logo from './newsapi.jpeg';

const HeaderNav = () => {
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
                    <Button primary>Login</Button>
                </Menu.Item>
            </Menu.Menu>
      </Menu>
    );
};

export default HeaderNav;