import React, { useState } from 'react';
import './CreatorPage.scss';
import creator from '../../assets/images/creator.svg';
import location from '../../assets/images/location.svg';
import clapperboard from '../../assets/images/clapperboard.svg';
import creatorData from '../../data/creatorData';
import tikTok from '../../assets/images/tiktok.svg';
import inst from '../../assets/images/instagram.svg';
import xSocial from '../../assets/images/x.svg';
import globe from '../../assets/images/globe.svg';

import ThumbBrandWrapper from '../../components/ThumbWrapper/ThumbBrandWrapper';

//swiper
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import UnlogBrandFooter from '../../components/Footer/UnlogFooter/UnlogBrandFooter';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/shared/DefaultBtn';
import GetUnlimAccess from '../../components/Modals/SelectPlanModal/GetUnlimAccess';
import SupportModal from '../../components/Modals/SupportModal/SupportModal';
import SuccessSendReq from '../../components/Modals/SuccessSupportReq/SuccessSendReq';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { popup } from '../../redux/rootSlice';

const CreatorPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);
    const getUnlimAccessModal = useSelector((state: any) => state.selectPlanState.getUnlimAccessModal);
    const supportModal = useSelector((state: any) => state.supportState.supportModal);
    const sendRequestModal = useSelector((state: any) => state.supportState.sendRequestModal);

    const [activeClass, setActiveClass] = useState<string>('ads');
    const filterPopup = useSelector((state: any) => state.mainState.filterPopup);

    const callModal = (btn: string) => {
        const toggleFilter = () => {
            filterPopup ? dispatch(popup('close-filter')) : dispatch(popup('open-filter'));
        };

        switch (btn) {
            case 'filter':
                guestStatus ? dispatch(popup('open-signIn')) : toggleFilter();

                break;
            case 'search':
                guestStatus ? dispatch(popup('open-signIn')) : navigate('/search-page');

                break;
        }
    };

    return (
        <>
            {getUnlimAccessModal && <GetUnlimAccess />}
            {supportModal && <SupportModal />}
            {sendRequestModal && <SuccessSendReq />}

            <div className='creatorPage'>
                <div className='container'>
                    <div className='creatorContent'>
                        <div className='creatorAvatar'>
                            <img src={creatorData.creatorImg} alt='creator-avatar' />
                        </div>
                        <div className='creatorDescription'>
                            <div className='creatorName'>
                                <h2>First and Last Name</h2>
                                <DefaultBtn textBtn='Edit' methodBtn='open-edit-page' />
                            </div>
                            <div className='creatorItems'>
                                <div className='item creator'>
                                    <img src={creator} alt='creator' />
                                    <span>UGC Creator</span>
                                </div>
                                <div className='item location'>
                                    <img src={location} alt='location' />
                                    <span>Ukraine, Kyiv</span>
                                </div>
                                <div className='item media'>
                                    <img src={clapperboard} alt='clapperboard' />
                                    <span>$300+</span>
                                </div>
                            </div>
                            <div className='creatorMessage'>
                                <p>From the initial meeting to the final delivery, Ethan has created a feeling of trust and delivered everything we asked of him.</p>
                            </div>
                            <div className='socials'>
                                <div className='imgWrapper'>
                                    <img src={tikTok} alt='tik-tok' />
                                </div>
                                <div className='imgWrapper'>
                                    <img src={inst} alt='inst' />
                                </div>
                                <div className='imgWrapper'>
                                    <img src={xSocial} alt='x-social' />
                                </div>
                                <div className='imgWrapper'>
                                    <img src={globe} alt='world' />
                                </div>
                                {/* <div className="workBtn"> */}
                                <DefaultBtn textBtn='Work with me' methodBtn='work-with-me' />
                                {/* </div> */}
                            </div>
                            <div className='mobileBtn'>
                                <div className='uploadBtn'>
                                    <DefaultBtn textBtn='Upload ad +' methodBtn='upload-video' />
                                </div>
                                <div className='editBtn'>
                                    <DefaultBtn textBtn='Edit' methodBtn='open-edit-page' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='creator-tags-block'>
                        {!guestStatus && (
                            <div className='creator-menu'>
                                <ul>
                                    <li className={activeClass === 'ads' ? 'active' : ''}>
                                        <Link
                                            to='/creator-page/ads'
                                            onClick={() => {
                                                setActiveClass('ads');
                                            }}
                                        >
                                            <span>Ads</span>
                                        </Link>
                                    </li>
                                    <li className={activeClass === 'collections' ? 'active' : ''}>
                                        <Link
                                            to='/creator-page/collections'
                                            onClick={() => {
                                                setActiveClass('collections');
                                            }}
                                        >
                                            <span>Collections</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <Swiper slidesPerView='auto' spaceBetween={10} navigation={true} modules={[Navigation]} className='mySwiper'>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    App / Digital
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Apparel / Fashion
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Beauty / Personal Care
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Business Services
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Electronics / Tech
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Financial Services
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Food / Beverage
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    App / Digital
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Apparel / Fashion
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Beauty / Personal Care
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Business Services
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    to='#'
                                    onClick={() => {
                                        callModal('filter');
                                    }}
                                >
                                    Electronics / Tech
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {!guestStatus && <Outlet />}
                    {guestStatus && <ThumbBrandWrapper />}

                    {guestStatus && <UnlogBrandFooter />}
                </div>
            </div>
            {!guestStatus && <Footer />}
        </>
    );
};

export default CreatorPage;
