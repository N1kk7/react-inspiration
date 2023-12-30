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
            <div className="signUp">
                <DefaultBtn  textBtn="Sign up to continue" methodBtn="openSignUpModal" />


            </div>
            <div className="logIn">
                <DefaultBtn textBtn="Log in" methodBtn="openLogInModal"/>


            </div>


            

            


        </div>
            

            
            
            
        
        
        
    )
    
}


export default UnlogBrandFooter