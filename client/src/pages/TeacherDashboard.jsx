import React, { Component } from "react";
import { Link } from 'react-router-dom';
import api from "../api";

import styled, { css } from "styled-components";

// import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  // background-color: #f0f2f5;
  display: flex;
  align-items: center;
  background-color: #D1E8E2;
`;

const DashboardWrapper = styled.div`
  width: 100%;
	height: 60vh;
  display: flex;
	align-items: top;
	justify-content: space-between;
`;

const DashboardLeft = styled.div`
	display: flex;
  flex-direction: column;
	margin-left: 15px;
`;

const DashboardRight = styled.div`
	display: flex;
  flex-direction: column;
	margin-right: 25px;
`;

const DashboardLogo = styled.h3`
  font-size: 38px;
  font-weight: 700;
  color: #1775ee;
  margin-bottom: 10px;
`;

const DashboardDesc = styled.span`
  font-size: 18px;
`;

const DashboardTop = styled.div`
  display: flex;
`

const DashboardBottom = styled.div`
	display: flex;
`

const Card = styled.div.attrs({
  className: "card",
})`
	margin: 10px;
  width: 18rem;
  border: 1px solid rgba(0,0,0,0.18);
  border-radius: 0.375rem;
`;

const CardBody = styled.div.attrs({
  className: "card-body",
})`
  padding: 16px;
`;

const Title = styled.h5.attrs({
  className: "card-title",
})`
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
`;

const Text = styled.p.attrs({
  className: "card-text",
})`
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const Button = styled.a.attrs({
  className: "btn btn-primary",
})`
  background-color: #0d6efd;
  border-color: 1px solid #0d6efd;
  &:hover{
      background-color: #0b5ed7;
      border-color: #0a58ca;
  }
`;

class Cards extends Component {
  render() {
    return (
      <Card style={{ backgroundColor: this.props.bgcolor }}>
        <CardBody>
          <Title>{this.props.title}</Title>
          <Text>
            {this.props.desc}
          </Text>
          <Link to={this.props.to}><Button>{this.props.submit}</Button></Link>
        </CardBody>
      </Card>
    )
  }
}

class TeacherDashboard extends Component {
  render() {
    const card1 = {
      bgcolor: '#E27D60',
      title: 'Create Test',
      desc: 'Create a Test on specific Date and Time.',
      submit: 'Submit',
      to: '/create/test'
    };
    const card2 = {
      bgcolor: '#85DCBA', //85CDCA
      title: 'Add Questions',
      desc: 'Add Questions to Test with Test Id.',
      submit: 'Open',
      to: '/create/question'
    };
    const card3 = {
      bgcolor: '#E8A87C',
      title: 'Leaderboard',
      desc: 'Candidates Scores in specific Test.',
      submit: 'Ok',
      to: '/leaderboard'
    };
    const card4 = {
      bgcolor: '#C38D9E', //41B3A3
      title: 'Card Title',
      desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      submit: 'Go somewhere',
      to: ''
    };
    const card5 = {
      bgcolor: '#C38D9E', //41B3A3
      title: 'Tests',
      desc: 'All Current and Previous tests',
      submit: 'View All',
      to: '/tests'
    };
    return (
      <Dashboard>
        <DashboardWrapper>
          <DashboardLeft>
            <DashboardLogo>Welcome, Mark</DashboardLogo>
            <DashboardDesc>Welcome to our new Teacher's Home</DashboardDesc>
          </DashboardLeft>
          <DashboardRight>
            <DashboardTop>
              <Cards {...card1} />
              <Cards {...card2} />
              <Cards {...card3} />
            </DashboardTop>
            <DashboardBottom>
              <Cards {...card5} bgcolor="#41B3A3" />
              <Cards {...card4} />
              <Cards {...card4} bgcolor="#85CDCA" />
            </DashboardBottom>
          </DashboardRight>
        </DashboardWrapper>
      </Dashboard>
    );
  }
}

export default TeacherDashboard;
