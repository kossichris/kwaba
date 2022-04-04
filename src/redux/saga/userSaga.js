import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function signupUser(data) {
  console.log(data);
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* addUser(action) {
  try {
    const user = yield call(signupUser, action.payload);
    yield put({ type: "ADD_USER_SUCCESS", user: user.data });
  } catch (e) {
    yield put({ type: "ADD_USER_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeEvery("ADD_USER_REQUESTED", addUser);
}

export default userSaga;
