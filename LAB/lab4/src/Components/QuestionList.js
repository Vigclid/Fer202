import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from './QuizContext';
import { ListGroup, Button, Alert } from 'react-bootstrap';
import QuestionItem from './QuestionItem';
import Confetti from 'react-confetti';

const QuestionList = () => {
  const { quizData } = useContext(QuizContext);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quizData.length * 30);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleAnswerSelection = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
    setIsSubmitted(true);
    if (totalScore === quizData.length) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setTimeLeft(quizData.length * 30);
    setShowConfetti(false);
  };

  return (
    <div>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <Alert variant="info" className="text-center">
        ⏳ Time Left: {timeLeft}s
      </Alert>

      <ListGroup>
        {quizData.map((q, index) => (
          <QuestionItem
            key={index}
            questionIndex={index}
            questionData={q}
            selectedAnswer={selectedAnswers[index] || null}
            onSelectAnswer={handleAnswerSelection}
            isSubmitted={isSubmitted}
          />
        ))}
      </ListGroup>
      <div className="text-center mt-3">
        {!isSubmitted ? (
          <Button
            variant="success"
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < quizData.length}
          >
            Submit
          </Button>
        ) : (
          <>
            <Alert variant="success" className="mt-3">
              🎯 Your Score: {score} / {quizData.length}
            </Alert>
            <Button variant="warning" onClick={handleRetake}>
              Retake Quiz
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
