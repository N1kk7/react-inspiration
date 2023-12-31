import React from "react";
import './CreatorPage.scss'
import 'swiper/css';
import creator from '../../assets/images/creator.svg'
import location from '../../assets/images/location.png'
import clapperboard from '../../assets/images/clapperboard.png'
import creatorData from '../../data/creatorData'
import tikTok from '../../assets/images/tiktok.png'
import inst from '../../assets/images/instagram.png'
import xSocial from '../../assets/images/x.png'
import globe from '../../assets/images/globe.png'

import ThumbBrandWrapper from '../../components/ThumbWrapper/ThumbBrandWrapper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import UnlogBrandFooter from "../../components/Footer/UnlogFooter/UnlogBrandFooter";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import DefaultBtn from "../../components/shared/DefaultBtn";





const CreatorPage = () => {
    
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);


    return (
        <>
            <div className="creatorPage">
                <div className="container">
                    <div className="creatorContent">
                        <div className="creatorAvatar">
                            <img src={creatorData.creatorImg} alt="creator-avatar" />
                        </div>
                        <div className="creatorDescription">
                            <div className="creatorName">
                                <h2>First and Last Name</h2>
                            </div>
                            <div className="creatorItems">
                                <div className="item creator">
                                    <img src={creator} alt="creator" />
                                    <span>UGC Creator</span>
                                </div>
                                <div className="item location">
                                    <img src={location} alt="location" />
                                    <span>Kiev, Ukraine</span>
                                </div>
                                <div className="item media">
                                    <img src={clapperboard} alt="clapperboard" />
                                    <span>$300+</span>
                                </div>
                            </div>
                            <div className="creatorMessage">
                                <p>
                                    From the initial meeting to the final delivery, 
                                    Ethan has created a feeling of trust and delivered 
                                    everything we asked of him. 
                                </p>

                            </div>
                            <div className="socials">
                                <img src={tikTok} alt="tik-tok" />
                                <img src={inst} alt="inst" />
                                <img src={xSocial} alt="x-social" />
                                <img src={globe} alt="world" />
                                {/* <div className="workBtn"> */}
                                    <DefaultBtn textBtn="Work with me" methodBtn="work-with-me"/>
                                {/* </div> */}


                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        // pagination={{
                        // clickable: true,
                        // }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        // slidesPerView ='auto'
                    >
                        <SwiperSlide>App / Digital</SwiperSlide>
                        <SwiperSlide>Apparel / Fashion</SwiperSlide>
                        <SwiperSlide>Beauty / Personal Care</SwiperSlide>
                        <SwiperSlide>Business Services</SwiperSlide>
                        <SwiperSlide>Electronics / Tech</SwiperSlide>
                        <SwiperSlide>Financial Services</SwiperSlide>
                        <SwiperSlide>Food / Beverage</SwiperSlide>
                        <SwiperSlide>App / Digital</SwiperSlide>
                        <SwiperSlide>Apparel / Fashion</SwiperSlide>
                        <SwiperSlide>Beauty / Personal Care</SwiperSlide>
                        <SwiperSlide>Business Services</SwiperSlide>
                        <SwiperSlide>Electronics / Tech</SwiperSlide>
                    </Swiper>
                    <ThumbBrandWrapper/>
                    {guestStatus && <UnlogBrandFooter/>}


                </div>
                
            </div>
            {!guestStatus && <Footer/>}

        </>
    )
}

export default CreatorPage