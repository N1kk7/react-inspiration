import React, { useEffect } from "react";
import './PaymentPage.scss'
import './MediaPaymentPage.scss'
import DefaultBtn from "../../components/shared/DefaultBtn";
import closeBtn from '../../assets/images/closeBtn.svg'
import { paymentDetails } from "../../redux/selectPlanSlice";
import { useDispatch, useSelector } from "react-redux";
import backBtn from '../../assets/images/backBtn.svg'
// import { userLogIn } from "../../redux/logInSlice";
import { useNavigate } from 'react-router-dom';
// import GetUnlimAccess from "../../components/Modals/SelectPlanModal/GetUnlimAccess";
import { enterCardNumber } from "../../redux/subscriptionSlice";
import { setBillingError } from '../../redux/subscriptionSlice'



const BillingDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

//   const getUnlimAccessModal = useSelector((state: any) => state.selectPlanState.getUnlimAccessModal)

    const cardNumber = useSelector((state: any) => state.subscriptionState.cardNumber)
    const fillCardError = useSelector((state: any) => state.subscriptionState.fillCardError)

    const goBack = () => {
        dispatch(paymentDetails('close-payment-details'))
        navigate(-1)

    }
    // document.onkeydown = function(e) {
    //     if (e.key === "Backspace"){
    //         dispatch(enterCardNumber('delete-one'))


    //     }


    // }

    const errorStyle = {
        border: "1px solid red",
    }
    const defaultStyle = {
        border: " ",
    }

    useEffect(() => {

        dispatch(paymentDetails('open-payment-details'))
    })


    const validateCard = (event: any, event2: any) => {
        // if (event ) {
        //     // event.target.value = event.target.value.slice(0, 19)
        //     console.log('ne number');

        // }
        // if( event.inputType === "insertText" && !event.test(event.data) || cardNumber.length > 19){
        //     .value = input.value.slice(0, input.value.length - 1)
        //     return
        // }
        dispatch(setBillingError('cancel-enterCard-error'))

        dispatch(enterCardNumber(event))

    }


    return(
        <>
            {/* { getUnlimAccessModal && <GetUnlimAccess/> } */}
            <div className="container">
                <div className="billingPage">
                    <div className="paymentPageWrapper">
                        <div className="backBtn" onClick={() => goBack()}>
                            <img src={backBtn} alt="back-btn" />
                            <span>Back</span>
                        </div>
                        <div className="closeBtn" onClick={() => goBack()}>
                            <img src={closeBtn} alt="close-btn" />
                        </div>
                        <div className="modalTitle">
                            <h2>Add billing method</h2>
                        </div>
                        <form className="formWrapper">
                            <div className="nameDetails">

                                <div className="form-group cardNumber">
                                    <h4>Add card number</h4>
                                    <div className="form-group-wrapper">
                                        <input type="text" placeholder="1234 5678 9012 3456" style={fillCardError ? errorStyle : defaultStyle} value={cardNumber} onChange={(e) => validateCard(e.target.value, e)}/>
                                        <div className="description">
                                            <span>Securely stored</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group name">
                                    <div className="nameItem">
                                        <h4>First name</h4>
                                        <input type="text" placeholder="Your first name" />
                                    </div>
                                    <div className="nameItem">
                                        <h4>Last name</h4>
                                        <input type="text" placeholder="Your last name" />
                                    </div>
                                </div>
                                <div className="form-group date">
                                    <div className="dateItem">
                                        <h4>Expiration month</h4>
                                        <input type="text" placeholder="MM"/>
                                    </div>
                                    <div className="dateItem year">
                                        <h4>Expiration year</h4>
                                        <input type="text" placeholder="YY"/>
                                    </div>
                                </div>
                                <div className="form-group secureCode">
                                    <h4>Security code</h4>
                                    <input type="text" placeholder="3 digits"/>
                                </div>
                            </div>
                            <div className="addressDetails">
                                <div className="form-group country">
                                    <h4>Country</h4>
                                    <input type="text" placeholder="Choose country"/>
                                </div>
                                <div className="form-group address">
                                    <h4>Address line 1</h4>
                                    <input type="text" placeholder="Billing address line 1"/>
                                </div>
                                <div className="form-group address address2">
                                    <h4>Address line 2</h4>
                                    <input type="text" placeholder="(Optional)"/>
                                </div>
                                <div className="form-group zipCode">
                                    <div className="code">
                                        <h4>City</h4>
                                        <input type="text" placeholder="Billing city"/>
                                    </div>
                                    <div className="code postCode">
                                        <h4>Postcode</h4>
                                        <input type="text" placeholder="(Optional)"/>
                                    </div>
                                </div>
                            </div>


                        </form>
                        <div className="buttonWrapper">
                            <div className="btn cancelBtn">
                                <DefaultBtn textBtn="Cancel" methodBtn="cancel-billing-btn"/>

                            </div>
                            <div className="btn paymentBtn">
                                <DefaultBtn textBtn="Save" methodBtn="save-billing"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BillingDetails