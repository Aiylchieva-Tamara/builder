import axios from "../../axios";
import { ADD_FISH, REMOVE_FISH, SET_FISHES } from "./types";

export const add = (fish) => ({
  type: ADD_FISH,
  fish: fish
});

export const remove = (fish) => ({
  type: REMOVE_FISH,
  fish: fish
});

export const set = (data) => ({
  type: SET_FISHES,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}