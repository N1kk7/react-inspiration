import React from 'react';
import './CollectionName.scss';
import './MediaCollectionName.scss';
import ThumbCollectionWrapper from '../../components/ThumbWrapper/ThumbCollectionWrapper';
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
                        <SearchFilters />
                        <ThumbCollectionWrapper />
                        {guestStatus && <UnloggedFooter />}
                    </div>
                </div>
            </div>
            {!guestStatus && <Footer />}
        </>
    );
};

export default CollectionName;
