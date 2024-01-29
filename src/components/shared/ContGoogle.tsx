import React from 'react';
import google from '../../assets/images/google.svg';

import './Shared.scss';
import { Link } from 'react-router-dom';

const ContGoogle = () => {
    return (
        <>
            <Link to='#' className='contGoogle'>
                <div className='googleImg'>
                    <img src={google} alt='google' />
                </div>
                <div className='btnDescription'>
                    <span>Continue with Google</span>
                </div>
            </Link>
        </>
    );
};

export default ContGoogle;
