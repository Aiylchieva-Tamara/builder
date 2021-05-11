import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  ingredients: {
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
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;