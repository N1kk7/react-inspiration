import { createSlice } from "@reduxjs/toolkit";



export const adminSlice = createSlice({

    name: 'adminSlice',
    initialState: {
        auth: true
    },
    reducers: {
        adminLogIn: (state, action) => {
            if (action.payload) state.auth = true;
        },
        adminLogOut: (state, action) => {
            if (!action.payload) state.auth = false;
        },
    }
})

export const { adminLogIn, adminLogOut } = adminSlice.actions;
export default adminSlice.reducer;
