import React, { Component } from "react";
import api from "../api";

import styled, { css } from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = styled.div`
  width: 100vw;
  height: 87vh;
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
`;

const CardBody = styled.div.attrs({
  className: "card-body",
})``;

const Title = styled.h5.attrs({
  className: "card-title",
})``;

const Text = styled.p.attrs({
  className: "card-text",
})``;

const Button = styled.a.attrs({
  className: "btn btn-primary",
})``;

class Cards extends Component {
  render() {
      return (
        <Card style={{  backgroundColor: this.props.bgcolor }}>
          <CardBody>
            <Title>{this.props.title}</Title>
            <Text>
            {this.props.desc}
            </Text>
            <Button href={this.props.to}>{this.props.submit}</Button>
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
            <Cards {...card4} bgcolor="#41B3A3"/>
            <Cards {...card4} />
            <Cards {...card4} bgcolor="#85CDCA"/>
          </DashboardBottom>
					</DashboardRight>
        </DashboardWrapper>
      </Dashboard>
    );
  }
}

export default TeacherDashboard;
