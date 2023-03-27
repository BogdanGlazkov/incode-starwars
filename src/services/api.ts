import axios from "axios";
import { IData, IString } from "../redux/characters/charactersTypes";
const BASE_URL = "https://swapi.dev/api";

const getHomeworld = async (homeworld: string) => {
  try {
    const { data } = await axios.get<IString>(`${homeworld}`);
    return data.name;
  } catch (error) {
    console.log("error: ", error.message);
  }
};

const getSpecies = async (species: string) => {
  try {
    const { data } = await axios.get<IString>(`${species}`);
    return data.name;
  } catch (error) {
    console.log("error: ", error.message);
  }
};

export const getCharactersApi = () => async () => {
  try {
    const { data } = await axios.get<IData>(`${BASE_URL}/people`);
    const characters = await Promise.all(
      data.results.map(async (el) => {
        let homeworld = !el.homeworld ? null : await getHomeworld(el.homeworld);
        let species = !el.species.length ? null : await getSpecies(el.species);
        const character = await { ...el, homeworld, species };
        return character;
      })
    );
    return { ...data, results: characters };
  } catch (error) {
    console.log("error: ", error.message);
  }
};

export const getCharactersApiByPage = (page: number) => async () => {
  try {
    const { data } = await axios.get<IData>(`${BASE_URL}/people/?page=${page}`);
    const characters = await Promise.all(
      data.results.map(async (el) => {
        let homeworld = !el.homeworld ? null : await getHomeworld(el.homeworld);
        let species = !el.species.length ? null : await getSpecies(el.species);
        const character = await { ...el, homeworld, species };
        return character;
      })
    );
    return { ...data, results: characters };
  } catch (error) {
    console.log("error: ", error.message);
  }
};
