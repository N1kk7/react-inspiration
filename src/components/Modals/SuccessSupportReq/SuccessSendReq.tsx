import React from "react";
import './SuccessSendReq.scss'
import sendSuccess from '../../../assets/images/send-success.svg'


const SuccessSendReq = () => {


    return(
        <>
            <div className="modal successSupportReq">

                <div className="successWrapper">
                    <div className="image">
                        <img src={sendSuccess} alt="send-success" />
                    </div>
                    <div className="description">
                        <span>
                            Your request was sent successfully
                        </span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SuccessSendReq