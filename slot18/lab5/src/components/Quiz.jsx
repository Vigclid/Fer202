import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

export const Quiz = () => {
  // Dữ liệu câu hỏi và đáp án
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Who is the CEO of Tesla?",
      options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Sundar Pichai"],
      correctAnswer: "Elon Musk"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    }
  ];

  // Trạng thái để lưu các câu trả lời của người dùng và câu hỏi hiện tại
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Xử lý khi người dùng chọn một câu trả lời
  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  // Chuyển sang câu hỏi tiếp theo
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  // Tính điểm khi người dùng submit
  const handleSubmit = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  return (
    <div className="quiz-container" style={{ width: '80%', maxWidth: '600px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Quiz</h2>

      {!submitted ? (
        <div>
          <h5>{questions[currentQuestion].question}</h5>
          {questions[currentQuestion].options.map((option, optionIndex) => (
            <Form.Check
              key={optionIndex}
              type="radio"
              name={`question-${currentQuestion}`}
              label={option}
              value={option}
              checked={answers[currentQuestion] === option}
              onChange={() => handleAnswerChange(currentQuestion, option)}
            />
          ))}

          <Button 
            variant="primary" 
            onClick={handleNext} 
            className="mt-3"
            disabled={answers[currentQuestion] === ''}
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </div>
      ) : (
        <div className="mt-4">
          {score === questions.length ? (
            <Alert variant="success">Congratulations! You scored {score} out of {questions.length}!</Alert>
          ) : (
            <Alert variant="danger">You scored {score} out of {questions.length}. Better luck next time!</Alert>
          )}
        </div>
      )}
    </div>
  );
};

