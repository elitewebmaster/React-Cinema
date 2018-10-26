export const SET_MOVIES = 'SET_MOVIES';
export const SET_TOGGLE = 'SET_TOGGLE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function setMovies(movies){
  return {
    type: SET_MOVIES,
    movies
  }
}

export function setToggle(active = null, action = null){
  return {
    type: SET_TOGGLE,
    active,
    action
  }
}