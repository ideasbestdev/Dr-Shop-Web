import { GlobalStateModel } from "@/models/index";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";


const initialState: GlobalStateModel = {
    breadcrumb: [],
}


export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setBreadcrumb: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.breadcrumb>) => {
            state.breadcrumb = action.payload;
        },
    },
});

export const { setBreadcrumb } = globalSlice.actions

export const getGlobalState = (state: { global: GlobalStateModel }) => state.global;

export default globalSlice.reducer;
