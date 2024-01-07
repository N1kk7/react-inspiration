import { createSlice } from "@reduxjs/toolkit";



export const adminSlice = createSlice({

    name: 'adminSlice',
    initialState: {
        auth: false
    },
    reducers: {
        // getInfo: (state, action) => {
        //     switch (action.payload) {
        //         case 'open-getInfo':
        //             state.getInfoModal = true;
        //             // document.body.style.overflow = 'fixed';
        //             document.body.style.overflow ='hidden';


        //         break;
        //         case 'close-getInfo':
        //             state.getInfoModal = false;
        //             document.body.style.overflow = 'unset';



        //         break;
        //         case 'go-back':
        //             state.getInfoModal = false;



        //         break;


        //     }

        // },
        // setMessage: (state, action) => {

        //     state.answerMessage = action.payload
        //     if (state.answerMessage !== '' && state.answer !== '') {
        //         state.disableGetInfoBtn = true;
        //     } else {
        //         state.disableGetInfoBtn = false;
        //     }

        // },
        // setAnswer: (state, action) => {

        //     state.answer = action.payload
        //     if (state.answerMessage !== '' && state.answer !== '') {
        //         state.disableGetInfoBtn = true;
        //     } else {
        //         state.disableGetInfoBtn = false;
        //     }

        // }


    }




})

// export const { getInfo, setAnswer, setMessage } = adminSlice.actions;
export default adminSlice.reducer;
