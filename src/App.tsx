import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage'
import './style/App.scss';
import './style/MediaApp.scss';

import React from 'react';
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

import LogIn from './components/Modals/LogIn/LogIn';
import SignIn from './components/Modals/SignIn/SignIn';
import CreatePassword from './components/Modals/CreatePassword/CreatePassword';
import WelcomeModal from './components/Modals/WelcomeModal/WelcomeModal';
import GetInfo from './components/Modals/GetInfoModal/GetInfoModal'
import SelectPlan from './components/Modals/SelectPlanModal/SelectPlanModal'
import CreatorPage from './pages/CreatorPage/CreatorPage';
import BrandPage from './pages/BrandPage/BrandPage';
import CollectionPage from './pages/CollectionName/CollectionName'
import SearchPage from  './pages/SearchQuery/SearchQuery'
import ProjectPage from './pages/ProjectPage/ProjectPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import AdminPanel from './admin/AdminPanel/AdminPanel';
import AdminLogin from './admin/AdminPanel/AdminLogin';
import EditProfile from './pages/EditProfile/EditProfile';

import SubmitWorkPage from './pages/SubmitWorkPage/SubmitWorkPage/SubmitWorkPage';
import EditWorkPage from './pages/SubmitWorkPage/EditWorkPage/EditWorkPage';
import MySubscription from './pages/MySubscription/MySubscription';
import BillingPage from './pages/PaymentPage/BillingPage';

import VideoModeration from './admin/AdminPanel/adminPages/VideoModeration/VideoModeration';
import UserManagement from './admin/AdminPanel/adminPages/UserManagement/UserManagement'
import AnalyticsPage from './admin/AdminPanel/adminPages/AnalyticsPage/AnalyticsPage';
import ThumbCollectionWrapper from './components/ThumbWrapper/ThumbCollectionWrapper';
import ThumbAdsWrapper from './components/ThumbWrapper/ThumbAdsWrapper';


type PrivateRouteProps = {
  auth: {
    isAuthenticated: boolean
  },
  children: React.JSX.Element
}

const PrivateRoute = ({ auth: { isAuthenticated }, children }: PrivateRouteProps) => {
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

function App() {
  // const dispatch = useDispatch();
  const loginModal = useSelector((state: any) => state.mainState.logIn);
  const signInModal = useSelector((state: any) => state.mainState.signIn);
  const createPasswordModal = useSelector((state: any) => state.mainState.createPasswordModal);
  const welcomeModal = useSelector((state: any) => state.welcomeModalState.welcomeModal);
  const getInfoModal = useSelector((state: any) => state.getInfoState.getInfoModal);
  const selectPlanModal = useSelector((state: any) => state.selectPlanState.selectPlanModal);
  const paymentPage = useSelector((state: any) => state.selectPlanState.paymentDetailsPage);
  const adminPage = window.location.href.indexOf('admin') > -1;
  const auth = useSelector((state: any) => state.adminState.auth);
  const editPage = useSelector((state: any) => state.editPageState.editPage);
  const submitPage = useSelector((state: any) => state.submitPageState.submitPage);
  const editAdPage = useSelector((state: any) => state.submitPageState.editPage);
  const subscriptionPage = useSelector((state: any) => state.subscriptionState.subscriptionPage);




  const userPro = useSelector((state: any) => state.logInState.userPro);



  return (
      <div className="App">
        <div className="wrapper">
          {!paymentPage && !adminPage && !editPage && !submitPage && !editAdPage && !subscriptionPage && <Header />}




          {loginModal && <LogIn />}
          {signInModal && <SignIn />}
          {createPasswordModal && <CreatePassword/>}
          {welcomeModal && <WelcomeModal/>}
          {getInfoModal && <GetInfo/>}
          {selectPlanModal && <SelectPlan/>}

          <Routes>
            <Route index path="/" element={<MainPage />} />
            {userPro && <Route
              path="/creator-page/*"
              element={
                <CreatorPage />
              }
            >
              <Route path="ads" element={<ThumbAdsWrapper />} />
              <Route path="collections" element={<ThumbCollectionWrapper />} />
            </Route>}
            {!userPro && <Route path="/creator-page" element={<CreatorPage />} />}

            <Route path="/brand-page" element={<BrandPage />} />
            <Route path="/collection-page" element={<CollectionPage />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/project-page" element={<ProjectPage />} />
            <Route path="/payment-page" element={<PaymentPage />} />
            <Route path="/edit-page" element={<EditProfile />} />
            <Route path="/submit-work" element={<SubmitWorkPage />} />
            <Route path="/edit-work" element={<EditWorkPage />} />
            <Route path="/my-subscription" element={<MySubscription />}/>
            <Route path='/my-subscription/billing' element={<BillingPage />}/>





            <Route
              path="/admin/*"
              element={
                <PrivateRoute auth={{ isAuthenticated: auth }}>
                  <AdminPanel />
                </PrivateRoute>
              }
            >
              <Route path="video" element={<VideoModeration />} />
              <Route path="user" element={<UserManagement />} />
              <Route path="analytics" element={<AnalyticsPage />} />
            </Route>

            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
