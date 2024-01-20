import { combineReducers, configureStore } from '@reduxjs/toolkit';
import alert from "./slice/alertSlice";
import global from "./slice/globalSlice";
import filter from "./slice/filterSlice";

const combineReducer = combineReducers({
    alert,
    global,
    filter,
});

export const store = configureStore({
    reducer: combineReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch