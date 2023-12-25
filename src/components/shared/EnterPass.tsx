import React from "react";
import './Shared.scss'
import { useDispatch, useSelector } from "react-redux";
import { enterPassword } from "../../redux/rootSlice";

const EnterPass = () => {
    
    const dispatch = useDispatch();

    const errorPassword = useSelector((state: any) => state.mainState.passwordError)



    return(
        <>
            <div className="enterEmailPass">
                {!errorPassword && <input type="password" placeholder="Your password" onChange={(event) => {dispatch(enterPassword(event.target.value))}}/>}
                {errorPassword && <input type="password" placeholder="Your password" style={{border: '1px solid red'}} onChange={(event) => {dispatch(enterPassword(event.target.value))}}/>}

            </div>
        </>

    )
}

export default EnterPass