import { ADD_FISH, REMOVE_FISH, SET_FISH } from "../actions/types";

const initialState = {
  fishs: {
  },
  price: 0,
};
const prices = {
    labeo: 250,
    coliasis: 300,
    angel: 200, 
    blue: 400,
    yelow: 270,
    clown:320,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_FISH:
      newState.fishs[action.fish]++;
      newState.price += prices[action.fish];
      break;
    case REMOVE_FISH:
      newState.fishs[action.fish]--;
      newState.price -= prices[action.fish];
      break;
    case SET_FISH:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;