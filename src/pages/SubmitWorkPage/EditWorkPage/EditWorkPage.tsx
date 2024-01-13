import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPage } from "../../../redux/submitWorkSlice";
import closeBtn from '../../../assets/images/closeBtn.svg'
import backBtn from '../../../assets/images/backBtn.svg'
import DefaultBtn from "../../../components/shared/DefaultBtn";
import uploadBtn from '../../../assets/images/downloadBtn.svg'
import downBtn from '../../../assets/images/downBtn.svg'

import '../SubmitWorkPage.scss'





const SubmitWorkPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const goBack = () => {
        dispatch(editPage('close-edit-page'));
        navigate(-1);
    }




    useEffect(() => {
        dispatch(editPage('open-edit-page'));

    }, [dispatch])

    return (
        <div className="submitWorkPage editPage">
            <div className="container">
                <div className="submitPageWrapper">
                        <div className="backBtn" onClick={() => goBack()}>
                            <img src={backBtn} alt="back-btn" />
                            <span>Back</span>
                        </div>
                        <div className="closeBtn" onClick={() => {}}>
                            <img src={closeBtn} alt="close-btn" />
                        </div>
                    <div className="submitTitle">
                        <h2>
                            Add new ad creative
                        </h2>

                    </div>
                    <div className="contentWrapper">
                        <div className="videoContent">
                            <div className="contentTitle">
                                <h5>
                                    Add video
                                </h5>
                            </div>
                            <div className="itemWrapper">
                                <div className="btn">
                                    <img src={uploadBtn} alt="upload-btn" />
                                    <span>
                                        Upload
                                    </span>
                                </div>
                                <div className="text">
                                    <span>Video hcd99skabaHc.mov</span>
                                </div>
                            </div>

                        </div>
                        <div className="brandCategory">
                            <div className="brand">
                                <div className="contentTitle">
                                    <h5>
                                        Brand name
                                    </h5>
                                </div>
                                <div className="itemWrapper">
                                    <input type="text" placeholder="Brand name" />
                                </div>

                            </div>
                            <div className="category">
                                <div className="contentTitle">
                                    <h5>
                                        Category
                                    </h5>
                                </div>
                                <div className="itemWrapper">
                                    <div className="text">Choose type</div>
                                    <img src={downBtn} alt="down-btn" />
                                </div>

                            </div>

                        </div>

                        <div className="descriptionContent">
                            <div className="contentTitle">
                                <h5>
                                    Ad Description
                                </h5>
                            </div>
                            <div className="itemWrapper">
                                <textarea name="description" id="1" placeholder="Add a short description about the work behind this ad"/>
                            </div>

                        </div>
                        <div className="keywordsField">
                            <div className="contentTitle">
                                <h5>
                                    Keywords
                                </h5>
                            </div>

                            <div className="optionField">
                                <div className="option">
                                    <span>
                                        Promotion video
                                    </span>
                                    <img src={closeBtn} alt="close" />
                                </div>

                            </div>


                        </div>
                        <div className="keywordsContent">
                            <div className="title">
                                <h5>
                                    Suggested Keywords:
                                </h5>
                            </div>
                            <div className="optionWrapper">
                                <div className="option">
                                    <span>
                                        Promotion video
                                    </span>
                                </div>
                                <div className="option">
                                    <span>
                                        Motion Design
                                    </span>
                                </div>
                                <div className="option">
                                    <span>
                                        Promotion video
                                    </span>
                                </div>
                                <div className="option">
                                    <span>
                                        Motion Design
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="buttonWrapper">
                            <div className="cancelBtn">
                                <DefaultBtn textBtn="Cancel" methodBtn="cancel-submit" />

                            </div>
                            <div className="adNew">
                                <DefaultBtn textBtn="Ad new ad" methodBtn="ad-new-ad" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}


export default SubmitWorkPage