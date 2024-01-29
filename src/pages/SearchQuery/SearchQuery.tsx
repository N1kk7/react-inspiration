import React from 'react';
import './SearchQuery.scss';
import ThumbWrapper from '../../components/ThumbWrapper/ThumbWrapper';
import UnloggedFooter from '../../components/Footer/UnlogFooter/UnlogFooter';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import { useSelector } from 'react-redux';
import GetUnlimAccess from '../../components/Modals/SelectPlanModal/GetUnlimAccess';
import Footer from '../../components/Footer/Footer';

const SearchQuery = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);
    const getUnlimAccessModal = useSelector((state: any) => state.selectPlanState.getUnlimAccessModal);

    return (
        <>
            {getUnlimAccessModal && <GetUnlimAccess />}

            <div className='searchPage'>
                <div className='container'>
                    <div className='search-page-wrapper'>
                        <div className='searchTitle'>
                            <div className='title'>
                                <h2>SEARCH QUERY</h2>
                            </div>
                            <div className='description'>
                                <span>{'{Number of Ads} Facebook, Instagram, Tiktok Ads of Top Brands and Creators'}</span>
                            </div>
                        </div>
                        <SearchFilters />
                        <ThumbWrapper />
                    </div>

                    {guestStatus && <UnloggedFooter />}
                </div>
            </div>

            {!guestStatus && <Footer />}
        </>
    );
};

export default SearchQuery;
