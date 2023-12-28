import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import welcomeModalReducer from './welcomeModalSlice'
import selectPlanReducer from "./selectPlanSlice";
import getInfoReducer from "./getInfoSlice";
import logInSlice from "./logInSlice";




export default configureStore({

    reducer:{
        mainState: rootReducer,
        welcomeModalState: welcomeModalReducer,
        getInfoState: getInfoReducer,
        selectPlanState: selectPlanReducer,
        logInState: logInSlice

        
    },
    // middleware: 



})