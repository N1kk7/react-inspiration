import React from 'react';
import ThumbCollectionWrapper from '../../components/ThumbWrapper/ThumbCollectionWrapper';
import UnlogBrandFooter from '../../components/Footer/UnlogFooter/UnlogBrandFooter';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import DefaultBtn from '../../components/shared/DefaultBtn';

import './CollectionPage.scss';

const CollectionPage = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    const defaultCollectionImg = {
        width: '278px',
        height: '278px',
        backgroundColor: 'var(--grey)',
        borderRadius: '50%'
    };

    return (
        <>
            <div className='brandPage'>
                <div className='container'>
                    <div className='brandContent'>
                        <div className='brandAvatar'>
                            <div className='brandImg' style={defaultCollectionImg} />
                        </div>
                        <div className='brandDescription'>
                            <div className='brand'>
                                <span>Collection</span>
                            </div>
                            <div className='brandName'>
                                <h2>Collection name</h2>
                            </div>
                            <div className='brandMessage'>
                                <p>From the initial meeting to the final delivery, Ethan has created a feeling of trust and delivered everything we asked of him.</p>
                            </div>
                            <DefaultBtn textBtn='Our website' methodBtn='our-website' />
                        </div>
                    </div>

                    <ThumbCollectionWrapper />
                    {guestStatus && <UnlogBrandFooter />}
                </div>
            </div>
            {!guestStatus && <Footer />}
        </>
    );
};

export default CollectionPage;
