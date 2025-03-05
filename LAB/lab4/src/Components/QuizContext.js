import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([
    {
      question: 'What is ReactJS?',
      answers: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system'
      ],
      correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
      question: 'What is JSX?',
      answers: [
        'A programming language',
        'A file format',
        'A syntax extension for JavaScript'
      ],
      correctAnswer: 'A syntax extension for JavaScript'
    }
  ]);

  const addQuestion = (newQuestion) => {
    setQuizData([...quizData, newQuestion]);
  };

  return (
    <QuizContext.Provider value={{ quizData, addQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};
