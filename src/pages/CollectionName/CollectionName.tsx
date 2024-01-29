import React from 'react';
import './CollectionName.scss';
import './MediaCollectionName.scss';
import ThumbWrapper from '../../components/ThumbWrapper/ThumbWrapper';
import UnloggedFooter from '../../components/Footer/UnlogFooter/UnlogFooter';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
// import { useSelector } from "react-redux";

const CollectionName = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    return (
        <>
            <div className='collectionPage'>
                <div className='container'>
                    <div className='collection-page-wrapper'>
                        <div className='collectionTitle'>
                            <div className='collectionName'>
                                <div className='userAvatar'></div>
                                <div className='name'>
                                    <span>FirstName</span>
                                </div>
                                <div className='name'>
                                    <span>LastName</span>
                                </div>
                            </div>
                            <div className='pageTitle'>
                                <div className='collectionName'>
                                    <h2>COLLECTION NAME</h2>
                                </div>
                                <div className='copyLinkBtn'></div>
                            </div>
                            <div className='pageDescription'>
                                <p>{'{Number of Ads} Facebook, Instagram, Tiktok Ads of Top Brands and Creators curated from the Adinspiration Library'}</p>
                            </div>
                        </div>
                        <SearchFilters />
                        <ThumbWrapper />
                        {guestStatus && <UnloggedFooter />}
                    </div>
                </div>
            </div>
            {!guestStatus && <Footer />}
        </>
    );
};

export default CollectionName;
