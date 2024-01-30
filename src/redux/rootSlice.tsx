import { createSlice } from '@reduxjs/toolkit';

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

        createPasswordError: false,
        confirmPasswordError: false,

        profilePopup: false,

        emailError: false,
        passwordError: false,

        creatorPage: false,
        brandPage: false,

        deleteModal: false,

        linkCopiedModal: false
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
                    document.body.style.overflow = 'hidden';
                    break;
                case 'close-signIn':
                    state.signIn = false;
                    state.emailError = false;
                    state.enterEmail = '';
                    state.createPassword = '';
                    state.confirmPassword = '';
                    document.body.style.overflow = 'unset';

                    break;
                case 'clear-signIn':
                    state.enterEmail = '';
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
                    document.body.style.overflow = 'hidden';
                    break;
                case 'close-logIn':
                    state.logIn = false;
                    state.enterEmail = '';
                    state.enterPassword = '';
                    state.emailError = false;
                    state.passwordError = false;
                    document.body.style.overflow = 'unset';
                    break;
                case 'confirm-logIn':
                    state.enterEmail = '';
                    state.enterPassword = '';
                    document.body.style.overflow = 'unset';
                    state.logIn = false;
                    break;
                case 'confirm-password-modal':
                    state.createPassword = '';
                    state.confirmPassword = '';
                    state.createPasswordModal = false;

                    break;
                case 'email-error':
                    state.emailError = true;
                    break;
                case 'cancel-email-error':
                    state.emailError = false;

                    break;
                case 'password-error':
                    state.passwordError = true;

                    break;
                case 'cancel-password-error':
                    state.passwordError = false;

                    break;
                case 'open-profile-popup':
                    state.profilePopup = true;

                    break;
                case 'close-profile-popup':
                    state.profilePopup = false;
                    break;
                case 'goToLogInModal':
                    state.signIn = false;
                    state.emailError = false;
                    state.enterEmail = '';
                    state.createPassword = '';
                    state.confirmPassword = '';
                    state.logIn = true;
                    break;
                case 'goToSignInModal':
                    state.logIn = false;
                    state.emailError = false;
                    state.passwordError = false;
                    state.enterEmail = '';
                    state.createPassword = '';
                    state.confirmPassword = '';
                    state.signIn = true;

                    break;
                // case 'create-password-error':

                // break;
                // case 'confirm-password-error':
                // break;
            }
        },
        checkPasswordError: (state, action) => {
            switch (action.payload) {
                case 'create-password-error':
                    state.createPasswordError = true;

                    break;
                case 'confirm-password-error':
                    state.confirmPasswordError = true;

                    break;
                case 'clear-createPass-error':
                    state.createPasswordError = false;

                    break;
                case 'clear-confirmPass-error':
                    state.confirmPasswordError = false;

                    break;

                case 'clear-password-error':
                    state.createPasswordError = false;
                    state.confirmPasswordError = false;
                    state.createPassword = '';
                    state.confirmPassword = '';

                    break;
            }
        },
        enterEmail: (state, action) => {
            state.enterEmail = action.payload;
        },
        enterPassword: (state, action) => {
            state.enterPassword = action.payload;
        },
        createPassword: (state, action) => {
            state.createPassword = action.payload;
        },
        confirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },

        creatorBrand: (state, action) => {
            switch (action.payload) {
                case 'creator':
                    state.creatorPage = true;

                    break;
                case 'brand':
                    state.brandPage = true;
                    break;
            }
        },

        deleteModalState: (state, action) => {
            switch (action.payload) {
                case 'open-delete-modal':
                    state.deleteModal = true;
                    break;
                case 'close-delete-modal':
                    state.deleteModal = false;
                    break;
            }
        },

        copiedLinkState: (state, action) => {
            switch (action.payload) {
                case 'copied-modal-open':
                    state.linkCopiedModal = true;
                    break;
                case 'copied-modal-close':
                    state.linkCopiedModal = false;
                    break;
            }
        }
    }
});

export const { popup, enterEmail, enterPassword, createPassword, confirmPassword, creatorBrand, checkPasswordError, deleteModalState, copiedLinkState } = rootSlice.actions;
export default rootSlice.reducer;
