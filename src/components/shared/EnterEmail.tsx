import React from "react";
import './Shared.scss'
import { useDispatch, useSelector } from "react-redux";
import { popup } from "../../redux/rootSlice";
import { enterEmail } from "../../redux/rootSlice";
const EnterEmail = () => {

    const dispatch = useDispatch();

    const errorEmail = useSelector((state: any) => state.mainState.emailError)


    const setInput = (event: any) => {

        function cancelError() {
            dispatch(popup('cancel-email-error'));
            dispatch(enterEmail(event.target.value))

        }

        // errorEmail ? dispatch(popup('cancel-email-error')) :   dispatch(enterEmail(event.target.value));
        errorEmail ? cancelError() :   dispatch(enterEmail(event.target.value));

    }

    const errorStyle = {
        border: "1px solid red",
    }
    const defaultStyle = {
        border: " ",
    }
   
    
    return(
        <>
            <div className="enterEmailPass">
                {/* {!errorEmail && <input type="text" placeholder="Enter email address" onChange={(event) => {dispatch(enterEmail(event.target.value))}}/>}
                {errorEmail && <input type="text" placeholder="Enter email address" style={{border : '1px solid red'}} onChange={(event) => {dispatch(popup('cancel-email-error')); dispatch(enterEmail(event.target.value));}}/>} */}
                <input type="text" placeholder="Enter email address" style={errorEmail ?  errorStyle : defaultStyle} onChange={(event) => {setInput(event)}}/>


            </div>
        </>

    )
}

export default EnterEmail