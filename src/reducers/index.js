import { combineReducers } from 'redux';
import { SET_MOVIES, SET_TOGGLE } from '../actions';


function list(state = [], action){
  switch(action.type){
    case SET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}


function toggle(state = [], action){
  switch(action.type){
    case SET_TOGGLE:
      return { active: action.active, action: action.action };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ list, toggle });

export default rootReducer;