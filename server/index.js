const express = require("express");
const morgan = require("morgan");

const db = require('./db');
const authRouter = require("./routes/auth-router");
const quizRouter = require("./routes/quiz-router");
const questionRouter = require("./routes/question-router");

const app = express();
const apiPort = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("common"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.use("/api/auth", authRouter);
app.use("/api/quiz", quizRouter);
app.use("/api/question", questionRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
