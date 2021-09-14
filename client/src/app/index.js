import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
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
      <Switch>
        <Route path="/leaderboard" exact><LeaderBoard /></Route>

        <Route path="/" exact>{user ? <LeaderBoard /> : <SignIn />}</Route>

        <Route path="/login" exact>{user ? <Redirect to="/" /> : <SignIn />}</Route>

        <Route path="/register" exact>{user ? <Redirect to="/" /> : <SignUp />}</Route>
        
        {user && (
          <>
            <Route path="/teacher/dashboard" exact><TeacherDashboard /></Route>

            <Route path="/student/dashboard" exact><StudentDashboard /></Route>

            <Route path="/create/test" exact><TestInsert /></Route>
            
            <Route path="/create/question" exact><QuestionInsert /></Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App