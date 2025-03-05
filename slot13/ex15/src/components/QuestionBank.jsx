import React, { useReducer, useState, useEffect } from "react";
import { Container, Card, Button, Form, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, feedback: "" };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const newFeedback = isCorrect
        ? "Correct! 🎉"
        : `Incorrect! The correct answer is ${state.questions[state.currentQuestion].answer}`;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: newFeedback,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);

  useEffect(() => {
    if (!showScore && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showScore]);

  useEffect(() => {
    if (showScore && score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
  }, [showScore, score]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
    setTimeLeft(10);
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  return (
    <Container className="mt-4 w-75 text-center"
    style={{
      border: '2px solid rgb(142, 52, 0)', // Border xanh, dày 2px
      boxShadow: '0 6px 12px rgba(255, 147, 147, 0.9)', // Shadow đậm
      padding: '20px', // Thêm khoảng cách bên trong
      borderRadius: '8px', // Bo góc
      backgroundColor: 'rgb(24, 24, 24)'
    }}>
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h4>High Score: {highScore}</h4>
            <Button variant="warning" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <ProgressBar
              now={(currentQuestion + 1) / questions.length * 100}
              className="mb-3"
            />
            <h4>
              Question {questions[currentQuestion].id}:<br />
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  block
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="mt-3">
              <p style={{ color: timeLeft < 5 ? "red" : "black" }}>
                Time Left: {timeLeft}s
              </p>
              {feedback && (
                <p>
                  {feedback.includes("Correct") ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <FaTimesCircle color="red" />
                  )}{" "}
                  {feedback}
                </p>
              )}
              <Button
                variant="primary"
                className="mt-3"
                disabled={!selectedOption}
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;