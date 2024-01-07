import { createSlice } from "@reduxjs/toolkit";



const editPageSlice = createSlice({

    name: 'editPageSlice',
    initialState: {
        editPage: false
    },
    reducers: {
        editPage: (state, action) => {
            switch (action.payload) {
                case 'open-edit-page':
                    state.editPage = true
                break
                case 'close-edit-page':
                    state.editPage = false
                break

            }
        }
    }
})

export const { editPage } = editPageSlice.actions;
export default editPageSlice.reducer