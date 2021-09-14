import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Render = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class RetrieveQuiz extends Component {
  getTestScores = (event) => {
    event.preventDefault();
    console.log(this.props);
    if (
      window.confirm(`Do tou want to go to ${this.props.id.quizId} Scores?`)
    ) {
      window.location.href = `/leaderboard/quiz/${this.props.id._id}`;
    }
  };

  render() {
    return <Render onClick={this.getTestScores}>Score Board</Render>;
  }
}

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    try {
      const quizzes = await api.getAllQuizzes();
      this.setState({
        quizzes: quizzes.data,
        isLoading: false,
      });
    } catch (err) {
      window.alert(err);
    }
  };

  render() {
    const { quizzes, isLoading } = this.state;
    console.log("TCL: quizzesList -> render -> quizzes", quizzes);

    const columns = [
      {
        Header: "Test ID",
        accessor: "quizId",
        filterable: true,
      },
      {
        Header: "Test Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Duration",
        accessor: "duration",
        Cell: (props) => {
          const { hours, minutes, seconds } = props.value;
          const lessThan = (el) => (el <= 10 ? "0" + el : el);
          return (
            <span>
              {lessThan(hours)} : {lessThan(minutes)} : {lessThan(seconds)}
            </span>
          );
        },
      },
      {
        Header: "Students Leaderboard",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <RetrieveQuiz id={props.value} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!quizzes.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={quizzes}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}

export default LeaderBoard;
