import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1 mb-3 mx-3',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 14px;
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
    text-align: center;
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

    componentDidMount(){
        this.handleFetchQuizzes();
    }

    render() {
        const { quizArray } = this.state
        console.log(quizArray)
        return (
            <Wrapper>
                <Title>All Tests</Title>
                <Wrapper2>
                <div className="shadow d-flex p-3 mb-5 mt-2 mx-3 justify-content-between align-items-center">
                    <div className="">
                    <p className="h3" >{quizArray.length != 0 ? quizArray[0].name : ''}</p>
                    <p className="h3" >
                        {quizArray.length !== 0 
                    ? quizArray[0].duration.hours + ":" + quizArray[0].duration.minutes + ":" + quizArray[0].duration.seconds
                    : ''}
                    </p>
                    </div>
                    <Button href={'/quiz/quizid'}>Start Test</Button>
                </div>

                <div className="shadow d-flex p-3 mb-5 mx-3 justify-content-between align-items-center">
                    <div className="">
                    <p className="h3" >{quizArray.length != 0 ? quizArray[0].name : ''}</p>
                    <p className="h3" >
                        {quizArray.length !== 0 
                    ? quizArray[0].duration.hours + ":" + quizArray[0].duration.minutes + ":" + quizArray[0].duration.seconds
                    : ''}
                    </p>
                    </div>
                    <Button href={'/quiz/quizid'}>Start Test</Button>
                </div>

                <div className="shadow d-flex p-3 mb-5 mx-3 justify-content-between align-items-center">
                    <div className="">
                    <p className="h3" >{quizArray.length != 0 ? quizArray[0].name : ''}</p>
                    <p className="h3" >
                        {quizArray.length !== 0 
                    ? quizArray[0].duration.hours + ":" + quizArray[0].duration.minutes + ":" + quizArray[0].duration.seconds
                    : ''}
                    </p>
                    </div>
                    <Button href={'/quiz/quizid'}>Start Test</Button>
                </div>
                </Wrapper2>
                
                <CancelButton href={'/teacher/dashboard'}>Go Back</CancelButton>
            </Wrapper>
        )
    }
}

export default QuizInsert