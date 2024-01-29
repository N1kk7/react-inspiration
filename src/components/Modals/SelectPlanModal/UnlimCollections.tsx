import React from 'react';
import './SelectPlanModal.scss';
import PlanComponent from './PlanComponent';
import closeBtn from '../../../assets/images/closeBtn.svg';
import { selectPlan } from '../../../redux/selectPlanSlice';
import { useDispatch } from 'react-redux';
import { popupMethod } from '../../../redux/myCollection';

const UnlimCollections = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(selectPlan('close-select-plan'));
        dispatch(popupMethod('closeAllModal'));
    };

    return (
        <>
            <div className='modal unlimCollections'>
                <div className='modal-wrapper'>
                    <div className='closeBtn' onClick={() => closeModal()}>
                        <img src={closeBtn} alt='close-btn' />
                    </div>
                    <div className='modalTitle'>
                        <h2>UNLIMITED COLLECTIONS</h2>
                    </div>
                    <div className='modalTitleDescription'>
                        <span>Create unlimited collections with Pro</span>
                    </div>
                    <PlanComponent freeTextBtn='Current' freeMethodBtn='Free-plan' proTextBtn='Go Pro' proMethodBtn='Go-pro' />

                    {/* <DefaultBtn textBtn="Access the gallery" methodBtn="GetInfoModal"/> */}
                </div>
            </div>
        </>
    );
};

export default UnlimCollections;
