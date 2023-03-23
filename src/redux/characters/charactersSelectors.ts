import { IState } from "./charactersTypes";

export default {
  getCharacters: (state: IState) => state.characters.charactersData,
  getPage: (state: IState) => state.characters.page,
  getFavorites: (state: IState) => state.characters.favorites,
  getGenderCount: (state: IState) => state.characters.genderCount,
};
