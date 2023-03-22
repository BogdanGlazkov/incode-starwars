import { Alert } from "react-native";
import { all, call, put, takeLeading } from "redux-saga/effects";
import { GET_CHARACTERS } from "../types";
import {
  setCharacters,
  setPage,
  setError,
} from "../characters/charactersActions";
import { getCharactersApi } from "../../services/api";

export function* workerGetCurrent() {
  try {
    const data = yield call(getCharactersApi());

    if (!data) {
      Alert.alert("Something went wrong. Try again, please");
      yield put(setError(data.message));
      return;
    }
    if (data) {
      const total = Math.ceil(data.count / 10);
      const current = data.next ? data.next.split("page=")[1] - 1 : total;
      console.log(22, current, total);
      yield put(setCharacters(data.results));
      yield put(setPage({ current, total }));
    }
  } catch (error) {
    Alert.alert("Something went wrong. Try again, please");
    yield put(setError(error.message));
  }
}

export function* watcherSaga() {
  console.log("Saga connected");
  yield all([takeLeading(GET_CHARACTERS, workerGetCurrent)]);
}

export default function* rootSaga() {
  yield watcherSaga();
}
