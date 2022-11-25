import { UserStateModel } from '@/models/index';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserStateModel = {
    currentuser: {},
    isAuthenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.currentuser>) => {
            state.currentuser = action.payload;
        },
        setAuthenticated: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.isAuthenticated>) => {
            state.isAuthenticated = action.payload;
        },
        setAuthUser: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.currentuser = action.payload.currentuser;
        },
    },
});

export const { setUser, setAuthenticated, setAuthUser } = userSlice.actions

export const getUserState = (state: { user: UserStateModel }) => state.user;

export default userSlice.reducer;
