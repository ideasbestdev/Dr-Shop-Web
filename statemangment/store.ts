import {combineReducers, configureStore} from '@reduxjs/toolkit';
import user from './slice/userSlice';
import alert from "./slice/alertSlice";

const combineReducer = combineReducers({
    user,
    alert,
});

export const store = configureStore({
    reducer: combineReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch