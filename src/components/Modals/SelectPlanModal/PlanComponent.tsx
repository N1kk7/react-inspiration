import React, { useState } from "react";
import './SelectPlanModal.scss'
import DefaultBtn from "../../shared/DefaultBtn";
// import { useDispatch } from "react-redux";
// import {  choicePlan } from "../../../redux/selectPlanSlice";
// import { userLogIn } from "../../../redux/logInSlice";



const Plan = (props: {freeTextBtn: string, freeMethodBtn: string, proTextBtn: string,  proMethodBtn: string}) => {

    // const dispatch = useDispatch()
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

    
    return(
        <>
            <div className="planWrapper">
                        {/* <div className={`plan ${freePlan}`} onClick={(event) => {togglePlan('free'); dispatch(choicePlan('free'))}}> */}
                        <div className={`plan free ${freePlan}`} onClick={(event) => {togglePlan('free');}}>

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
                                    <DefaultBtn textBtn={props.freeTextBtn} methodBtn={props.freeMethodBtn}/>
                            </div>
                        </div>
                        {/* <div className={`plan ${proPlan}`} onClick={(event) => {togglePlan('pro'); dispatch(choicePlan('pro'))}}> */}
                        <div className={`plan pro ${proPlan}`}  onClick={(event) => {togglePlan('pro');}}>

                            <div className="planType">
                                <div className="type">
                                    <h2>
                                        Pro
                                    </h2>
                                </div>
                                <div className="coast">
                                    $8/mo
                                    <span>Billed annually</span>
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
                                    <DefaultBtn textBtn={props.proTextBtn} methodBtn={props.proMethodBtn}/>
                            </div>
                        </div>
                    </div>
        
        
        </>
    )
}


export default Plan