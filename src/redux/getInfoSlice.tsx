import { createSlice } from "@reduxjs/toolkit";



export const getInfoSlice = createSlice({

    name: 'getInfoSlice',
    initialState: {
        getInfoModal: false,
        answerMessage: '',
        answer: '',
        disableGetInfoBtn: false,
        answerMessageError: false,
        answerError: false,


    },
    reducers: {
        getInfo: (state, action) => {
            switch (action.payload) {
                case 'open-getInfo':
                    state.getInfoModal = true;
                    // document.body.style.overflow = 'fixed';
                    document.body.style.overflow ='hidden';


                break;
                case 'close-getInfo':
                    state.getInfoModal = false;
                    document.body.style.overflow = 'unset';



                break;
                case 'go-back':
                    state.getInfoModal = false;



                break;


            }

        },
        setMessage: (state, action) => {

            state.answerMessage = action.payload
            if (state.answerMessage !== '' && state.answer !== '') {
                state.disableGetInfoBtn = true;
            } else {
                state.disableGetInfoBtn = false;
            }
            
        },
        setAnswer: (state, action) => {

            state.answer = action.payload
            if (state.answerMessage !== '' && state.answer !== '') {
                state.disableGetInfoBtn = true;
            } else {
                state.disableGetInfoBtn = false;
            }

        },
        setInfoSliceError: (state, action) => {


            switch (action.payload) {
                case 'set-message-error':
                    state.answerMessageError = true;
                    
                break;
                case 'reset-message-error':
                    state.answerMessageError = false;
                break;
                case 'set-answer-error':
                    
                    state.answerError = true;
                break;
                case 'reset-answer-error':
                    state.answerError = false;
                break;
                case 'reset-all-errors':
                    
                    state.answerMessageError = false;
                    state.disableGetInfoBtn = false;

                    state.answerError = false;
                    state.answerMessage = '';
                    state.answer = '';

                break;

            }

            
        }

       

    }




})

export const { getInfo, setAnswer, setMessage, setInfoSliceError } = getInfoSlice.actions;
export default getInfoSlice.reducer;


