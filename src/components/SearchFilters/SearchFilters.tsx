import React, { useRef, useEffect } from "react";
import arrowRight from '../../assets/images/arrow-right.svg';
import arrowDown from '../../assets/images/arrow-down.svg';
import "./SearchFilters.scss";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../redux/rootSlice";
import { useNavigate } from "react-router-dom";
import closeBtn from '../../assets/images/closeBtn.svg'
// import searchMobileBtn from '../../assets/images/searchMobileBtn.png'




const SearchFilters = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const filterPopup = useSelector((state: any) => state.mainState.filterPopup);

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);






    const callModal = (btn: string) => {

        const toggleFilter = () => {

            filterPopup ? dispatch(popup('close-filter')) : dispatch(popup('open-filter'));
        }

        // dispatch(popup('open-filter'));

        switch (btn) {
            case 'filter':
                // guestStatus ? dispatch(popup('open-signIn')): dispatch(popup('open-filter'));
                guestStatus ? dispatch(popup('open-signIn')): toggleFilter();

            break;
            case 'search':
                guestStatus ? dispatch(popup('open-signIn')): navigate('/search-page');

            break;

        }


    }





    function useOutsideAlerter(ref: any) {

        // const dispatch = useDispatch();

        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    dispatch(popup('close-filter'));
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }





    // const arrowDown = require('../../assets/images/arrowDown.svg') as string;

    return (
        <>
            <div className="searchFilterWrapper">
                <div className="search" onClick={() => {callModal('search')}}>
                    <div className="searchDesktop">
                        <input type="text" placeholder="Search" />
                        <div className="arrowBtn"><img src={arrowRight} alt="" /></div>
                    </div>
                    <div className="searchMobile">
                        {/* <img src={searchMobileBtn} alt="search-mobile" /> */}
                    </div>
                </div>
                <div ref={wrapperRef} className="filter">

                    {/* <img src={arrowDo4wn} alt="" /> */}
                    <div className="filterWrapper" onClick={() => {callModal('filter')}}>
                        <span>Filters</span>
                        <img src={arrowDown} alt="" />

                    </div>

                    {filterPopup && <div className="filterPopup">
                        <div className="filterPopupContainer">
                            <div className="closeBtn">
                                <img src={closeBtn} alt="close-btn" onClick={() => dispatch(popup('close-filter'))} />
                            </div>
                            <div className="categories">
                                <div className="optionTitle">
                                    <span>Categories:</span>
                                </div>
                                <div className="categoryWrapper">
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>App / Digital</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Apparel / Fashion</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Beauty / Personal Care</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>123</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Electronics / Tech</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Food / Beverage</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Health / Wellness</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Home</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Kids / Babies</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>632</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Local Services</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Pets</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>98</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Other</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>823</span>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="platforms">
                                <div className="optionTitle">
                                    <span>Platform:</span>
                                </div>
                                <div className="platformsWrapper">
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>Facebook & Instagram</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>122</span>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="categoryName">
                                            <span>TikTok</span>
                                        </div>
                                        <div className="categoryCount">
                                            <span>123</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    }

                </div>
            </div>
        </>
    )
}

export default SearchFilters