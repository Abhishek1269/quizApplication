import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuestion, setScore, addResult } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quiz = useSelector((state) => state.quiz);
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const score = useSelector((state) => state.score);
  const userName = useSelector((state) => state.userName);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch(setScore(score + 1));
    }

    if (currentQuestion < quiz.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    } else {
      const result = {
        userName,
        score: score + (isCorrect ? 1 : 0),
        quiz,
        timestamp: new Date().toLocaleString(),
      };

      dispatch(addResult(result));
      navigate('/result');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="card" style={{ width: '30rem', height: '25rem', padding: '20px', border: '5px solid', borderRadius: '15px' }}>
        <h2>{quiz[currentQuestion].question}</h2>
        <div className='d-block'>
          {quiz[currentQuestion].options.map((option, index) => (
            <button className='btn btn-primary d-block mt-3' style={{ border: '2px solid black' }} key={index} onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;