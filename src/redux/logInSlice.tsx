import { createSlice } from "@reduxjs/toolkit";


export const logInSlice = createSlice({
    name: 'logInSLice',
    initialState: {
        guestStatus: true,
        userPro: false,
        userFree: false,
     


    },
    reducers: {
        userLogIn: (state, action) => {
            switch (action.payload) {
                case 'guest':
                    state.guestStatus = true;
                    state.userPro = false;
                    state.userFree = false;
                break;
                case 'userPro':
                    state.guestStatus = false;
                    state.userPro = true;
                    state.userFree = false;
                break;
                case 'userFree':
                    
                    state.guestStatus = false;
                    state.userPro = false;
                    state.userFree = true;
                break;
            }
        }
    }
})

export const { userLogIn } = logInSlice.actions;
export default logInSlice.reducer;