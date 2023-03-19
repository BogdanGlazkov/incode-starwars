import {
  SET_QUERY,
  GET_CHARACTERS,
  SET_CHARACTERS,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";
import { IData } from "./charactersTypes";

export function setQuery(city: string) {
  return {
    type: SET_QUERY,
    payload: city,
  };
}

export function getCharacters() {
  return {
    type: GET_CHARACTERS,
  };
}

export function setCharacters(charactersData: IData) {
  return {
    type: SET_CHARACTERS,
    payload: charactersData,
  };
}

export function setError(error: string) {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  };
}

export function skipError() {
  return {
    type: SKIP_ERROR,
  };
}

export type CharactersActions =
  | typeof setQuery
  | typeof getCharacters
  | typeof setError;
