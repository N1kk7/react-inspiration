import React, { useEffect, useState } from "react";
import './Shared.scss'
import { useDispatch, useSelector } from "react-redux";
import { enterEmail } from "../../redux/rootSlice";
const EnterEmail = () => {

    const dispatch = useDispatch();

    const errorEmail = useSelector((state: any) => state.mainState.emailError)

   
    
    return(
        <>
            <div className="enterEmailPass">
                {!errorEmail && <input type="text" placeholder="Enter email address" onChange={(event) => {dispatch(enterEmail(event.target.value))}}/>}
                {errorEmail && <input type="text" placeholder="Enter email address" style={{border : '1px solid red'}} onChange={(event) => {dispatch(enterEmail(event.target.value))}}/>}


            </div>
        </>

    )
}

export default EnterEmail