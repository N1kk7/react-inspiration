import React from "react";
// import arrowDown from '../../assets/images/arrowDown.svg';
// import { ReactComponent as CustomComponentName } from '../../assets/images/arrowDown.svg';
// import '../../assets/images/';
// import arrowDown from '../../assets/images/arrowDown.svg';
import arrowDown from '../../assets/images/arrowDown.svg';
import "./SearchFilters.scss";

const SearchFilters = () => {

    // const arrowDown = require('../../assets/images/arrowDown.svg') as string;
 
    return (
        <div className="container">
            <div className="searchFilterWrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="filter">
               
                    {/* <img src={arrowDown} alt="" /> */}
                    <img src={arrowDown} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default SearchFilters