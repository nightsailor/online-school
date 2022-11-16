import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'

import {
  TeacherDashboard,
  StudentDashboard,
  LeaderBoard,
  SignIn,
  SignUp,
  TestInsert,
  QuestionInsert,
  AllTests,
  TestView,
  TestResult
} from "../pages";

// import 'bootstrap/dist/css/bootstrap.min.css'

const myStorage = window.localStorage;

function App() {
  const user = myStorage.getItem("user");
  const location = useLocation();
  const urlArray = ["/quiz/quizid", "/quiz/quizid/", "/quiz/quizid/username", "/quiz/quizid/username/"];
  return (
    <>
      {!urlArray.includes(location.pathname) && (<NavBar />)}
      <Routes>
        <Route path="/" element={user ? <TeacherDashboard /> : <SignIn />} />

        <Route path="/leaderboard" element={<LeaderBoard />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <SignIn />} />

        <Route path="/register" element={user ? <Navigate to="/" /> : <SignUp />} />
        
        {user && (
          <>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

            <Route path="/student/dashboard" element={<StudentDashboard />} />

            <Route path="/create/test" element={<TestInsert />} />
            
            <Route path="/create/question" element={<QuestionInsert />} />

            <Route path="/tests" element={<AllTests />} />

            <Route path="/quiz/quizid" element={<TestView />} />

            <Route path="/quiz/quizid/username" element={<TestResult />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App