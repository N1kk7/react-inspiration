import React from "react";
import './PaymentPage.scss'
import DefaultBtn from "../../components/shared/DefaultBtn";
import { paymentDetails } from "../../redux/selectPlanSlice";
// import backBtn from '../../../assets/images/backBtn.png'
import { useDispatch } from "react-redux";
import backBtn from '../../assets/images/backBtn.png'
import { userLogIn } from "../../redux/logInSlice";
import { useNavigate } from 'react-router-dom';



const PaymentDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const goBack = () => {
        dispatch(paymentDetails('close-payment-details'))
        navigate(-1)
        
    }
    

    return(
        <>
            <div className="paymentPage">
                <div className="paymentPageWrapper">
                    <div className="backBtn" onClick={() => goBack()}>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div>
                    <div className="modalTitle">
                        <h2>ADD PAYMENTS DETAILS</h2>
                    </div>
                    <div className="formWrapper">
                        <div className="nameDetails">
                            <div className="name">
                                <div className="nameItem">
                                    <h4>First Name</h4>
                                    <input type="text" placeholder="Your first name" />
                                </div>
                                <div className="nameItem">
                                    <h4>Last Name</h4>
                                    <input type="text" placeholder="Your last name" />
                                </div>
                            </div>
                            <div className="cardNumber">
                                <h4>Add card number</h4>
                                <input type="text" placeholder="0000 0000 0000 0000"/>
                                <div className="description">
                                    <h4>Securely stored</h4>
                                </div>
                            </div>
                            <div className="date">
                                <div className="dateItem">
                                    <h4>Expiration month</h4>
                                    <input type="text" placeholder="MM"/>
                                </div>
                                <div className="dateItem">
                                    <h4>Expiration year</h4>
                                    <input type="text" placeholder="YY"/>
                                </div>
                            </div>
                            <div className="secureCode">
                                <h4>Security code</h4>
                                <input type="text" placeholder="3 digits"/>
                            </div>
                        </div>
                        <div className="addressDetails">
                            <div className="country">
                                <h4>Country</h4>
                                <input type="text" placeholder="Choose country"/>
                            </div>
                            <div className="address">
                                <h4>Address line 1</h4>
                                <input type="text" placeholder="Billing address 1"/>
                            </div>
                            <div className="address">
                                <h4>Address line 2</h4>
                                <input type="text" placeholder="Billing address 2"/>
                            </div>
                            <div className="zipCode">
                                <div className="code">
                                    <h4>City</h4>
                                    <input type="text" placeholder="Billing city"/>
                                </div>
                                <div className="code">
                                    <h4>Post code</h4>
                                    <input type="text" placeholder="(Optional)"/>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="buttonWrapper">
                        <div className="btn cancelBtn">
                            <DefaultBtn textBtn="Cancel" methodBtn="cancelBtn"/>

                        </div>
                        <div className="btn paymentBtn">
                            <DefaultBtn textBtn="Processed to payment" methodBtn="payment-processed"/>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default PaymentDetails