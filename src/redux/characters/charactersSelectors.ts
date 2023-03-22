import { IState } from "./charactersTypes";

export default {
  getCharacters: (state: IState) => state.charactersData,
  getPage: (state: IState) => state.page,
  getFavorites: (state: IState) => state.favorites,
  getGenderCount: (state: IState) => state.genderCount,
};
