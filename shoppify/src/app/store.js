import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import loginReducer from '../features/authSlice/LoginSlice';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    
},
composeEnhancers(applyMiddleware())
);

export default store;