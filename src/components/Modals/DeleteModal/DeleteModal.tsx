import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteModalState } from "../../../redux/rootSlice";
import DefaultBtn from "../../shared/DefaultBtn";

import closeBtn from '../../../assets/images/closeBtn.svg'

import './DeleteModal.scss'


const DeleteModal = (props: {messageModal?: string}) => {


    const dispatch = useDispatch();

    const defaultQuestion = 'Are you sure you want to delete this?'





    const closeModal = () => {

        dispatch(deleteModalState('close-delete-modal'))
      

    }


    return(
        <div className="modal deleteModal">
            <div className="modal-wrapper">
                <div className="closeBtn" onClick={() => closeModal()}>
                    <img src={closeBtn} alt="close-btn" />
                </div>
                <div className="deleteTitle">
                    <h2>
                        Delete
                    </h2>
                </div>
                <div className="question">
                    <span>
                        {props.messageModal ? props.messageModal : defaultQuestion}
                    </span>
                </div>
                <div className="buttonWrapper">
                    <div className="cancelBtn">
                        <DefaultBtn textBtn="Cancel" methodBtn="cancel-delete"/>
                    </div>
                    <div className="deleteBtn">
                        <DefaultBtn textBtn="Delete" methodBtn="confirm-delete"/>
                    </div>
                </div>
            </div>

        </div>
    )
 }


 export default DeleteModal