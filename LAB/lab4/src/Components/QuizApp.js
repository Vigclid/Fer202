import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import { QuizProvider } from './QuizContext';

const QuizApp = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <QuizProvider>
      <Container className="mt-4">
        <Row className="mb-3">
          <Col>
            <h2 className="text-center">Quiz Application</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="text-center">
            <Button variant="primary" onClick={() => setShowForm(!showForm)}>
              <FaPlus /> {showForm ? 'Hide Form' : 'Add Question'}
            </Button>
          </Col>
        </Row>
        {showForm && <QuestionForm />}
        <QuestionList />
      </Container>
    </QuizProvider>
  );
};

export default QuizApp;
