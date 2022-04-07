import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
const localUrl = `http://localhost:3300/api/v1/`;

const usr = JSON.parse(localStorage.getItem("userKwabaToken"));
const config = {
  headers: { Authorization: `Bearer ${usr.token}` },
};

async function signupUser(data) {
  const reponse = await axios.post(localUrl + "users/signup", data);
  return reponse.data;
}

async function addRent(data) {
  console.log(data);
  const reponse = await axios.post(localUrl + "rents", data, config);
  return reponse.data;
}

async function updateRent(data) {
  let id = data.id;
  delete data.id;
  const reponse = await axios.patch(localUrl + "rents/" + id, data, config);
  return reponse.data;
}

function* addUser(action) {
  try {
    const user = yield call(signupUser, action.payload);
    yield put({ type: "ADD_USER_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "ADD_USER_FAILED", message: e.message });
  }
}

function* addRentSaga(action) {
  console.log(action);
  try {
    const rent = yield call(addRent, action.payload);
    yield put({ type: "ADD_RENT_SUCCESS", rent: rent });
  } catch (e) {
    yield put({ type: "ADD_RENT_FAILED", message: e.message });
  }
}

function* updateRentSaga(action) {
  try {
    const rent = yield call(updateRent, action.payload);
    yield put({ type: "UPDATE_RENT_SUCCESS", rent: rent });
  } catch (e) {
    yield put({ type: "UPDATE_RENT_FAILED", message: e.message });
  }
}

export function* userSaga() {
  yield takeEvery("ADD_USER_REQUESTED", addUser);
}

export function* rentSaga() {
  yield takeEvery("ADD_RENT_REQUESTED", addRentSaga);
}

export function* rentUpdateSaga() {
  yield takeEvery("UPDATE_RENT_REQUESTED", updateRentSaga);
}
