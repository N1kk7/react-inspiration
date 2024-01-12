import { createSlice } from "@reduxjs/toolkit";


const subscriptionSlice = createSlice({

    name: 'subscriptionSlice',
    initialState: {
        subscriptionPage: false,
        addBillingMethod: false,
        fillCardInfo: false,
        fillCardError: false,
        cardNumber: '',
        lastCardDigit: '',
        
    },
    reducers: {
        subscriptionPage: (state, action) => {
            // state.subscriptionModal = true

            switch (action.payload) {
                case 'open-subscription':
                    state.subscriptionPage = true;
                break;
                case 'close-subscription':
                    state.subscriptionPage = false;
                break;
            }
        },
        cardOptions: (state, action) => {
            
        },
        enterCardNumber: (state, action) => {

            const regExp = /[0-9]{4}/
            const numbers = /[0-9]/
            state.cardNumber = action.payload.toString()
            if(  !numbers.test(action.payload) || state.cardNumber.length > 19){
                state.cardNumber = action.payload.slice(0, action.payload.length - 1)
                return
            }

            
            // if( action.payload === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
            //     // input.value = input.value.slice(0, input.value.length - 1)
            //     return
            // }
            if( regExp.test(state.cardNumber.slice(-4)) && state.cardNumber.length < 19 && numbers){
                state.cardNumber += " "
            }
            // if (action.payload === "delete-one"){
            //     state.cardNumber = state.cardNumber.slice(0, 1)


            // }

            if(state.cardNumber.length >= 19){

                state.lastCardDigit = state.cardNumber.slice(-4)
                state.addBillingMethod = true;
                state.fillCardInfo = true;
                
            }

            

           
            
        },
        setBillingError: (state, action) => {
            switch (action.payload) {
                case 'set-enterCard-error':
                    state.fillCardError = true;
                break;
                case 'cancel-enterCard-error':
                    state.fillCardError = false;
                break;
                

            }
        }
    }
})

export const { subscriptionPage, cardOptions, enterCardNumber, setBillingError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer