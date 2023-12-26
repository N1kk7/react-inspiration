import React from 'react';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import ThumbWrapper from '../../components/ThumbWrapper/ThumbWrapper';
import './MainPage.scss';
import './MediaMainPage.scss';
const MainPage = () => {

  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page-wrapper">

          <div className="main-page-banner">
            <h1 className="main-page-banner-title">The best<br /> ad inspiration<br /> in one place</h1>

            <span className="main-page-banner-socials">
              Facebook, Instagram & TikTok
            </span>

            <span className="main-page-banner-videos">
              UGC Short-form Videos
            </span>

            <span className="main-page-banner-brands">
              Discover the top brands and creators<br /> through their creatives
            </span>
          </div>
          <SearchFilters/>
          <ThumbWrapper/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;