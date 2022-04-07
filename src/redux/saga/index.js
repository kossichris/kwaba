import { all } from "redux-saga/effects";
import { rentSaga, rentUpdateSaga, userSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([userSaga(), rentSaga(), rentUpdateSaga()]);
}
