import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import styled from 'styled-components'

export default function TestResult() {
  return (
    <div class="exam-2022">
      <div class="header-2022">
        <Link to={'/'}><button class="home-btn-2022">HOME</button></Link>
        <div class="result-2022">
          <p class="contest-id">Results</p>
          <p class="contest-name">Contest Id - Contest Name</p>
        </div>
        <div class="user">
          <div class="username">Muhammad</div>
          <div class="user-image"></div>
        </div>
      </div>
      <div class="center-b-2022">
        <p class="head-score">SCORE</p>
        <div class="box-score-a">
          <p class="box-a-marks">
            <span class="total-obtained">45</span>
            <span class="marks-line"></span>
            <span class="total-marks">60</span>
          </p>
          <div class="box-a-line"></div>
          <div class="box-a-statistics">
            <table class="box-a-table">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Total</th>
                  <th>Correct</th>
                  <th>Wrong</th>
                  <th>Unanswered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Grammer</td>
                  <td>20</td>
                  <td class="correct-score">15</td>
                  <td class="wrong-score">4</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Vocabulary</td>
                  <td>20</td>
                  <td class="correct-score">20</td>
                  <td class="wrong-score">10</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Comprehension</td>
                  <td>20</td>
                  <td class="correct-score">10</td>
                  <td class="wrong-score">3</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Communication</td>
                  <td>20</td>
                  <td class="correct-score">10</td>
                  <td class="wrong-score">3</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="head-answer-key">ANSWER KEY</p>
        <div class="box-score-b">
          <table class="box-b-table">
            <tbody>
              <tr>
                <td>1 - A</td>
                <td>2 - B</td>
                <td>3 - C</td>
                <td>4 - A</td>
                <td>5 - D</td>
                <td>6 - A</td>
                <td>7 - C</td>
                <td>8 - A</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>13 - C</td>
              </tr>
              <tr>
                <td>15 - D</td>
                <td></td>
                <td></td>
                <td></td>
                <td>20 - D</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>28 - A</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>45 - C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={()=>window.print()} class="print-score">Print</button>
      </div>
    </div>
  )
}
