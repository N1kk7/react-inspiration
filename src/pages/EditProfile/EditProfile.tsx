import React, { useEffect } from 'react';
import './EditProfile.scss';
import backBtn from '../../assets/images/backBtn.svg';
import DefaultBtn from '../../components/shared/DefaultBtn';
import closeBtn from '../../assets/images/closeBtn.svg';
import { editPage } from '../../redux/editPageSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import downloadBtn from '../../assets/images/downloadBtn.svg';
import userAvatar from '../../assets/images/userAvatar.png';

const EditProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goBack = () => {
        dispatch(editPage('close-edit-page'));
        navigate(-1);
    };

    const update = () => {
        dispatch(editPage('open-edit-page'));
    };

    useEffect(update, [dispatch]);

    return (
        <>
            <div className='editProfile'>
                <div className='container'>
                    <div className='editPageWrapper'>
                        <div className='backBtn' onClick={() => goBack()}>
                            <img src={backBtn} alt='back-btn' />
                            <span>Back</span>
                        </div>
                        <div className='closeBtn' onClick={() => {}}>
                            <img src={closeBtn} alt='close-btn' />
                        </div>
                        <div className='modalTitle'>
                            <h2>Edit profile</h2>
                        </div>
                        <div className='formWrapper'>
                            <div className='rowWrapper leftWrapper'>
                                <div className='userAvatar'>
                                    <img src={userAvatar} alt='user-avatar' />
                                    <div className='avatarBtn'>
                                        <img src={downloadBtn} alt='download-btn' />
                                        <span>Replace photo</span>
                                    </div>
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Username</h4>
                                        <input type='text' placeholder='BMYXA' />
                                    </div>
                                    <div className='inputWrapper'>
                                        <h4>First name</h4>
                                        <input type='text' placeholder='Bohdan' />
                                    </div>
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <div className='titleWrapper'>
                                            <h4>Email</h4>
                                            <div className='hoverBtn'>i</div>
                                        </div>

                                        <input type='text' placeholder='user.email@gmail.com' />
                                    </div>
                                    <div className='inputWrapper'>
                                        <h4>Last name</h4>
                                        <input type='text' placeholder='Mukha' />
                                    </div>
                                </div>
                                <div className='userDescription'>
                                    <div className='inputWrapper'>
                                        <h4>Description</h4>
                                        <textarea
                                            name='description'
                                            placeholder='From the initial meeting to the final delivery,
                                                                                    Ethan has created a feeling of trust and delivered
                                                                                    everything we asked of him.'
                                        />
                                    </div>
                                </div>
                                <div className='passwordWrapper'>
                                    <div className='inputWrapper'>
                                        <h4>Old Password</h4>
                                        <input type='password' placeholder='********' />
                                    </div>
                                    <div className='inputWrapper'>
                                        <h4>New Password</h4>
                                        <input type='password' placeholder='********' />
                                    </div>
                                    <DefaultBtn textBtn='Change' methodBtn='change-btn' />
                                </div>
                            </div>
                            <div className='rowWrapper rightWrapper'>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Username</h4>
                                        <input type='text' placeholder='$300+' />
                                    </div>
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Location</h4>
                                        <input type='text' placeholder='City, Country' />
                                    </div>
                                </div>
                                <div className='separateLine'>
                                    <hr />
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Website</h4>
                                        <input type='text' placeholder='Link' />
                                    </div>
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Tiktok</h4>
                                        <input type='text' placeholder='Link' />
                                    </div>
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Twitter</h4>
                                        <input type='text' placeholder='Link' />
                                    </div>
                                </div>
                                <div className='inputItem'>
                                    <div className='inputWrapper'>
                                        <h4>Instagram</h4>
                                        <input type='text' placeholder='Link' />
                                    </div>
                                </div>

                                <div className='buttonWrapper'>
                                    <div className='btn cancelBtn'>
                                        <DefaultBtn textBtn='Cancel' methodBtn='cancel-progress' />
                                    </div>
                                    <div className='btn saveBtn'>
                                        <DefaultBtn textBtn='Save' methodBtn='save-progress' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
