import React from "react";
import './Shared.scss'
import { useDispatch, useSelector } from "react-redux";
import { popup } from "../../redux/rootSlice";
import { enterPassword } from "../../redux/rootSlice";

const EnterPass = () => {
    
    const dispatch = useDispatch();

    const errorPassword = useSelector((state: any) => state.mainState.passwordError)

    const setInput = (event: any) => {

        function cancelError() {
            dispatch(popup('cancel-password-error'));
            dispatch(enterPassword(event.target.value))

        }

        errorPassword ? cancelError() :  dispatch(enterPassword(event.target.value));

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
                <input type="password" placeholder="Your password" style={errorPassword ?  errorStyle : defaultStyle} onChange={(event) => {setInput(event)}}/>
            </div>
        </>

    )
}

export default EnterPass