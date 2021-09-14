import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
    padding: 0 2vw;
`

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://github.com/talha8045">
                <img 
                src={logo} 
                width="70" 
                alt="https://github.com/talha8045" />
            </Wrapper>
        )
    }
}

export default Logo