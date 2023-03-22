import {
  GET_CHARACTERS,
  SET_CHARACTERS,
  SET_PAGE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";
import { IData, IPage, IFavorite } from "./charactersTypes";

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

export function setPage(page: IPage) {
  return {
    type: SET_PAGE,
    payload: page,
  };
}

export function addFavorite(favorite: IFavorite) {
  return {
    type: ADD_FAVORITE,
    payload: favorite,
  };
}

export function removeFavorite(favorite: IFavorite) {
  return {
    type: REMOVE_FAVORITE,
    payload: favorite,
  };
}

export function clearFavorites() {
  return {
    type: CLEAR_FAVORITES,
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
  // | typeof setQuery
  typeof getCharacters | typeof setCharacters;
