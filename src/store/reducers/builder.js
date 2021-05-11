
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  ingredients: {
  },
  price: 0,
};
const prices = {
  coliasis: 150,
    labeo: 400,
    blue: 330,
    angel: 200,
    yelow: 500,
    clown: 350,
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
      newState.ingredients = action.data.ingredients;
      newState.price = action.data.price;
      break;
  
    default:
      break;
  }

  return newState;
}



export default builder;

