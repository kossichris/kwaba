import * as type from "../types";

const initialState = {
  updateRent: {},
  rent: {},
  data: {},
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.ADD_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.user,
      };
    case type.ADD_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.ADD_RENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_RENT_SUCCESS:
      return {
        ...state,
        loading: false,
        rent: action.rent,
      };
    case type.ADD_RENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.UPDATE_RENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_RENT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateRent: action.rent,
      };
    case type.UPDATE_RENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}
