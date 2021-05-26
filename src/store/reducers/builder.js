import { ADD_FISH, REMOVE_FISH, SET_FISHES } from "../actions/types";

const initialState = {
  fishes: {
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
      newState.fishes[action.fish]++;
      newState.price += prices[action.fish];
      break;
    case REMOVE_FISH:
      newState.fishes[action.fish]--;
      newState.price -= prices[action.fish];
      break;
    case SET_FISHES:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;