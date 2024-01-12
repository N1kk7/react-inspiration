import React from 'react';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import ThumbWrapper from '../../components/ThumbWrapper/ThumbWrapper';
import './MainPage.scss';
import './MediaMainPage.scss';
import Footer from '../../components/Footer/Footer';

import YourCollections from '../../components/Modals/YourCollections/YourCollections';
import CreateCollection from '../../components/Modals/CreateCollection/CreateCollection';
import SaveCollection from '../../components/Modals/SaveCollection/SaveCollection';
// import UnlimCollection from '../../components/Modals/UnlimCollection/UnlimCollection';
import UnlimCollections from '../../components/Modals/SelectPlanModal/UnlimCollections';
import SupportModal from '../../components/Modals/SupportModal/SupportModal';
import SuccessSendReq from '../../components/Modals/SuccessSupportReq/SuccessSendReq';
import GetUnlimAccess from '../../components/Modals/SelectPlanModal/GetUnlimAccess';

import {useSelector} from "react-redux";

const MainPage = () => {

  const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

  const yourCollectionState = useSelector((state: any) => state.MyCollectionState.yourCollectionModal)
  const createCollectionState = useSelector((state: any) => state.MyCollectionState.createCollectionModal)
  const saveCollectionState = useSelector((state: any) => state.MyCollectionState.saveCollectionModal)
  const unlimCollectionState = useSelector((state: any) => state.MyCollectionState.unlimCollectionModal)
  const supportModal = useSelector((state: any) => state.supportState.supportModal)
  const sendRequestModal = useSelector((state: any) => state.supportState.sendRequestModal)
  const getUnlimAccessModal = useSelector((state: any) => state.selectPlanState.getUnlimAccessModal)

  // const userPro = useSelector((state: any) => state.logInState.userPro);
  // const userFree = useSelector((state: any) => state.logInState.userFree);


  return (

    <>
      { yourCollectionState && <YourCollections/> }
      { createCollectionState && <CreateCollection/> }
         { saveCollectionState && <SaveCollection/> }
            { unlimCollectionState && <UnlimCollections/> }
            { supportModal && <SupportModal/> }
            { sendRequestModal && <SuccessSendReq/> }
            { getUnlimAccessModal && <GetUnlimAccess/> }
          {/* { paymentModal && <PaymentDetails/> } */}
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
        </div>
      </div>

    </div>
    <Footer/>

    </>

  );
};

export default MainPage;