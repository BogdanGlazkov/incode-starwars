import { Alert } from "react-native";
import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import { SET_PAGE, CHANGE_PAGE } from "../types";
import {
  setCharacters,
  setPage,
  setError,
} from "../characters/charactersActions";
import { getCharactersApiByPage } from "../../services/api";
import state from "../characters/charactersSelectors";

export function* workerGetCurrent() {
  try {
    const page = yield select(state.getPage);
    const data = yield call(getCharactersApiByPage(page.current || 1));

    if (!data) {
      Alert.alert("Something went wrong. Try again, please");
      yield put(setError(data.message));
      return;
    }
    if (data) {
      const total = Math.ceil(data.count / 10);
      const current = data.next ? data.next.split("page=")[1] - 1 : total;
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
  yield all([
    takeLeading(SET_PAGE, workerGetCurrent),
    takeLatest(CHANGE_PAGE, workerGetCurrent),
  ]);
}

export default function* rootSaga() {
  yield watcherSaga();
}
