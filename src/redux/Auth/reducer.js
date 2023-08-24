import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from "../actionTypes";

const initialState = {
  registerSuccess: false,
  registerFailure: false,
  loginSuccess: false,
  loginFailure: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, registerSuccess: true };
    case REGISTER_FAILURE:
      return { ...state, registerFailure: true };
    case LOGIN_SUCCESS:
      return { ...state, loginSuccess: true, loginFailure: false };
    case LOGIN_FAILURE:
      return { ...state, loginSuccess: false, loginFailure: true };
    default:
      return state;
  }
};

export default authReducer;
