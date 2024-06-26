import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Result = () => {
  const score = useSelector((state) => state.score);
  const quiz = useSelector((state) => state.quiz);
  const results = useSelector((state) => state.results);
  const userName = useSelector((state) => state.userName);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="card justify-content-center align-items-center" style={{ width: '30rem', padding: '20px', border: '5px solid', borderRadius: '15px' }}>
        <h1><i class="fa-solid fa-trophy"></i>Quiz Results</h1>
        <p>
          {userName}, you scored {score} out of {quiz.length}
        </p>
        <Link className='btn btn-primary' to="/">Go to Home</Link>
        <div className="mt-4">
          <h3>Previous Results:</h3>
          <ul className="list-group">
            {results.map((result, index) => (
              <li key={index} className="list-group-item">
                {result.userName} - Score: {result.score} / {result.quiz.length}, Completed: {result.timestamp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;