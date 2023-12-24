import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: 'rootSLice',
    initialState: {
        count: 0,
        filterPopup: false,
        signIn: false,
        logIn: false
    },
    reducers: {

        popup: (state, action) => {

            switch (action.payload) {
                case 'toggle-filter':
                    state.filterPopup = !state.filterPopup;
                break;
                case 'open-signIn':
                    state.signIn = true;
                    document.body.style.overflow ='hidden';
                break;
                case 'close-signIn':
                    state.signIn = false;
                    document.body.style.overflow ='unset';

                break;
                case 'open-logIn':

                    state.logIn = true;
                    document.body.style.overflow ='hidden';
                break;
                case 'close-logIn':
                    
                    state.logIn = false;
                    document.body.style.overflow ='unset';

                break;
            }

            
        },
        joinAdinspiration: (state, action) => {
            
        },





       
    }
})

export const { popup, joinAdinspiration } = rootSlice.actions;
export default rootSlice.reducer;