import { AppConfigModel } from "@/models/index";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";


const initialState: AppConfigModel = {
    firstRequest: {}
}


export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setBreadcrumb: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.breadcrumb>) => {
            state.breadcrumb = action.payload;
        },
        setCurrentPage: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.currentPage>) => {
            state.currentPage = action.payload;
        },
        setFirstRequest: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.firstRequest>) => {
            state.firstRequest = action.payload;
        },
        setUser: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.firstRequest.user>) => {
            state.firstRequest.user = action.payload;
        },
        setVerificationPop: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.showVerificationPop>) => {
            state.showVerificationPop = action.payload;
        },
        setSelectedProducts: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.selectedProducts>) => {
            state.selectedProducts = action.payload;
        },
        setSelectedAddress: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.selectedAddress>) => {
            state.selectedAddress = action.payload;
        },
        setSelectedCard: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.selectedCard>) => {
            state.selectedCard = action.payload;
        },
    },
});

export const { setBreadcrumb, setCurrentPage, setFirstRequest, setUser, setVerificationPop, setSelectedProducts, setSelectedCard, setSelectedAddress } = globalSlice.actions

export const getGlobalState = (state: { global: AppConfigModel }) => state.global;

export default globalSlice.reducer;
