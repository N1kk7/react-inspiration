import { createSlice } from "@reduxjs/toolkit";



export const selectPlanSlice = createSlice({

    name: 'selectPlanSlice',
    initialState: {
        selectPlanModal: false,
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
        }

    }




})

export const { selectPlan, choicePlan } = selectPlanSlice.actions;
export default selectPlanSlice.reducer;