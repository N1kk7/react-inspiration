import React from "react";
import google from '../../assets/images/google.png'


import './Shared.scss'

const ContGoogle = () => {

    return (

        <>
            <div className="contGoogle">
                <div className="googleImg">
                    <img src={google} alt="google" />
                </div>
                <div className="btnDescription">
                    <span>
                        Continue with Google
                    </span>
                </div>

            </div>
        </>
    )
    
}

export default ContGoogle