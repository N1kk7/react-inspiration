import React from "react";
import backBtn from '../../../assets/images/backBtn.png'
import closeBtn from '../../../assets/images/closeBtn.svg'
import { useDispatch, useSelector } from "react-redux";
import { popup } from "../../../redux/rootSlice";
import { welcomePopup, getFirstName, getLastName, setInputPlaceholder } from "../../../redux/welcomeModalSlice";
import DefaultBtn from "../../shared/DefaultBtn";
import downBtn from "../../../assets/images/downBtn.svg"
import '../AllModalsStyle.scss';
import "./WelcomeModal.scss"
const WelcomeModal = () => {

    const dispatch = useDispatch();

    const chooseTypeModal = useSelector((state: any) => state.welcomeModalState.chooseTypeModal)
    const inputPlaceholder = useSelector((state: any) => state.welcomeModalState.inputPlaceholder)

    





    const goBack = () => {
        dispatch(welcomePopup('close-welcome-popup'));
        dispatch(popup('confirm-signIn'))

    }
    const closeModal = () => {
        dispatch(welcomePopup('close-welcome-popup'));
        dispatch(popup('close-signIn'));

    }

    return(
        <>
            <div className="modal welcomeModal" onClick={() => {dispatch(welcomePopup('close-chooseType'))}}>
                <div className="modal-wrapper">
                    <div className="backBtn" onClick={() => goBack()}>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div>
                    <div className="closeBtn" onClick={() => closeModal()}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                        <h2>Welcome to Adinspiration</h2>
                    </div>
                    <div className="modalTitleDescription">
                        <span>
                            Tell us about yourself
                        </span>
                    </div>
                    <div className="nameWrapper">
                        <div className="name">
                            <div className="nameTitle">
                                <h5>
                                    First name
                                </h5>
                            </div>
                            <div className="nameInput">
                                <input type="text" placeholder="First name" onChange={(event) => {dispatch(getFirstName(event.target.value))}}/>
                            </div>
                        </div>
                        <div className="name last">
                            <div className="nameTitle">
                                <h5>
                                    Last name
                                </h5>
                            </div>
                            <div className="nameInput">
                                <input type="text" placeholder="Last name" onChange={(event) => {dispatch(getLastName(event.target.value))}}/>

                            </div>
                        </div>
                    </div>
                    <div className="companyWrapper">
                        <div className="companyTitle">
                            <h5>
                                Company type
                            </h5>
                        </div>
                        <div className="companyInput" onClick={(event) => {event.stopPropagation(); dispatch(welcomePopup('open-chooseType'))}}>
                            <input type="select" placeholder={inputPlaceholder}/>
                            <img src={downBtn} alt="down-btn" />
                        </div>
                        {chooseTypeModal && <div className="companyType">
                            <div className="companyTypeList">
                                <ul>
                                    <li onClick={() => {dispatch(setInputPlaceholder('Agency'))}}>
                                        <span>
                                            Agency
                                        </span>
                                    </li>
                                    <li onClick={() => {dispatch(setInputPlaceholder('Brand'))}}>
                                        <span>
                                            Brand
                                        </span>
                                    </li>
                                    <li onClick={() => {dispatch(setInputPlaceholder('Software Company'))}}>
                                        <span>
                                            Software Company
                                        </span>
                                    </li>
                                    <li onClick={() => {dispatch(setInputPlaceholder( 'UGC Creator'))}}>
                                        <span>
                                            UGC Creator
                                        </span>
                                    </li>
                                    <li onClick={() => {dispatch(setInputPlaceholder('Other'))}}>
                                        <span>
                                            Other
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </div>}
                    </div>
                    <DefaultBtn textBtn="Next" methodBtn="WelcomeModal"/>
                </div>



            </div>
        
        
        
        </>
    )

}

export default WelcomeModal