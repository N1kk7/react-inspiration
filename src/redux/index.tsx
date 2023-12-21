import { configureStore } from "@reduxjs/toolkit";
import  rootReducer  from "./rootSlice.tsx";



export default configureStore({

    reducer:{
        mainState: rootReducer,

    },
    // middleware: 



})