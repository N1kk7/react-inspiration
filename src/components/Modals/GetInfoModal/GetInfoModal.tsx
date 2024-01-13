import React from "react";
import DefaultBtn from "../../shared/DefaultBtn";
import backBtn from '../../../assets/images/backBtn.svg'
import closeBtn from '../../../assets/images/closeBtn.svg'
import { useSelector, useDispatch  } from "react-redux";
import { getInfo, setAnswer, setMessage } from '../../../redux/getInfoSlice'
import { welcomePopup } from "../../../redux/welcomeModalSlice";
import { setInfoSliceError } from "../../../redux/getInfoSlice";
import { setError } from "../../../redux/welcomeModalSlice";
import { popup } from "../../../redux/rootSlice";

import '../AllModalsStyle.scss'
import './GetInfoModal.scss'

const GetInfoModal = () => {

    const dispatch = useDispatch();

    const answerError = useSelector((state: any) => state.getInfoState.answerError);
    const answerMessageError = useSelector((state: any) => state.getInfoState.answerMessageError);



    const goBack = () => {
        dispatch(getInfo('go-back'))
        dispatch(setError('reset-all-errors'))
        dispatch(welcomePopup('open-welcome-popup'))


    }

    const closeModal = () => {
        dispatch(getInfo('close-getInfo'))
        dispatch(setInfoSliceError('reset-all-errors'));
        dispatch(setError('reset-all-errors'))
        dispatch(popup('confirm-password-modal'));
        dispatch(popup('clear-signIn'))

    }

    const errorStyle = {
        border: "1px solid red",
    }
    const defaultStyle = {
        border: " ",
    }

    return (
        <>
            <div className="modal getInfo">
                <div className="modal-wrapper">
                    <div className="backBtn" onClick={() => goBack()}>
                        <img src={backBtn} alt="back-btn" />
                        <span>Back</span>
                    </div>
                    <div className="closeBtn" onClick={() => closeModal()}>
                        <img src={closeBtn} alt="close-btn" />
                    </div>
                    <div className="modalQuestion questionTop">
                        <h5>Where did you learn about Adinspiration.com?</h5>
                    </div>
                    <div className="textArea">
                        <textarea
                            name="answer-text"
                            id="1"
                            style={answerMessageError ? errorStyle : defaultStyle}
                            placeholder="Example: I heard about Adinspiration from the Adbox podcast"
                            onChange={(event) => {
                                dispatch(setMessage(event.target.value));
                                dispatch(setInfoSliceError('reset-message-error'));
                        }}/>
                    </div>
                    {answerMessageError && <div className="errorMessage">
                        <span>
                            This field is must be filled
                        </span>
                    </div>}
                    <div className="modalQuestion listQuestion">
                        <h5>Are you here to hire UGC creators?</h5>
                    </div>
                    <div className="answerList">
                            <fieldset onClick={(event) => {
                                dispatch(setAnswer('answer1'));
                                dispatch(setInfoSliceError('reset-answer-error'))
                            }}>
                                <input type="radio" name="answer" id="answer-1" value={'answer1'}/>
                                <label htmlFor="answer-1">
                                    Discovering the latest trends and winning ad ideas
                                </label>
                            </fieldset>
                            <fieldset onClick={(event) => {
                                dispatch(setAnswer('answer2'));
                                dispatch(setInfoSliceError('reset-answer-error'))
                            }}>
                                <input type="radio" name="answer" id="answer-2" value={'answer2'}/>
                                <label htmlFor="answer-2">
                                    Finding UGC creators to hire
                                </label>
                            </fieldset>
                            <fieldset onClick={(event) => {
                                dispatch(setAnswer('answer3'));
                                dispatch(setInfoSliceError('reset-answer-error'))
                            }}>
                                <input type="radio" name="answer" id="answer-3" value={'answer3'}/>
                                <label htmlFor="answer-3">
                                    Sharing my own ad creatives
                                </label>
                            </fieldset>




                    </div>
                    {answerError && <div className="errorMessage">
                        <span>
                            Please answer the question
                        </span>
                    </div>}

                    <DefaultBtn textBtn="Access the gallery" methodBtn="GetInfoModal"/>

                </div>
            </div>

        </>
    )
}

export default GetInfoModal