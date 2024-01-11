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
        firstNameError: false,
        lastNameError: false,
        chooseTypeError: false,
        
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
        },
        setError: (state, action) => {
            
            switch (action.payload) {
                case 'set-firstName-error':
                    state.firstNameError = true;
                break
                case 'reset-firstName-error':
                    state.firstNameError = false;
                break
                case 'set-lastName-error':
                    state.lastNameError = true;
                break
                case 'reset-lastName-error':
                    state.lastNameError = false;
                break
                case 'set-chooseType-error':
                    state.chooseTypeError = true;
                break
                case 'reset-chooseType-error':
                    state.chooseTypeError = false;
                break
                case 'reset-all-errors':
                    state.firstNameError = false;
                    state.lastNameError = false;
                    state.chooseTypeError = false;
                    state.firstName = '';
                    state.lastName = '';
                    state.inputPlaceholder = 'Choose type';
                    state.disableBtn = false;


                break
            }
        }

    }

})

export const { welcomePopup, getFirstName, getLastName, setInputPlaceholder, setError  } = welcomeModalSlice.actions;
export default welcomeModalSlice.reducer;


