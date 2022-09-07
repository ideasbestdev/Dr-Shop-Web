import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from "../modal";

const initialState: UserState = {
    currentuser: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.currentuser>) => {
            state.currentuser = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions

export const getUserState = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
