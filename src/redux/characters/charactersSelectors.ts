import { IState } from "./charactersTypes";

export default {
  getCharacters: (state: IState) => state.charactersData,
  getFavorites: (state: IState) => state.favorites,
  getGenderCount: (state: IState) => state.genderCount,
};
