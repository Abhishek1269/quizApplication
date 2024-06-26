import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuiz, setCurrentQuestion, setScore, setUserName } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';

const quizData = [
  {
    question: 'What of the following is used in React.js to increase performance?',
    options: [
      { text: 'Original DOM', isCorrect: false },
      { text: 'Virtual DOM', isCorrect: true },
      { text: 'Both A and B', isCorrect: false },
      { text: 'None of these', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following acts as the input of a class-based component?',
    options: [
      { text: 'Class', isCorrect: false },
      { text: 'Props', isCorrect: true },
      { text: 'Factory', isCorrect: false },
      { text: 'Render', isCorrect: false },
    ],
  },
  {
    question: 'How many ways of defining your variables in ES6?',
    options: [
      { text: '3', isCorrect: true },
      { text: '4', isCorrect: false },
      { text: '1', isCorrect: false },
      { text: '6', isCorrect: false },
    ],
  },
  {
    question: 'What are the two ways to handle data in React?',
    options: [
      { text: 'Services & Components', isCorrect: false },
      { text: 'State & Services', isCorrect: false },
      { text: 'State & Component', isCorrect: false },
      { text: 'State & Props', isCorrect: true },
    ],
  },
  {
    question: 'What does ES6 stand for?',
    options: [
      { text: 'ECMAScript 6', isCorrect: true },
      { text: 'ECMA 6', isCorrect: false },
      { text: 'ECMAJavaScript 6', isCorrect: false },
      { text: 'EJavaScript 6', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(setQuiz(quizData));
    dispatch(setCurrentQuestion(0));
    dispatch(setScore(0));
  }, [dispatch]);

  const handleStartQuiz = () => {
    if (name.trim() !== '') {
      dispatch(setUserName(name));
      navigate('/question');
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="card justify-content-center align-items-center" style={{ width: '30rem', height: '20rem', padding: '20px', border: '5px solid', borderRadius: '15px' }}>
        <h1 className="card-title mb-4">Quiz Application</h1>
        <h3>Enter Name</h3>
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleStartQuiz} className="btn btn-primary mt-3">Start Quiz</button>
      </div>
    </div>
  );
};

export default Quiz;