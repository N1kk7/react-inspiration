import React from "react";
import { useDispatch } from "react-redux";
import { popup } from "../../../redux/rootSlice";
import closeBtn from '../../../assets/images/closeBtn.svg';
import ContGoogle from "../../shared/ContGoogle";
import ChoiceMethod from "../../shared/ChoiceMethod";
import EnterEmail from "../../shared/EnterEmail";
import DefaultBtn from "../../shared/DefaultBtn";



import './SignIn.scss';
import '../AllModalsStyle.scss';

const SignIn = () => {

    const dispatch = useDispatch();


    return(
        <div className="modal signIn">
                <div className="modal-wrapper">
                    <div className="closeBtn" onClick={() => dispatch(popup('close-signIn'))}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                        <h2>Join Adinspiration</h2>
                    </div>
                    <ContGoogle/>
                    <ChoiceMethod/>
                    <EnterEmail/>
                    <DefaultBtn textBtn="Continue with email"/>
                    <div className="modalDescription">
                        <span>
                            Don't have an account?
                        </span>
                        <a href="/">Sign up</a>
                    </div>



                </div>
            </div>
    )
    
}


export default SignIn