import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import welcomeModalReducer from './welcomeModalSlice'
import selectPlanReducer from "./selectPlanSlice";
import getInfoReducer from "./getInfoSlice";



export default configureStore({

    reducer:{
        mainState: rootReducer,
        welcomeModalState: welcomeModalReducer,
        getInfoState: getInfoReducer,
        selectPlanState: selectPlanReducer,
        
    },
    // middleware: 



})