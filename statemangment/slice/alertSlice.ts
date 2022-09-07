import {AlertState} from "../modal";
import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";


const initialState: AlertState = {
    message: "",
    type: "",
    identifier: "",
}

export let currentAlertIdentifier: string = "";

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
            state.message = action.payload.message;
            state.identifier = action.payload.identifier;
            state.type = action.payload.type;
            currentAlertIdentifier = state.identifier;
        },
        setIdentifier: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.identifier>) => {
            state.identifier = action.payload;
            currentAlertIdentifier = state.identifier;
        },

    },
});

export const { setAlert, setIdentifier } = alertSlice.actions

export const getAlertState = (state: { alert: AlertState }) => state.alert;

export default alertSlice.reducer;
