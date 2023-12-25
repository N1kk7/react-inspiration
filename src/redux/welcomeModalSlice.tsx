import { createSlice } from "@reduxjs/toolkit";



export const welcomeModalSlice = createSlice ({
    name: 'welcomeModalSlice',
    initialState: {
        welcomeModal: false,
        firstName: '',
        lastName: '',
        chooseTypeModal: false,
        inputPlaceholder: 'Choose type',
        disableBtn: false,
        
        // chooseType: '',


    },
    reducers: {
        welcomePopup: (state, action) => {

            
            switch (action.payload) {
                case 'open-welcome-popup' :
                    state.welcomeModal = true;
                    document.body.style.overflow ='hidden';
                break;
                case 'confirm-welcome-popup':
                    state.welcomeModal = false;
                    document.body.style.overflow ='unset';
                break;
                case 'close-welcome-popup':
                    state.welcomeModal = false;
                    document.body.style.overflow ='unset';


                break;
                case 'goBack':
                break
                case 'open-chooseType':
                    state.chooseTypeModal = true;
                break
                case 'close-chooseType':
                    state.chooseTypeModal = false;
                break
            }

        },
        getFirstName: (state, action) => {
            state.firstName = action.payload

        },
        getLastName: (state, action) => {
            state.lastName = action.payload

        },
        setInputPlaceholder: (state, action) => {
            state.inputPlaceholder = action.payload
            if (state.inputPlaceholder !== 'Choose type') {
                state.disableBtn = true;
            } else {
                state.disableBtn = false;
            }
        }

    }

})

export const { welcomePopup, getFirstName, getLastName, setInputPlaceholder  } = welcomeModalSlice.actions;
export default welcomeModalSlice.reducer;


