import React from 'react';
import './CreateCollection.scss';
import DefaultBtn from '../../shared/DefaultBtn';
import closeBtn from '../../../assets/images/closeBtn.svg';

import { useDispatch } from 'react-redux';
import { popupMethod } from '../../../redux/myCollection';

const CreateCollection = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='modal createCollection'>
                <div className='modal-wrapper'>
                    <div
                        className='closeBtn'
                        onClick={() => {
                            dispatch(popupMethod('closeAllModal'));
                        }}
                    >
                        <img src={closeBtn} alt='close-btn' />
                    </div>
                    <div className='modalTitle'>
                        <h2>Create new collection</h2>
                    </div>
                    <div className='formWrapper'>
                        <div className='formTitle'>
                            <h5>Collection name</h5>
                        </div>
                        <div className='collectionName'>
                            <input type='text' placeholder='Example: Sending Videos' />
                        </div>
                        <div className='describeCollection'>
                            <input name='describeCollection' placeholder='Describe your collection'></input>
                        </div>
                    </div>
                    <div className='buttonWrapper'>
                        <div className='cancelBtn'>
                            <DefaultBtn textBtn='Cancel' methodBtn='cancelBtn' />
                        </div>
                        <div className='saveBtn'>
                            <DefaultBtn textBtn='Save' methodBtn='saveCollection' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCollection;
