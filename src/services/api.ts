import axios from "axios";
import { IData } from "../redux/characters/charactersTypes";
const BASE_URL = "https://swapi.dev/api";

export const getCharactersApi = () => async () => {
  try {
    const res = await axios.get<IData>(`${BASE_URL}/people/?page=${1}`);
    console.log("res.data", res.data);

    return res.data;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
