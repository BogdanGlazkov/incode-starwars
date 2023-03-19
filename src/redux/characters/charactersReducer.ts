import {
  SET_QUERY,
  GET_CHARACTERS,
  SET_CHARACTERS,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";

const initialState = {
  charactersData: null,
  query: "",
  error: null,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case GET_CHARACTERS:
      return { ...state };
    case SET_CHARACTERS:
      return { ...state, error: null, charactersData: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SKIP_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
