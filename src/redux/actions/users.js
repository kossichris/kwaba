import * as type from "../types";

export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  };
}

export function addUser(data) {
  return {
    type: type.ADD_USER_REQUESTED,
    payload: data,
  };
}

export function addRent(data) {
  return {
    type: type.ADD_RENT_REQUESTED,
    payload: data,
  };
}

export function updateRent(data) {
  return {
    type: type.UPDATE_RENT_REQUESTED,
    payload: data,
  };
}
