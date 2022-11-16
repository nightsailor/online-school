import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import styled from 'styled-components'

export default function TestView() {
  return (
    <div class="exam-2022">
      <div class="header-2022">
        <div class="time-left">
          <div class="text">Time Left</div>
          <div class="value text-green-500">90:44</div>
        </div>
        <div class="sections">
          <button class="section section-active">Grammer</button>
          <button class="section">Vocabulary</button>
          <button class="section">Comprehension</button>
          <button class="section">Communication Skills</button>
        </div>
        <div class="section-mobile-wrap">
          <select name="section-mobile" id="section-mobile">
            <option value="Grammer">Grammer</option>
            <option value="Vocabulary">Vocabulary</option>
            <option value="Comprehension">Comprehension</option>
            <option value="Communication Skills">Communication Skills</option>
          </select>
        </div>
        <div class="user">
          <div class="username">Muhammad</div>
          <div class="user-image"></div>
        </div>
      </div>

      <div class="center-2022">
        <div class="problem-2022">
          <p class="problem-head">
            Q1. WORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORD
          </p>
          <p class="problem-text">
            WORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORDWORD
          </p>
          <div class="problem-options">
            <div class="opt">
              <input type="radio" name="opt" value="1" id="opt1" />
              <label for="opt1">Option A</label>
            </div>
            <div class="opt">
              <input type="radio" name="opt" value="2" id="opt2" />
              <label for="opt2">Option B</label>
            </div>
            <div class="opt">
              <input type="radio" name="opt" value="3" id="opt3" />
              <label for="opt3">Option C</label>
            </div>
            <div class="opt">
              <input type="radio" name="opt" value="4" id="opt4" />
              <label for="opt4">Option D</label>
            </div>
          </div>
          <button class="submit">Submit</button>
        </div>
        <div class="nav-2022">
          <div class="border-box-2022">
            <div class="box-2022">
              <div class="item item-active">1</div>
              <div class="item">2</div>
              <div class="item item-visited">3</div>
              <div class="item">4</div>
              <div class="item">5</div>
              <div class="item">6</div>
              <div class="item">7</div>
              <div class="item">8</div>
              <div class="item">9</div>
              <div class="item">10</div>
              <div class="item item-active">11</div>
              <div class="item">12</div>
              <div class="item">13</div>
              <div class="item">14</div>
              <div class="item">15</div>
              <div class="item">16</div>
              <div class="item">17</div>
              <div class="item">18</div>
              <div class="item">19</div>
              <div class="item">20</div>
            </div>
            <div class="switch-2022">
              <div class="switch-a"></div>
              <div class="switch-b"></div>
            </div>
          </div>
          <Link to={'/quiz/quizid/username'}><button class="end-test">END TEST</button></Link>
        </div>
      </div>
    </div>
  )
}
