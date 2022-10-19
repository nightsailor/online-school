import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

import {
  TeacherDashboard,
  StudentDashboard,
  LeaderBoard,
  SignIn,
  SignUp,
  TestInsert,
  QuestionInsert
} from "../pages";

import 'bootstrap/dist/css/bootstrap.min.css'

const myStorage = window.localStorage;

function App() {
  const user = myStorage.getItem("user");
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <LeaderBoard /> : <SignIn />} />

        <Route path="/leaderboard" element={<LeaderBoard />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <SignIn />} />

        <Route path="/register" element={user ? <Navigate to="/" /> : <SignUp />} />
        
        {user && (
          <>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

            <Route path="/student/dashboard" element={<StudentDashboard />} />

            <Route path="/create/test" element={<TestInsert />} />
            
            <Route path="/create/question" element={<QuestionInsert />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App