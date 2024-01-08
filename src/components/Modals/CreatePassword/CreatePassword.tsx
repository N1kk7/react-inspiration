import React from "react";
import { useDispatch } from "react-redux";
import closeBtn from '../../../assets/images/closeBtn.svg';
import backBtn from '../../../assets/images/backBtn.png'
import { popup } from "../../../redux/rootSlice";
import { welcomePopup } from "../../../redux/welcomeModalSlice"
import DefaultBtn from "../../shared/DefaultBtn";
import { createPassword, confirmPassword } from "../../../redux/rootSlice";


import '../AllModalsStyle.scss';
import './CreatePassword.scss'



const CreatePassword = () => {
    const dispatch = useDispatch();




    return(
        <>
            <div className="modal createPassword">
                
                <div className="modal-wrapper">
                    <div className="backBtn" onClick={() => dispatch(popup('back-to-signIn'))}>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div>
                    <div className="closeBtn" onClick={() => dispatch(popup('close-signIn'))}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="passwordWrapper">
                        <div className="password">
                            <div className="passwordTitle">
                                <h5>
                                    Create password
                                </h5>
                            </div>
                            <div className="enterPassword">
                                <input type="text" placeholder="Create password" onChange={(event) => {dispatch(createPassword(event.target.value), welcomePopup('open-welcome-popup')) }}/>
                            </div>
                            


                        </div>
                        <div className="password">
                            <div className="passwordTitle">
                                <h5 className="confirmPass">
                                    Confirm password
                                </h5>
                            </div>
                            <div className="enterPassword">
                                <input type="text" placeholder="Confirm password" onChange={(event) => {dispatch(confirmPassword(event.target.value))}}/>
                            </div>


                        </div>
                    </div>
                    <DefaultBtn textBtn="Next" methodBtn="CreatePassword"/>

                    
                </div>

            </div>
        
        </>
    )

}


export default CreatePassword