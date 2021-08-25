import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { GOT_CAT } from '../actions/index';
const initialState = {
  cats: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAT:
      return {
        state,
        cats: [...state.cats, action.payload],
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
