import { AlertStateModel } from "@/models/index";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";


const initialState: AlertStateModel = {
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
        throwMessage: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
            if (state.identifier == currentAlertIdentifier) {
                state.message = action.payload.message;
                state.identifier = action.payload.identifier;
                state.type = action.payload.type;
            }
        },
    },
});

export const { setAlert, setIdentifier, throwMessage } = alertSlice.actions

export const getAlertState = (state: { alert: AlertStateModel }) => state.alert;

export default alertSlice.reducer;
