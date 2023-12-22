import React from "react";
import arrowRight from '../../assets/images/arrow-right.svg';
import arrowDown from '../../assets/images/arrowDown.svg';
import "./SearchFilters.scss";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../redux/rootSlice";

const SearchFilters = () => {

    const dispatch = useDispatch();
    const filterPopup = useSelector((state: any) => state.mainState.filterPopup);
    console.log(filterPopup);
    

   

    // const arrowDown = require('../../assets/images/arrowDown.svg') as string;
 
    return (
        <div className="container">
            <div className="searchFilterWrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <div className="arrowBtn"><img src={arrowRight} alt="" /></div>
                </div>
                <div className="filter">
               
                    {/* <img src={arrowDown} alt="" /> */}
                    <div className="filterWrapper" onClick={() => {dispatch(popup('toggle-filter')); }}>
                        <span>Filters</span>
                        <img src={arrowDown} alt="" />

                    </div>
                    
                </div>
            </div>
            {filterPopup && <div className="filterPopup">
                <div className="filterPopupContainer">
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
                        <div className="platformWrapper">
                            <div className="platform">
                                <div className="platformName">
                                    <span>Facebook & Instagram</span>
                                </div>
                                <div className="platformCount">
                                    <span>122</span>
                                </div>
                            </div>
                            <div className="platform">
                                <div className="platformName">
                                    <span>TikTok</span>
                                </div>
                                <div className="platformCount">
                                    <span>123</span>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>

            }
            
        </div>
    )
}

export default SearchFilters