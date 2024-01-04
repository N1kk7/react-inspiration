import React from "react";
import './SearchQuery.scss'
import ThumbWrapper from "../../components/ThumbWrapper/ThumbWrapper";
import HideContent from "../../components/HideContent/HideContent";
import UnloggedFooter from "../../components/Footer/UnlogFooter/UnlogFooter";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import { useSelector } from "react-redux";


const SearchQuery = () => {

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus)


    console.log(guestStatus);
    


    return (

        <>
            <div className="searchPage">
            
                <div className="container">
                    <div className="search-page-wrapper">
                        <div className="searchTitle">
                            <div className="title">
                                <h2>
                                    SEARCH QUERY
                                </h2>

                            </div>
                            <div className="description">
                                <span>
                                {"{Number of Ads} Facebook, Instagram, Tiktok Ads of Top Brands and Creators"}
                                </span>
                            </div>


                        </div>
                        <SearchFilters/>
                        <ThumbWrapper/>
                        {guestStatus && <HideContent/>}
                        

                    </div>
                    <UnloggedFooter/>


                    
                
                    

                </div>

                   
            </div>
            
            
        
        </>
    )

}

export default SearchQuery