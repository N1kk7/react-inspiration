import React from 'react';
import LogFooter from './LogFooter/LogFooter';
import UnlogFooter from './UnlogFooter/UnlogFooter';
import { useSelector } from 'react-redux';

const Footer = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    return (
        <>
            {!guestStatus && <LogFooter />}
            {guestStatus && <UnlogFooter />}
        </>
    );
};

export default Footer;
