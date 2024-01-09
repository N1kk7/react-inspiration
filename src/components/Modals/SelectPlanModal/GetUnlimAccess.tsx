import React from "react";
import './SelectPlanModal.scss'
// import './MediaSelectPlanMOdal.scss'
import PlanComponent from "./PlanComponent";
import closeBtn from '../../../assets/images/closeBtn.svg'
import { useDispatch } from "react-redux";
import { getUnlimAccess } from "../../../redux/selectPlanSlice";







const GetUnlimAccess = () => {

    const dispatch = useDispatch();
    
    const closeModal = () => {
        dispatch(getUnlimAccess('close-unlim-access'))


    }

    

    return(
        <>
        <div className="modal getUnlimAccess">
                <div className="modal-wrapper">
                    
                    <div className="closeBtn" onClick={() => closeModal()}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                        <h2>
                            GET UNLIMITED ACCESS
                        </h2>
                    </div>
                    <div className="modalTitleDescription">
                        <span>
                            Save 1,000+ hours of research and boost your ROAS
                        </span>
                    </div>
                    <PlanComponent freeTextBtn="Current" freeMethodBtn="Free-plan" proTextBtn="Go Pro" proMethodBtn="Go-pro"/>
                    
                   
                    {/* <DefaultBtn textBtn="Access the gallery" methodBtn="GetInfoModal"/> */}
                 
                </div>
            </div>
        
        </>
    )
}

export default GetUnlimAccess