// actions.js
import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from '../actionTypes';
const url = `https://blog-app-c6bi.onrender.com`

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/api/register`, userData);

    if (response.status === 200) {
      dispatch({ type: REGISTER_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE });
    console.error('Registration error:', error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/api/login`, userData);

    if (response.status === 200) {
      localStorage.setItem('isAuth', true);
      localStorage.setItem('token', response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
    console.error('Login error:', error);
  }
};
