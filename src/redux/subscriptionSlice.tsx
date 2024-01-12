import { createSlice } from "@reduxjs/toolkit";


const subscriptionSlice = createSlice({

    name: 'subscriptionSlice',
    initialState: {
        subscriptionModal: false
    },
    reducers: {
        openSubscriptionModal: (state) => {
            state.subscriptionModal = true
        },
        closeSubscriptionModal: (state) => {
            state.subscriptionModal = false
        }
    }
})

export const { openSubscriptionModal, closeSubscriptionModal } = subscriptionSlice.actions;
export default subscriptionSlice.reducer