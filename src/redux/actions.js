export const SET_QUIZ = 'SET_QUIZ';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_SCORE = 'SET_SCORE';
export const ADD_RESULT = 'ADD_RESULT';
export const SET_USER_NAME = 'SET_USER_NAME';

export const setQuiz = (quiz) => ({
  type: SET_QUIZ,
  payload: quiz,
});

export const setCurrentQuestion = (currentQuestion) => ({
  type: SET_CURRENT_QUESTION,
  payload: currentQuestion,
});

export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});

export const addResult = (result) => ({
  type: ADD_RESULT,
  payload: result,
});

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});