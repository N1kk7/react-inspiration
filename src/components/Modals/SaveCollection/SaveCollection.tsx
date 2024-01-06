import React from "react";
import './SaveCollection.scss'
import closeBtn from '../../../assets/images/closeBtn.svg' // import close
import DefaultBtn from "../../shared/DefaultBtn";
import { useDispatch, useSelector } from "react-redux";
import { popupMethod } from "../../../redux/myCollection";
import DeleteCollection from "../DeleteCollection/DeleteCollection";



const SaveCollection = () => {
    
    const dispatch = useDispatch();


    const deleteModal = useSelector((state: any) => state.MyCollectionState.removeCollectionModal)

    console.log(deleteModal);
    






    return(
        <>  
            {deleteModal && <DeleteCollection/>}
            <div className="modal saveCollectionModal">
                <div className="modal-wrapper">

                    <div className="closeBtn" onClick={() => {dispatch(popupMethod('closeAllModal'))}}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalTitle">
                        <h2>Save this ad</h2>
                    </div>
                    <div className="collectionWrapper">
                        <div className="collectionImages">
                            <div className="images">
                                <div className="image" style={{opacity: '0.35'}}></div>
                                <div className="image" style={{opacity: '0.6', left: '12px'}}></div>
                                <div className="image" style={{opacity: '1', left: '24px'}}></div>



                            </div>
                            <div className="collectionTitle">
                                <h5>
                                    Collection name #1
                                </h5>
                                <span>3 videos</span>
                            </div>
                        </div>
                        <div className="collectionBtn">
                            <div className="btn copyLinkBtn" onClick={() => {dispatch(popupMethod('copyLink'))}}>Copy link</div>
                            <div className="btn deleteBtn" onClick={() => {dispatch(popupMethod('removeCollection'))}}>Delete</div>

                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <div className="createNew">
                            <DefaultBtn textBtn="Create new collection" methodBtn="createCollection"/>
                        </div>
                        <div className="done">
                            <DefaultBtn textBtn="Done" methodBtn="unlimCollection"/>
                        </div>
                    </div>
                </div>

            </div>
        
        
        
        </>
    )
}

export default SaveCollection


