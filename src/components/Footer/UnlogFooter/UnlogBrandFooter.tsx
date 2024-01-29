import React from 'react';
import DefaultBtn from '../../shared/DefaultBtn';

import './UnlogFooter.scss';

const UnlogBrandFooter = () => {
    return (
        <div className='unlog-brand-footer'>
            <div className='signUp'>
                <DefaultBtn textBtn='Sign up to continue' methodBtn='openSignUpModal' />
            </div>
            <div className='logIn'>
                <DefaultBtn textBtn='Log in' methodBtn='openLogInModal' />
            </div>
        </div>
    );
};

export default UnlogBrandFooter;
