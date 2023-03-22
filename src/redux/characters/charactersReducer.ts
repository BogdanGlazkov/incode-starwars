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

const initialGenderCount = {
  female: 0,
  male: 0,
  others: 0,
};

const initialState = {
  charactersData: null,
  page: { current: 1, total: 1 },
  favorites: [],
  genderCount: initialGenderCount,
  error: null,
};

export const charactersReducer = (state = initialState, { type, payload }) => {
  const newCount = { ...state.genderCount };
  switch (type) {
    case GET_CHARACTERS:
      return { ...state };
    case SET_CHARACTERS:
      return { ...state, error: null, charactersData: payload };
    case SET_PAGE:
      return { ...state, page: payload };
    case ADD_FAVORITE:
      if (payload.gender === "female") {
        newCount.female += 1;
      } else if (payload.gender === "male") {
        newCount.male += 1;
      } else {
        newCount.others += 1;
      }
      return {
        ...state,
        favorites: [...state.favorites, payload],
        genderCount: { ...newCount },
      };
    case REMOVE_FAVORITE:
      if (payload.gender === "female") {
        newCount.female -= 1;
      } else if (payload.gender === "male") {
        newCount.male -= 1;
      } else {
        newCount.others -= 1;
      }
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.name !== payload.name),
        genderCount: { ...newCount },
      };
    case CLEAR_FAVORITES:
      return { ...state, favorites: [], genderCount: initialGenderCount };
    case SET_ERROR:
      return { ...state, error: payload };
    case SKIP_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
