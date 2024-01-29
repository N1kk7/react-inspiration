import React from 'react';
import { useDispatch } from 'react-redux';
import { popup } from '../../../redux/rootSlice';
import closeBtn from '../../../assets/images/closeBtn.svg';
import ContGoogle from '../../shared/ContGoogle';
import ChoiceMethod from '../../shared/ChoiceMethod';
import EnterEmail from '../../shared/EnterEmail';
import EnterPass from '../../shared/EnterPass';
import DefaultBtn from '../../shared/DefaultBtn';

import '../AllModalsStyle.scss';
import './LogIn.scss';

const LogIn = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='modal login'>
                <div className='modal-wrapper'>
                    <div className='closeBtn' onClick={() => dispatch(popup('close-logIn'))}>
                        <img src={closeBtn} alt='close-btn' />
                    </div>
                    <div className='modalTitle'>
                        <h2>Welcome back!</h2>
                    </div>
                    <ContGoogle />
                    <ChoiceMethod />
                    <EnterEmail />
                    <EnterPass />
                    <DefaultBtn textBtn='Sign in' methodBtn={'Login'} />
                    <div className='modalDescription'>
                        <span>Do have an account?</span>

                        <span className='descriptionLink' onClick={() => dispatch(popup('goToSignInModal'))}>
                            Sign Up
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
