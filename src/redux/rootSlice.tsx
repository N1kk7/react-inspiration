import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: 'rootSLice',
    initialState: {
        filterPopup: false,
        signIn: false,
        logIn: false,
        stateDefaultBtn: false,
        enterEmail: '',
        enterPassword: '',
        createPasswordModal: false,
        welcomeModal: false,
        getInfoModal: false,
        selectPlanModal: false,
        createPassword: '',
        confirmPassword: '',

        profilePopup: false,

        emailError: false,
        passwordError: false,

        creatorPage: false,
        brandPage: false,


    },
    reducers: {

        popup: (state, action) => {

            switch (action.payload) {
                case 'open-filter':
                    state.filterPopup = true;
                break;
                case 'close-filter':
                    state.filterPopup = false;
                break;
                case 'open-signIn':
                    state.signIn = true;
                    document.body.style.overflow ='hidden';
                break;
                case 'close-signIn':
                    state.signIn = false;
                    state.enterEmail = '';
                    state.createPassword = '';
                    state.confirmPassword = '';
                    document.body.style.overflow ='unset';

                break;
                case 'confirm-signIn':
                    state.enterEmail = '';
                    state.signIn = false;
                    state.createPasswordModal = true;

                break;
                case 'back-to-signIn':
                    state.createPasswordModal = false;
                    state.signIn = true;

                break;
                case 'open-logIn':

                    state.logIn = true;
                    document.body.style.overflow ='hidden';
                break;
                case 'close-logIn':
                    
                    state.logIn = false;
                    state.enterEmail = '';
                    state.enterPassword = '';
                    document.body.style.overflow ='unset';
                break;
                case 'confirm-logIn':

                    state.enterEmail = '';
                    state.enterPassword = '';
                    document.body.style.overflow ='unset';
                    state.logIn = false;
                break;
                case 'confirm-password-modal':
                    state.createPassword = '';
                    state.confirmPassword = '';
                    state.createPasswordModal = false;

                break;
                case 'email-error':
                    state.emailError = true
                break;
                case 'cancel-email-error':
                    state.emailError = false

                break;
                case 'password-error':
                    
                    state.passwordError = true
                    
                break;
                case 'cancel-password-error':
                    state.passwordError = false

                break;
                case 'open-profile-popup':
                    state.profilePopup = true

                break;
                case 'close-profile-popup':
                    state.profilePopup = false

                break;





            }

            
        },
        enterEmail: (state, action) => {
            state.enterEmail = action.payload;
        },
        enterPassword: (state, action) => {
            state.enterPassword = action.payload
        },
        createPassword: (state, action) => {
            state.createPassword = action.payload
            
        },
        confirmPassword: (state, action) => {
            state.confirmPassword = action.payload

        },

        creatorBrand: (state, action) => {
            switch (action.payload) {
                case 'creator':
                    state.creatorPage = true;
                    console.log(state.creatorPage, 'creator page');
                    
                break;
                case 'brand':
                    state.brandPage = true;
                    console.log(state.brandPage, 'brand page')
                break
            }
            
        }







       
    }
})

export const { popup, enterEmail, enterPassword, createPassword, confirmPassword, creatorBrand } = rootSlice.actions;
export default rootSlice.reducer;