import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState: {
        admin: false,
        auth: false
    },
    reducers: {
        adminLogIn: (state, action) => {
            if (action.payload) state.auth = true;
        },
        adminLogOut: (state, action) => {
            if (!action.payload) state.auth = false;
        },
        adminPage: (state, action) => {
            switch (action.payload) {
                case 'open':
                    state.admin = true;

                    break;
                case 'close':
                    state.admin = false;
                    break;
            }
        }
    }
});

export const { adminLogIn, adminLogOut, adminPage } = adminSlice.actions;
export default adminSlice.reducer;
