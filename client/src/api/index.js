import axios from 'axios'

export const loginCall = payload => axios.post(`/auth/login`, payload)
export const registerCall = payload => axios.post(`/auth/register`, payload)

export const insertQuiz = payload => axios.post(`/quiz/create`, payload)
export const getAllQuizzes = () => axios.get(`/quiz/quizzes`)

export const insertQuestion = (id, payload) => axios.post(`/question/create/${id}`, payload)


const apis = {
    loginCall,
    registerCall,
    insertQuiz,
    insertQuestion,
    getAllQuizzes
}

export default apis