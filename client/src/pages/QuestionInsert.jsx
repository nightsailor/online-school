import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class QuestionsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quizId: '',
            questionDesc: '',
            op1: '',
            op2: '',
            op3: '',
            op4: '',
            answer: '',
        }
    }

    handleChangeInput = async event => {
        const { name, value} = event.target
        switch(name) {
            case "quizId": this.setState({ quizId: value }); break;
            case "questionDesc": this.setState({ questionDesc: value }); break;
            case "op1": this.setState({ op1: value }); break;
            case "op2": this.setState({ op2: value }); break;
            case "op3": this.setState({ op3: value }); break;
            case "op4": this.setState({ op4: value }); break;
            case "answer": this.setState({ answer: value }); break;
        }
    }

    handleIncludeQuestion = async () => {
        const { quizId, questionDesc, op1, op2, op3, op4, answer } = this.state;
        const options = [ op1, op2, op3, op4 ];
        const payload = { questionDesc, answer, options }

        try {
            const res = await api.insertQuestion(quizId, payload);
            window.alert(`Question inserted successfully`)
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
        const { quizId, questionDesc, op1, op2, op3, op4, answer } = this.state
        return (
            <Wrapper>
                <Title>Create Question</Title>

                <Label>Quiz Id: </Label>
                <InputText
                    type="text"
                    value={quizId}
                    name="quizId"
                    onChange={this.handleChangeInput}
                />

                <Label>Question Description: </Label>
                <InputText
                    type="text"
                    value={questionDesc}
                    name="questionDesc"
                    onChange={this.handleChangeInput}
                />

                <Label>Option 1: </Label>
                <InputText
                    type="text"
                    value={op1}
                    name="op1"
                    onChange={this.handleChangeInput}
                />

                <Label>Option 2: </Label>
                <InputText
                    type="text"
                    value={op2}
                    name="op2"
                    onChange={this.handleChangeInput}
                />

                <Label>Option 3: </Label>
                <InputText
                    type="text"
                    value={op3}
                    name="op3"
                    onChange={this.handleChangeInput}
                />

                <Label>Option 4: </Label>
                <InputText
                    type="text"
                    value={op4}
                    name="op4"
                    onChange={this.handleChangeInput}
                />

                <Label>Answer: </Label>
                <InputText
                    type="text"
                    value={answer}
                    name="answer"
                    onChange={this.handleChangeInput}
                />

                <Button onClick={this.handleIncludeQuestion}>Add Question</Button>
                <CancelButton href={'/teacher/dashboard'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default QuestionsInsert