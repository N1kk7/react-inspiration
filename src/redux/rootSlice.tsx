import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: 'rootSLice',
    initialState: {
        count: 0,
        filterPopup: false,
    },
    reducers: {

        popup: (state, action) => {

            switch (action.payload) {
                case 'toggle-filter':
                    state.filterPopup = !state.filterPopup;
                break;
                // case 'close-filter':
                //     state.filterPopup = false;
                // break;
            }

            
        },





       
    }
})

export const { popup } = rootSlice.actions;
export default rootSlice.reducer;