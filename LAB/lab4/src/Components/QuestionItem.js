import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

const QuestionItem = ({ questionIndex, questionData, selectedAnswer, onSelectAnswer, isSubmitted }) => {
  const { question, answers, correctAnswer } = questionData;

  return (
    <Card className="mb-3 p-3">
      <h5>{question}</h5>
      {answers.map((answer, index) => (
        <Button
          key={index}
          variant={selectedAnswer === answer ? 'primary' : 'light'}
          className="m-1"
          onClick={() => onSelectAnswer(questionIndex, answer)}
          disabled={isSubmitted}
        >
          {answer}
        </Button>
      ))}

      {isSubmitted && selectedAnswer && (
        <div className="mt-2">
          {selectedAnswer === correctAnswer ? (
            <span className="text-success"><FaCheck /> Correct!</span>
          ) : (
            <span className="text-danger"><FaTimes /> Incorrect! The correct answer is: <strong>{correctAnswer}</strong></span>
          )}
        </div>
      )}
    </Card>
  );
};

export default QuestionItem;
