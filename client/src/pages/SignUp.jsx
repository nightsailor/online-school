import React, { Component } from "react";
import { Link } from 'react-router-dom'
import api from "../api";
import styled, { css } from "styled-components";

const myStorage = window.localStorage;

const baseStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Login = styled.div`
  width: 100vw;
  height: 87vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`

const LoginLeft = styled.div`
  ${baseStyle}
`

const LoginLogo = styled.h3`
  font-size: 50px;
  font-weight: 800;
  color: #1775ee;
  margin-bottom: 10px;
`

const LoginDesc = styled.span`
  font-size: 24px;
`

const LoginRight = styled.div`
  ${baseStyle}
`

const LoginBox = styled.form`
  height: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LoginInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
  &:focus {
    border: 5px solid green;
    outline: none;
  }
`

const LoginButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`

const LoginForget = styled.span`
  text-align: center;
  color: #1775ee;
`

const LoginRegisterButton = styled.button`
  width: 60%;
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #42b72a;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class SignUp extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordAgain: "",
    };
  }

  handleChangeInput = async (e) => {
    const { type, value } = e.target;
    switch (type) {
      case "text":
        this.setState({ username: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        e.target?.name === "passwordAgain"
          ? this.setState({ passwordAgain: value })
          : this.setState({ password: value });
    }
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { username, email, password, passwordAgain } = this.state;

    if (passwordAgain !== password) {
       e.target.passwordAgain.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username,
        email: email,
        password: password,
      };
      try {
        const res = await api.registerCall(user);
        myStorage.setItem("user", res.data.username);
        window.location.reload();
      } catch (err) {
        window.alert(err);
      }
    }
  };
  
  render() {
    const { username, email, password, passwordAgain } = this.state;
    return (
      <Login>
        <LoginWrapper>
          <LoginLeft>
            <LoginLogo>Online School</LoginLogo>
            <LoginDesc>
              Conduct or Attend class in virtual mode.
            </LoginDesc>
          </LoginLeft>
          <LoginRight>
            <LoginBox onSubmit={this.handleClick}>
              <LoginInput
                placeholder="Username"
                required
                value={username}
                onChange={this.handleChangeInput}
              />
              <LoginInput
                placeholder="Email"
                required
                value={email}
                type="email"
                onChange={this.handleChangeInput}
              />
              <LoginInput
                placeholder="Password"
                required
                value={password}
                type="password"
                minLength="6"
                onChange={this.handleChangeInput}
              />
              <LoginInput
                placeholder="Password Again"
                required
                value={passwordAgain}
                type="password"
                name="passwordAgain"
                onChange={this.handleChangeInput}
              />
              <LoginButton type="submit">
                Sign Up
              </LoginButton>
              <StyledLink to="/login">
                <LoginRegisterButton>
                    Log into Account
                </LoginRegisterButton>
              </StyledLink>
            </LoginBox>
          </LoginRight>
        </LoginWrapper>
      </Login>
    );
  }
}

export default SignUp;
