import React, { useState } from "react";
import DefaultBtn from "../../shared/DefaultBtn";
import backBtn from '../../../assets/images/backBtn.png'
import closeBtn from '../../../assets/images/closeBtn.svg'
import { useDispatch } from "react-redux";
import { getInfo } from '../../../redux/getInfoSlice'
import { selectPlan, choicePlan } from "../../../redux/selectPlanSlice";

import './SelectPlanModal.scss'

const SelectPlanModal = () => {

    const dispatch = useDispatch();

    const [freePlan, setFreePlan] = useState<string>('');
    const [proPlan, setProPlan] = useState<string>('activePlan');



    const togglePlan = (type: string) => {

        switch (type) {
            case 'free':
                setFreePlan('activePlan');
                setProPlan('');
            break;
            case 'pro':
                setFreePlan('');
                setProPlan('activePlan');
            break;
        }
        

    }

    const goBack = () => {
        dispatch(selectPlan('go-back'))
        dispatch(getInfo('open-getInfo'))


    }

    const closeModal = () => {
        dispatch(selectPlan('close-select-plan'))


    }



    return (
        <>
            <div className="modal selectPlan">
                <div className="modal-wrapper">
                    <div className="backBtn" onClick={() => goBack()}>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div>
                    <div className="closeBtn" onClick={() => closeModal()}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                        <h2>SELECT A PLAN</h2>
                    </div>
                    <div className="modalTitleDescription">
                        <span>
                            Change or cancel your plan anytime
                        </span>
                    </div>
                    <div className="planWrapper">
                        <div className={`plan ${freePlan}`} onClick={(event) => {togglePlan('free'); dispatch(choicePlan('free'))}}>
                            <div className="planType">
                                <div className="type">
                                    <h2>
                                        Free
                                    </h2>
                                </div>
                                <div className="coast">
                                    $0
                                </div>
                                
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <span>
                                            Browse latest 200 ads
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Limited search
                                        </span>
                                        
                                    </li>
                                    <li>
                                        <span>
                                            1 Collections
                                        </span>
                                        
                                    </li>
                                </ul>
                            </div>
                            <div className="planBtn">
                                    <DefaultBtn textBtn="Start for free" methodBtn="Free-plan"/>
                            </div>
                        </div>
                        <div className={`plan ${proPlan}`} onClick={(event) => {togglePlan('pro'); dispatch(choicePlan('pro'))}}>
                            <div className="planType">
                                <div className="type">
                                    <h2>
                                        Pro
                                    </h2>
                                </div>
                                <div className="coast">
                                    $8/mo
                                    <span>Billed annualy</span>
                                </div>
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <span>
                                            Unlimited access to ads
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Unlimited search
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Save favourites
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Unlimited collections
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Shared collections
                                        </span>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="planBtn">
                                    <DefaultBtn textBtn="Go Pro" methodBtn="Go-pro"/>
                            </div>
                        </div>
                    </div>
                   
                    {/* <DefaultBtn textBtn="Access the gallery" methodBtn="GetInfoModal"/> */}
                 
                </div>
            </div>
        
        </>
    )
}

export default SelectPlanModal