import React from 'react';
import './SupportModal.scss';
import '../AllModalsStyle.scss';
import closeBtn from '../../../assets/images/closeBtn.svg';
import { closeSupportModal } from '../../../redux/supportSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { setTypeRequest } from "../../../redux/supportSlice";
import { openTypeRequest, closeTypeRequest } from '../../../redux/supportSlice';
import downBtn from '../../../assets/images/downBtn.svg';
import DefaultBtn from '../../shared/DefaultBtn';

const SupportModal = () => {
    const dispatch = useDispatch();

    const typeRequestModal = useSelector((state: any) => state.supportState.typeRequestModal);
    const typeRequestPlaceholder = useSelector((state: any) => state.supportState.typeRequest);

    return (
        <>
            <div className='modal supportModal'>
                <div className='modal-wrapper supportWrapper'>
                    <div
                        className='closeBtn'
                        onClick={() => {
                            dispatch(closeSupportModal());
                        }}
                    >
                        <img src={closeBtn} alt='close-btn' />
                    </div>
                    <div className='modalTitle'>
                        <h2>SUPPORT</h2>
                    </div>
                    <div className='typeRequest'>
                        <h4>Type of request</h4>
                        <div className='inputWrapper'>
                            <input
                                type='select'
                                placeholder={typeRequestPlaceholder}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    dispatch(openTypeRequest());
                                }}
                            />
                            <div className='downBtn'>
                                <img src={downBtn} alt='down-btn' />
                            </div>
                        </div>
                    </div>
                    {typeRequestModal && (
                        <div className='typePopup'>
                            <div className='requestTypeList'>
                                <ul>
                                    <li
                                        onClick={() => {
                                            dispatch(closeTypeRequest('feature-request'));
                                        }}
                                    >
                                        <span>Feature request</span>
                                    </li>
                                    <li
                                        onClick={() => {
                                            dispatch(closeTypeRequest('bug-report'));
                                        }}
                                    >
                                        <span>Bug report</span>
                                    </li>
                                    <li
                                        onClick={() => {
                                            dispatch(closeTypeRequest('other'));
                                        }}
                                    >
                                        <span>Other</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className='describeRequest'>
                        <h4>Describe the request</h4>
                        <input id='title' type='text' placeholder='Title' />
                        <textarea id='description' placeholder='Describe the request in your own words as detailed as possible' />
                    </div>
                    <div className='buttonWrapper'>
                        <DefaultBtn textBtn='Send a request' methodBtn='send-request' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupportModal;
