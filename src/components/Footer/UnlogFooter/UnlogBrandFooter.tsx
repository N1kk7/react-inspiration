import React from "react";
// import { useDispatch } from "react-redux";
import DefaultBtn from "../../shared/DefaultBtn";
// import HideContent from "../../HideContent/HideContent";

import './UnlogFooter.scss'


const UnlogBrandFooter = () => {

    // const dispatch = useDispatch();

 






    return (
            // <div className="container">

        <div className="unlog-brand-footer">
        {/* <HideContent/> */}
            <DefaultBtn textBtn="Sign up to continue" methodBtn="openSignUpModal" />
            <DefaultBtn textBtn="Log in" methodBtn="openLogInModal"/>


            

            


        </div>
            

            
            
            
        
        
        
    )
    
}


export default UnlogBrandFooter