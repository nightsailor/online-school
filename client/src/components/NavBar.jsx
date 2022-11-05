import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'

const Container = styled.div`
    height: 70px;
    // margin-bottom: 3vh;
`

const Nav = styled.nav.attrs({
    className: '',
})`
    background-color: black;
    background-color: rgba(33,37,41,1);
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 70px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar