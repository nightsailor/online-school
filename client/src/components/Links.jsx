import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo2.png'

const Wrapper = styled.a.attrs({
    className: '',
})`
    display: flex;
    align-items: center;
    height: 50px;
`

const ButtonHome = styled.p.attrs({})`
    margin-left: 20px;
`

const myStorage = window.localStorage;

const Collapse = styled.div.attrs({
    className: '',
})`
    display: flex;
    justify-content: end;
`

const List = styled.div.attrs({
    className: '',
})`
    display: flex;
`

const Item = styled.div.attrs({
    className: '',
})`
    margin-left: 20px;
    color: rgb(255 255 255 / 55%);

    &:hover{
        color: rgb(255 255 255 / 75%);
    }
`

class Links extends Component {
    constructor(props) {
        super();
        this.state = {
            email: null,
            password: null,
            SigninError: null,
            isFetching: null,
        };
    }

    handleLogout = () => {
        myStorage.removeItem("user");
        window.location.href = '/';
    };

    render() {
        const user = myStorage.getItem("user");
        return (
            <React.Fragment>
                <Wrapper href="/">
                    <img 
                        style={{height: "inherit"}}
                        src={logo} 
                        alt="https://github.com/nightsailor" />
                    <ButtonHome>Online School</ButtonHome>
                </Wrapper>
                <Collapse>
                    <List>
                        {user? (
                        <>
                        <Item>
                            <Link to="/teacher/dashboard" className="nav-link">
                                Teacher's Dashboard
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/student/dashboard" className="nav-link">
                                Student's Dashboard
                            </Link>
                        </Item>
                        </>
                        ) : (<p></p>)}
                        <Item>
                            <Link to="/leaderboard" className="nav-link">
                                Leaderboard
                            </Link>
                        </Item>

                        {user?
                            (<Item>
                                <Link to="/" className="nav-link" onClick={this.handleLogout}>
                                    Sign Out
                                </Link>
                            </Item>)
                            :
                            (<Item>
                                <Link to="/login" className="nav-link">
                                    {/* Sign In / Sign Up */}
                                    Login / Register
                                </Link>
                            </Item>)
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links