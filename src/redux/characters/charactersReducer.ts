import {
  GET_CHARACTERS,
  SET_CHARACTERS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";

const initialGenderCount = {
  female: 0,
  male: 0,
  others: 0,
};

const initialState = {
  charactersData: null,
  favorites: [],
  genderCount: initialGenderCount,
  error: null,
};

export const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return { ...state };
    case SET_CHARACTERS:
      return { ...state, error: null, charactersData: payload };
    case ADD_FAVORITE:
      // payload.gender === "female"
      //   ? (state.genderCount.female += 1)
      //   : payload.gender === "male"
      //   ? (state.genderCount.male += 1)
      //   : (state.genderCount.others += 1);
      return {
        ...state,
        favorites: [...state.favorites, payload],
        genderCount: { ...state.genderCount },
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.name !== payload.name),
        genderCount:
          payload.gender === "female"
            ? (state.genderCount.female -= 1)
            : payload.gender === "male"
            ? (state.genderCount.male -= 1)
            : (state.genderCount.others -= 1),
      };
    case CLEAR_FAVORITES:
      return { ...state, favorites: [] };
    case SET_ERROR:
      return { ...state, error: payload };
    case SKIP_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
