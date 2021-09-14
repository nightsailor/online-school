import React, { Component } from "react";
import { Link } from 'react-router-dom'
import api from "../api";
import { CircularProgress } from "@material-ui/core";
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
  height: 300px; //1
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
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
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

const Failure = styled.span`
  color: red;
  text-align: center;
`

class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: null,
      password: null,
      SigninError: null,
      isFetching: null,
    };
  }

  handleChangeInput = async (event) => {
    const { type, value } = event.target;
    type === "email"
      ? this.setState({ email: value })
      : this.setState({ password: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const payload = { email, password };
    this.setState({ isFetching: true });

    try {
      const res = await api.loginCall(payload);

      window.alert("Login Successful!");
      this.setState({ SigninError: false });
      myStorage.setItem("user", res.data.username);
      
      window.location.href = '/teacher/dashboard';
    } catch (err) {
      window.alert(err);
      this.setState({ SigninError: true });
    }

    this.setState({ isFetching: false });
  };

  render() {
    const { email, password, SigninError, isFetching } = this.state;
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
            <LoginBox onSubmit={this.handleSubmit}>
              <LoginInput
                type="email"
                placeholder="Email"
                required
                value={email}
                className="loginInput"
                onChange={this.handleChangeInput}
              />
              <LoginInput
                type="password"
                placeholder="Password"
                required
                value={password}
                className="loginInput"
                onChange={this.handleChangeInput}
              />
              <LoginButton
                className="loginButton"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Log In"
                )}
              </LoginButton>
              <LoginForget>Forgot Password?</LoginForget>
              <StyledLink to="/register">
                <LoginRegisterButton>
                  {isFetching ? (
                    <CircularProgress color="white" size="20px" />
                  ) : (
                    "Create a New Account"
                  )}
                </LoginRegisterButton>
              </StyledLink>
              {SigninError && (
                <Failure>Something went wrong!</Failure>
              )}
            </LoginBox>
          </LoginRight>
        </LoginWrapper>
      </Login>
    );
  }
}

export default SignIn;
