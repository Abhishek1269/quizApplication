import { SET_QUIZ, SET_CURRENT_QUESTION, SET_SCORE, ADD_RESULT, SET_USER_NAME } from './actions';

const initialState = {
  quiz: [],
  currentQuestion: 0,
  score: 0,
  results: [],
  userName: '',
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ:
      return {
        ...state,
        quiz: action.payload,
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case ADD_RESULT:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;