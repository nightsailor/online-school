import axios from 'axios'

export const loginCall = payload => axios.post(`/api/auth/login`, payload)
export const registerCall = payload => axios.post(`/api/auth/register`, payload)

export const insertQuiz = payload => axios.post(`/api/quiz/create`, payload)
export const getAllQuizzes = () => axios.get(`/api/quiz/quizzes`)

export const insertQuestion = (id, payload) => axios.post(`/api/question/create/${id}`, payload)


const apis = {
    loginCall,
    registerCall,
    insertQuiz,
    insertQuestion,
    getAllQuizzes
}

export default apis