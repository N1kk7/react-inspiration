import React from "react";
import backBtn from '../../assets/images/backBtn.svg'
import closeBtn from '../../assets/images/closeBtn.svg'
import cardSymbol from '../../assets/images/cardSymbol.svg'



import './MySubscription.scss'



const MySubscription = () => {


    return (
        <div className="mySubscription">
            <div className="container">
                <div className="backBtn" onClick={() => {}}>
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
                                <button>
                                    Subscription
                                </button>
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
                        <div className="payment">
                            <h3>
                                Your payment method:
                            </h3>
                        </div>
                        <div className="cardInfo">
                            <div className="card">
                                <div className="cardDescription">
                                    <div className="symbol">
                                        <img src={cardSymbol} alt="card-symbol" />


                                    </div>


                                    <div className="cardCurrency">
                                        <h5>
                                            Master Card in 0468
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
                            </div>
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