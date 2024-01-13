import React, { useEffect } from "react";
import backBtn from '../../assets/images/backBtn.svg'
import closeBtn from '../../assets/images/closeBtn.svg'
import cardSymbol from '../../assets/images/cardSymbol.svg'
import { useDispatch, useSelector } from "react-redux";
import { subscriptionPage } from "../../redux/subscriptionSlice";
import DefaultBtn from "../../components/shared/DefaultBtn";
import { useNavigate } from "react-router-dom";



import './MySubscription.scss'



const MySubscription = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addBilling = useSelector((state: any) => state.subscriptionState.addBillingMethod);
    const lastCardDigit = useSelector((state: any) => state.subscriptionState.lastCardDigit)


    const goBack = () => {
        dispatch(subscriptionPage('close-subscription'))
        navigate('/')
    }


    useEffect(() => {
        dispatch(subscriptionPage('open-subscription'))
    }, [dispatch])
    


    return (
        <div className="mySubscription">
            <div className="container">
                <div className="backBtn" onClick={() => {goBack()}}>
                    <img src={backBtn} alt="back-btn" />
                    <span>Back</span>
                </div>
                <div className="closeBtn" onClick={() => {}}>
                    <img src={closeBtn} alt="close-btn" />
                </div>

                <div className="title">
                    <h1>My subscription</h1>
                </div>
                <div className="subscriptionWrapper">
                    <div className="currentCard">
                        <div className="topCard">
                            <div className="cardTitle">
                                <h3>
                                    Your current plan:
                                </h3>
                            </div>
                            <div className="cardBtn">
                                {
                                    addBilling ? <button>Subscription</button> : <button>Cancel membership</button>
                                }
                            </div>


                        </div>
                        <div className="bottomCard">
                            <h3>
                                Pro
                            </h3>
                            <span>
                                $8 / month
                            </span>
                        </div>
                    </div>

                    <div className="paymentMethod">
                        <div className="topCard">
                            <div className="cardTitle">
                                <h3>
                                    Your payment method:
                                </h3>
                            </div>
                            <div className="cardBtn">
                                {
                                    !addBilling && <button onClick={() => navigate('/my-subscription/billing')}>Add new method</button>

                                }
                            </div>
                            
                            
                        </div>
                        <div className="cardInfo">{
                                addBilling ?
                                    <div className="card">
                                        <div className="cardDescription">
                                            <div className="symbol">
                                                <img src={cardSymbol} alt="card-symbol" />

                                            </div>
                                            <div className="cardCurrency">
                                                <h5>
                                                    Master Card in {lastCardDigit}
                                                </h5>
                                                <span>
                                                    UAN
                                                </span>
                                            </div>
                                        </div>
                                        <div className="buttonWrapper">
                                            <button>
                                                Edit
                                            </button>
                                            <button className="delete">
                                                Delete
                                            </button>
                                        </div>
                                    </div> :
                                    <div className="noPayment">
                                        <div className="noPaymentTitle">
                                            <h3>
                                                No payment method
                                            </h3>
                                        </div>
                                        <div className="description">
                                            <span>
                                                Payment method is not set up
                                            </span>
                                        </div>
                                    </div>
                            }

                        </div>

                    </div>
                    <div className="billingHistory">
                        <div className="billingTitle">
                            <h3>
                                Billing history:
                            </h3>
                        </div>
                        <div className="billingData">
                            <span>
                                Date
                            </span>
                            <span className="amount">
                                Amount
                            </span>
                        </div>
                        <div className="billingInfo">
                            <h5>
                                19/11/2023
                            </h5>
                            <h5 className="price">
                                $8
                            </h5>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}



export default MySubscription