import React from "react";
import backBtn from '../../../assets/images/backBtn.png'
import closeBtn from '../../../assets/images/closeBtn.svg'
import { useDispatch } from "react-redux";
import { getInfo } from '../../../redux/getInfoSlice'
import { selectPlan,  } from "../../../redux/selectPlanSlice";
import PlanComponent from "./PlanComponent";
import { setError } from "../../../redux/welcomeModalSlice";
import { setInfoSliceError } from "../../../redux/getInfoSlice";
import { popup } from "../../../redux/rootSlice";


import './SelectPlanModal.scss'

const SelectPlanModal = () => {

    const dispatch = useDispatch();

    // const [freePlan, setFreePlan] = useState<string>('');
    // const [proPlan, setProPlan] = useState<string>('activePlan');



    // const togglePlan = (type: string) => {

    //     switch (type) {
    //         case 'free':
    //             setFreePlan('activePlan');
    //             setProPlan('');
    //         break;
    //         case 'pro':
    //             setFreePlan('');
    //             setProPlan('activePlan');
    //         break;
    //     }
        

    // }

    const goBack = () => {
        dispatch(selectPlan('go-back'))
        dispatch(setInfoSliceError('reset-all-errors'))
        dispatch(getInfo('open-getInfo'))


    }

    const closeModal = () => {
        dispatch(selectPlan('close-select-plan'));
        dispatch(setInfoSliceError('reset-all-errors'));
        dispatch(setError('reset-all-errors'))
        dispatch(popup('confirm-password-modal'));
        dispatch(popup('clear-signIn'))
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
                    <PlanComponent freeTextBtn="Start for free" freeMethodBtn="Free-plan" proTextBtn="Go Pro" proMethodBtn="Go-pro"/>
                    
                   
                    {/* <DefaultBtn textBtn="Access the gallery" methodBtn="GetInfoModal"/> */}
                 
                </div>
            </div>
        
        </>
    )
}

export default SelectPlanModal