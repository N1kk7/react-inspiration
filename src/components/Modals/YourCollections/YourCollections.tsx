import React from "react";
import './YourCollections.scss'
import closeBtn from '../../../assets/images/closeBtn.svg'
import { useDispatch } from "react-redux";
import { popupMethod } from "../../../redux/myCollection";
import DefaultBtn from "../../shared/DefaultBtn";


const YourCollections = () => {

    const dispatch = useDispatch();



    return(
        <>
            <div className="modal yourCollections">
                <div className="modal-wrapper">
                    {/* <div className="backBtn" onClick={() => }>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div> */}
                    <div className="closeBtn" onClick={() => {dispatch(popupMethod('closeAllModal'))}}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                        <h2>Your collection</h2>
                    </div>
                    <div className="modalTitleDescription">
                        <span>
                            You don't have any collections yet. 
                            Create your first now!
                        </span>
                    </div>
                    <DefaultBtn textBtn="Create new collection" methodBtn="createCollection"/>
                </div>

            </div>
        
        
        </>
    )
    
}

export default YourCollections