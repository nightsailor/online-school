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
        <Route path="/leaderboard" exact><LeaderBoard /></Route>

        <Route path="/" exact>{user ? <LeaderBoard /> : <SignIn />}</Route>

        <Route path="/login" exact>{user ? <Navigate to="/" /> : <SignIn />}</Route>

        <Route path="/register" exact>{user ? <Navigate to="/" /> : <SignUp />}</Route>
        
        {user && (
          <>
            <Route path="/teacher/dashboard" exact><TeacherDashboard /></Route>

            <Route path="/student/dashboard" exact><StudentDashboard /></Route>

            <Route path="/create/test" exact><TestInsert /></Route>
            
            <Route path="/create/question" exact><QuestionInsert /></Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App