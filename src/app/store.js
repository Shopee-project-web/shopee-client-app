import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import LoginReducer from '../features/authSlice/LoginSlice';
import RegisterReducer from '../features/authSlice/RegisterSlice';
import LogoutReducer from '../features/authSlice/LogoutSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: LoginReducer,
    register: RegisterReducer,
    logout: LogoutReducer,
  }, 
});
