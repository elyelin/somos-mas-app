import { createSlice } from '@reduxjs/toolkit';
import { login } from '../services/authService'
import axios from 'axios'

// AUTH STATE
const authState = {
  token: '',
  error: '',
  status: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.status = 'success'
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
      state.status = 'error'
    },
  },
});

export const { loginSuccess, loginFailed } = authSlice.actions;

export const selectAuth = state => state.auth.status;

export const authLog = values => dispatch => {
  axios.post(`${process.env.REACT_APP_API_LOGIN}`, values)
    .then(res => {
      console.log(res)
      // const token = res.data.token
      // localStorage.setItem('token', token)
      // return 
      if (res.data.token){
        dispatch(loginSuccess(values));
      }
      if (res.data.error){
        dispatch(loginFailed(values));
      }
    })
    .catch(err => {
      console.log(err)
      return true
    })


};

export default authSlice.reducer;
