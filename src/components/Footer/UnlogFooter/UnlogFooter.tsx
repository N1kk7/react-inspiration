import React from "react";
// import { useDispatch } from "react-redux";
import ContGoogle from "../../shared/ContGoogle";
import ChoiceMethod from "../../shared/ChoiceMethod";
import EnterEmail from "../../shared/EnterEmail";
import DefaultBtn from "../../shared/DefaultBtn";
import './UnlogFooter.scss'


const UnloggedFooter = () => {

    // const dispatch = useDispatch();






    return (
            // <div className="container">
            <>
                <div className="unlog-footer">
                    <div className="content-wrapper">
                        <div className="unlog-title">
                            <span>Sign up to discover more<br /> ad inspiration</span>
                        </div>
                        <ContGoogle/>
                        <ChoiceMethod/>
                        <div className="email-title">
                            <span>Email</span>
                        </div>
                        <EnterEmail/>
                        {/* <SignInBtn/>*/}
                        <DefaultBtn textBtn="Continue with email" methodBtn={'Login'}/>
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