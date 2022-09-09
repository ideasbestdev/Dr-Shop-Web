import { UserStateModel } from '@/models/index';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserStateModel = {
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

export const getUserState = (state: { user: UserStateModel }) => state.user;

export default userSlice.reducer;
