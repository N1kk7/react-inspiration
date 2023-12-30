import React from "react";
// import { useDispatch } from "react-redux";
import ContGoogle from "../../shared/ContGoogle";
import ChoiceMethod from "../../shared/ChoiceMethod";
import EnterEmail from "../../shared/EnterEmail";
import DefaultBtn from "../../shared/DefaultBtn";
// import HideContent from "../../HideContent/HideContent";
import './UnlogFooter.scss'


const UnloggedFooter = () => {

    // const dispatch = useDispatch();






    return (
            // <div className="container">
            <>
                <div className="unlog-footer">
                {/* <HideContent/> */}

                    <div className="content-wrapper">
                        <div className="unlog-title">
                            <h3>Sign up to discover more ad inspiration</h3>
                        </div>
                        <ContGoogle/>
                        <ChoiceMethod/>
                        <div className="email-title">
                            <h3>Email</h3>
                        </div>
                        <EnterEmail/>
                        {/* <SignInBtn/>*/}
                        <DefaultBtn textBtn="Sign in" methodBtn={'Login'}/> 
                        <div className="unlog-description">
                            <span>
                                By creating an account you agree with our <a href="/">Terms of Service</a> and <a href="/">Privacy Policy.</a>
                            </span>
                        </div>
                        
                    </div>
                    


                </div>
            
            </>
            
            
            
        
        
        
    )
    
}


export default UnloggedFooter