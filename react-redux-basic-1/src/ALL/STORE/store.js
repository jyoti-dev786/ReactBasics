import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../REDUCERS/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
