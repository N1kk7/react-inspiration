import { createSlice } from "@reduxjs/toolkit";



export const selectPlanSlice = createSlice({

    name: 'selectPlanSlice',
    initialState: {
        selectPlanModal: false,
        paymentDetailsPage: false,
        getUnlimAccessModal: false,
        proPlan: false,
        freePlan: false,

    },
    reducers: {
        selectPlan: (state, action) => {

            switch (action.payload) {
                case 'open-select-plan':
                    state.selectPlanModal = true;
                    document.body.style.overflow ='hidden';


                break;
                case 'close-select-plan':
                    state.selectPlanModal = false;
                    document.body.style.overflow = 'unset';



                break;
                case 'go-back':
                    state.selectPlanModal = false;



                break;


            }
        },
        choicePlan: (state, action) => {

            if (action.payload === 'pro') {
                state.proPlan = true;
                state.freePlan = false;
                state.selectPlanModal = false;
            } else {
                state.freePlan = true;
                state.proPlan = false;
                state.selectPlanModal = false;
            }
        },
        paymentDetails: (state, action) => {
            switch (action.payload) {
                case 'open-payment-details':
                    state.paymentDetailsPage = true;
                    console.log('open payment details');
                    
                break;
                case 'close-payment-details':
                    state.paymentDetailsPage = false;
                    console.log('close payment details');
                break;
                // case 'go-to-select-plan':

            }
            
        },
        getUnlimAccess: (state, action) => {
            switch (action.payload) {
                case 'open-unlim-access':
                    state.getUnlimAccessModal = true;
                break;
                case 'close-unlim-access':
                    state.getUnlimAccessModal = false;
                break;
            }
        },

    }




})

export const { selectPlan, choicePlan, paymentDetails, getUnlimAccess } = selectPlanSlice.actions;
export default selectPlanSlice.reducer;