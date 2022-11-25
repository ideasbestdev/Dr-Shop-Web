import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './slice/userSlice';
import alert from "./slice/alertSlice";
import global from "./slice/globalSlice";

const combineReducer = combineReducers({
    user,
    alert,
    global,
});

export const store = configureStore({
    reducer: combineReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch