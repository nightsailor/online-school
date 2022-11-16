import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
  className: 'h1',
})`
  margin-bottom: 30px;
`

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  margin: 0 30px;
`

const Label = styled.label.attrs({
  className: 'form-label',
})``

const InputText = styled.input.attrs({
  className: 'form-control',
})``

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 20px 15px 0;
`

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 0;
`

class QuizInsert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      duration: '',
    }
  }

  handleChangeInputId = async event => {
    const id = event.target.validity.valid
      ? event.target.value
      : this.state.id

    this.setState({ id })
  }

  handleChangeInputName = async event => {
    const name = event.target.value
    this.setState({ name })
  }

  handleChangeInputDuration = async event => {
    const duration = event.target.value
    this.setState({ duration })
  }

  handleIncludeQuiz = async () => {
    const { id, name, duration } = this.state
    const payload = { quizName: name, quizId: id, duration }

    try {
      const res = await api.insertQuiz(payload);
      window.alert(`Quiz inserted successfully`)
      this.setState({
        name: '',
        id: '',
        duration: '',
      })
    } catch (err) {
      window.alert(err);
    }
  }

  render() {
    const { id, name, duration } = this.state
    return (
      <Wrapper>
        <Title>Create Quiz</Title>

        <Label>Quiz Id: </Label>
        <InputText
          type="text"
          value={id}
          pattern="[a-zA-Z0-9]+"
          onChange={this.handleChangeInputId}
        />

        <Label>Quiz Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Duration:  {'{'}format: HH: hours, MM: Minutes, SS: Seconds{'}'}</Label>
        <InputText
          type="text"
          maxLength="6"
          value={duration}
          placeholder="HHMMSS"
          onChange={this.handleChangeInputDuration}
        />

        <Button onClick={this.handleIncludeQuiz}>Add Quiz</Button>
        <Link to={'/teacher/dashboard'}><CancelButton>Cancel</CancelButton></Link>
      </Wrapper>
    )
  }
}

export default QuizInsert