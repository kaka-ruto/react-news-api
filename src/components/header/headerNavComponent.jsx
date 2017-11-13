import React from 'react'
import Link from 'react-router-dom'

//Semantic UI
import { Container, Header, Segment, List } from 'semantic-ui-react'

const headerNav = (props) => {
    return (
        <Container>
            <Segment>
                <List.Item>
                    <Header as='h4' textAlign='left'>
                        <Link to='/sources'>Sources</Link>
                    </Header>
                </List.Item>
                <List.Item>
                    <Header as='h4' textAlign='right'>
                        <Link to='/login'>Login</Link>
                    </Header>
                </List.Item>
            </Segment>

            {/* Each smaller components */}
            { props.children }
        </Container>
    );
};

export default headerNav;