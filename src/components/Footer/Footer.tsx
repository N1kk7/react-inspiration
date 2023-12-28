import React from "react";
import LogFooter  from './LogFooter/LogFooter'
import UnlogFooter  from './UnlogFooter/UnlogFooter'
import { useSelector } from "react-redux";




const Footer = () => {

    // const dispatch = useDispatch();

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);


    console.log('guestStatus', guestStatus);
    
    


    return (
        <>
            {!guestStatus && <LogFooter/>}
            {guestStatus && <UnlogFooter/>}
        </>
    )
}


export default Footer