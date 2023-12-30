import React from 'react';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import ThumbWrapper from '../../components/ThumbWrapper/ThumbWrapper';
import HideContent from '../../components/HideContent/HideContent';
import './MainPage.scss';
import './MediaMainPage.scss';
import Footer from '../../components/Footer/Footer';

import {useSelector} from "react-redux";

const MainPage = () => {

  const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page-wrapper">

          {guestStatus && <div className="main-page-banner">
            <h1 className="main-page-banner-title">
              The best<br />
              <span className="main-page-banner-title__second-line">ad inspiration</span><br />
              <span className="main-page-banner-title__third-line">in one place</span>
            </h1>

            <span className="main-page-banner-socials">
              Facebook, Instagram & TikTok
            </span>

            <span className="main-page-banner-videos">
              UGC Short-form Videos
            </span>

            <span className="main-page-banner-brands">
              Discover the top brands and creators<br /> through their creatives
            </span>
          </div>}
          <SearchFilters/>
          <ThumbWrapper/>
          <HideContent/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;