import React, { useState, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { QuizContext } from './QuizContext';
const QuestionForm = () => {
  const { addQuestion } = useContext(QuizContext);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({ question, answers, correctAnswer });
    setQuestion('');
    setAnswers(['', '', '']);
    setCorrectAnswer('');};
  return (
    <Card className="p-3 mb-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required/>
        </Form.Group>
        {answers.map((answer, index) => (
          <Form.Group key={index} className="mb-2">
            <Form.Label>Answer {index + 1}</Form.Label>
            <Form.Control
              type="text"
              value={answer}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[index] = e.target.value;
                setAnswers(newAnswers);
              }}
              required/>
          </Form.Group>
        ))}
        <Form.Group className="mb-3">
          <Form.Label>Correct Answer</Form.Label>
          <Form.Control
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required/>
        </Form.Group>
        <Button variant="success" type="submit">Add Question</Button>
      </Form>
    </Card>
  );
};
export default QuestionForm;
