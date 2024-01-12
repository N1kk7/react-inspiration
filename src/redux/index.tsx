import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import welcomeModalReducer from './welcomeModalSlice'
import selectPlanReducer from "./selectPlanSlice";
import getInfoReducer from "./getInfoSlice";
import logInSlice from "./logInSlice";
import CollectionSlice from "./myCollection"
import supportSlice from "./supportSlice"
import adminSlice from "./adminSlice"
import editPageSlice from "./editPageSlice"
import submitWorkSlice from "./submitWorkSlice";
import subscriptionSlice from "./subscriptionSlice"




export default configureStore({

    reducer:{
        mainState: rootReducer,
        welcomeModalState: welcomeModalReducer,
        getInfoState: getInfoReducer,
        selectPlanState: selectPlanReducer,
        logInState: logInSlice,
        MyCollectionState: CollectionSlice,
        supportState: supportSlice,
        adminState: adminSlice,
        editPageState: editPageSlice,
        submitPageState: submitWorkSlice,
        subscriptionState: subscriptionSlice


    },
    // middleware:



})