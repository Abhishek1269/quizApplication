import { createStore } from 'redux';
import quizReducer from './reducer';

const store = createStore(quizReducer);

export default store;