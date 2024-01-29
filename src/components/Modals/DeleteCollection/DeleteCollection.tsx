import React from 'react';
import './DeleteCollection.scss';
import closeBtn from '../../../assets/images/closeBtn.svg';

import { useDispatch } from 'react-redux';
import { popupMethod } from '../../../redux/myCollection';

const DeleteCollection = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='modal deleteCollection'>
                <div className='modal-wrapper'>
                    <div
                        className='closeBtn'
                        onClick={() => {
                            dispatch(popupMethod('closeRemoveCollection'));
                        }}
                    >
                        <img src={closeBtn} alt='close-btn' />
                    </div>
                    <div className='title'>
                        <h4>Remove this collection</h4>
                    </div>
                    <div className='question'>
                        <span>Are you sure you want to delete this collection?</span>
                    </div>
                    <div className='buttonWrapper'>
                        <div
                            className='btn cancelBtn'
                            onClick={() => {
                                dispatch(popupMethod('closeRemoveCollection'));
                            }}
                        >
                            <span>Cancel</span>
                        </div>
                        <div
                            className='btn deleteBtn'
                            onClick={() => {
                                dispatch(popupMethod('closeRemoveCollection'));
                            }}
                        >
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteCollection;
