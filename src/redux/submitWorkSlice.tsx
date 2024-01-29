import { createSlice } from '@reduxjs/toolkit';

const submitWorkSlice = createSlice({
    name: 'submitWorkSlice',
    initialState: {
        submitPage: false,
        editPage: false
    },
    reducers: {
        submitPage: (state, action) => {
            switch (action.payload) {
                case 'open-submit-page':
                    state.submitPage = true;
                    break;
                case 'close-submit-page':
                    state.submitPage = false;
                    break;
            }
        },
        editPage: (state, action) => {
            switch (action.payload) {
                case 'open-edit-page':
                    state.submitPage = true;
                    break;
                case 'close-edit-page':
                    state.submitPage = false;
                    break;
            }
        }
    }
});

export const { submitPage, editPage } = submitWorkSlice.actions;
export default submitWorkSlice.reducer;
