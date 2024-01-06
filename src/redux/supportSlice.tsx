import { createSlice } from "@reduxjs/toolkit";


const supportSlice = createSlice({

    name: 'supportSlice',
    initialState: {
        supportModal: false,
        sendRequestModal: false,
        typeRequestModal: false,
        chooseTypeRequest: false,
        typeRequest: 'Choose the type',
    },
    reducers: {

        openSupportModal: (state) => {
            state.supportModal = true
            console.log('open support');
            
        },
        closeSupportModal: (state) => {
            state.supportModal = false
        },
        sendRequest: (state, action) => {
            // state.supportModal = false;
            // state.sendRequestModal = true
            // setTimeout(() => {
            // }, 3000)
            switch (action.payload) {
                case 'show-success-request':
                    state.supportModal = false;
                    state.sendRequestModal = true
                break;
                case 'hide-success-request':
                    state.sendRequestModal = false
                break;


            }
        },
        openTypeRequest: (state) => {
            state.typeRequestModal = true
        },
        closeTypeRequest: (state, action) => {
            state.typeRequestModal = false
            switch (action.payload) {
                case 'feature-request':
                    state.typeRequest = 'Feature request';
                break;
                case 'bug-report':
                    state.typeRequest = 'Bug report';
                break;
                case 'other':
                    state.typeRequest = 'Other';
                break;
            }
        }

    }
})

export const { openSupportModal, closeSupportModal, sendRequest, openTypeRequest, closeTypeRequest } = supportSlice.actions
export default supportSlice.reducer