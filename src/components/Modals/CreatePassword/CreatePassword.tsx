import React from "react";
import { useDispatch, useSelector } from "react-redux";
import closeBtn from '../../../assets/images/closeBtn.svg';
import backBtn from '../../../assets/images/backBtn.png'
import { popup } from "../../../redux/rootSlice";
import DefaultBtn from "../../shared/DefaultBtn";
import { createPassword, confirmPassword, checkPasswordError } from "../../../redux/rootSlice";



import '../AllModalsStyle.scss';
import './CreatePassword.scss'



const CreatePassword = () => {
    const dispatch = useDispatch();

    const stateCreatePassword = useSelector((state: any) => state.mainState.createPasswordError)
    const stateConfirmPassword  = useSelector((state: any) => state.mainState.confirmPasswordError)


    

    const setCreatePassword = (event: any) => {

        function cancelError() {

            dispatch(checkPasswordError('clear-createPass-error'));
            dispatch(createPassword(event.target.value));

        }

        stateCreatePassword ? cancelError() : dispatch(createPassword(event.target.value));

    }

    const setConfirmPassword = (event: any) => {

        function cancelError() {

            dispatch(checkPasswordError('clear-confirmPass-error'));
            dispatch(confirmPassword(event.target.value))

        }

        stateConfirmPassword ? cancelError() : dispatch(confirmPassword(event.target.value));
        
    }


    const closeModal = () => {
        dispatch(checkPasswordError('clear-password-error'));
        dispatch(popup('confirm-password-modal'));
        dispatch(popup('clear-signIn'))

    // dispatch(popup('close-signIn')
    }

    const errorStyle = {
        border: "1px solid red",
    }
    const defaultStyle = {
        border: " ",
    }


    return(
        <>
            <div className="modal createPassword">
                
                <div className="modal-wrapper">

                    <div className="backBtn" onClick={() => {dispatch(popup('back-to-signIn')); dispatch(checkPasswordError('clear-password-error'))}}>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div>
                    <div className="closeBtn" onClick={() => {closeModal()}}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                            <h2>Create your password</h2>
                        </div>
                    <div className="passwordWrapper">
                        <div className="password">
                            <div className="passwordTitle">
                                <h5>
                                    Create password
                                </h5>
                            </div>
                            <div className="enterPassword">
                                <input 
                                    type="password" 
                                    placeholder="Create password" 
                                    style={stateCreatePassword ?  errorStyle : defaultStyle}
                                    onChange={(event) => { setCreatePassword(event)}}
                                />
                            </div>
                            {stateCreatePassword &&
                                <div className="errorMessage">
                                    <span>
                                        Password is not valid
                                    </span>
                                </div>
                            }
                            


                        </div>
                        <div className="password">
                            <div className="passwordTitle">
                                <h5 className="confirmPass">
                                    Confirm password
                                </h5>
                            </div>
                            <div className="enterPassword">
                                <input 
                                    type="password" 
                                    placeholder="Confirm password" 
                                    style={stateConfirmPassword ?  errorStyle : defaultStyle}
                                    onChange={(event) => { setConfirmPassword(event)}}
                                />
                            </div>
                            {stateConfirmPassword &&
                                <div className="errorMessage">
                                    <span>
                                        Password is not matched
                                    </span>
                                </div>
                            }


                        </div>
                    </div>
                    
                    <DefaultBtn textBtn="Next" methodBtn="CreatePassword"/>

                    
                </div>

            </div>
        
        </>
    )

}


export default CreatePassword