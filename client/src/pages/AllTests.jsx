import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
  className: 'h1',
})`
  margin: 0 1rem;
  margin-bottom: 1rem;
`

const Wrapper = styled.div.attrs({
  className: '',
})`
  margin: 0 14px;
  text-align: center;
`

const Wrapper2 = styled.div`
  height: 60vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
      display: none;
  }
`

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  height: 38px;
`

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 3rem 15px 15px 21px;
`

class QuizInsert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quizArray: [],
    }
  }

  handleFetchQuizzes = async () => {
    try {
      const res = await api.getAllQuizzes();
      console.log(res.data)

      this.setState({
        quizArray: res.data
      })
    } catch (err) {
      window.alert(err);
    }
  }

  componentDidMount() {
    this.handleFetchQuizzes();
  }

  render() {
    const { quizArray } = this.state
    console.log(quizArray)
    return (
      <Wrapper>
        <Title>All Tests</Title>
        <Wrapper2>
          <div className="card-test-2022">
            <div className="">
              <p className="">{quizArray.length != 0 ? quizArray[0].name : ''}</p>
              <p className="">
                {quizArray.length !== 0
                  ? quizArray[0].duration.hours + ":" + quizArray[0].duration.minutes + ":" + quizArray[0].duration.seconds
                  : ''}
              </p>
            </div>
            <Button href={'/quiz/quizid'}>Start Test</Button>
          </div>

          <div className="card-test-2022">
            <div className="">
              <p className="">{quizArray.length != 0 ? quizArray[0].name : ''}</p>
              <p className="">
                {quizArray.length !== 0
                  ? quizArray[0].duration.hours + ":" + quizArray[0].duration.minutes + ":" + quizArray[0].duration.seconds
                  : ''}
              </p>
            </div>
            <Button href={'/quiz/quizid'}>Start Test</Button>
          </div>

          <div className="card-test-2022">
            <div className="">
              <p className="">{quizArray.length != 0 ? quizArray[0].name : ''}</p>
              <p className="">
                {quizArray.length !== 0
                  ? quizArray[0].duration.hours + ":" + quizArray[0].duration.minutes + ":" + quizArray[0].duration.seconds
                  : ''}
              </p>
            </div>
            <Button href={'/quiz/quizid'}>Start Test</Button>
          </div>
        </Wrapper2>

        <Link to={'/teacher/dashboard'}><CancelButton>Go Back</CancelButton></Link>
      </Wrapper>
    )
  }
}

export default QuizInsert