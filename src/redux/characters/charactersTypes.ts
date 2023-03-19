import { GET_CHARACTERS, SET_ERROR } from "../types";

export interface IData {
  results: any[];
}

export interface IString {
  name: string;
}

export interface ICharacter {
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string[];
}

export interface IState {
  charactersData: IData;
  query: string;
  error: string | null;
}

export interface IGetCharacters {
  type: typeof GET_CHARACTERS;
  payload: IData;
}

export interface IError {
  type: typeof SET_ERROR;
  error: string;
}
