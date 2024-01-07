import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage'
import './style/App.scss';
import './style/MediaApp.scss';

import React from 'react';
import {
  Route,
  Routes,
  Navigate,
<<<<<<< Updated upstream
  useLocation
=======
>>>>>>> Stashed changes
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
import AdminPanel from './pages/AdminPanel/AdminPanel';
import AdminLogin from './pages/AdminPanel/AdminLogin';

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

  return (
      <div className="App">
        <div className="wrapper">
          {!paymentPage && !adminPage && <Header />}

          {loginModal && <LogIn />}
          {signInModal && <SignIn />}
          {createPasswordModal && <CreatePassword/>}
          {welcomeModal && <WelcomeModal/>}
          {getInfoModal && <GetInfo/>}
          {selectPlanModal && <SelectPlan/>}

          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="/creatorPage" element={<CreatorPage />} />
            <Route path="/brandPage" element={<BrandPage />} />
            <Route path="/collection-page" element={<CollectionPage />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/project-page" element={<ProjectPage />} />
            <Route path="/payment-page" element={<PaymentPage />} />
<<<<<<< Updated upstream

=======
            <Route path="/edit-profile" element={<EditProfile />} />
>>>>>>> Stashed changes

            <Route
              path="/admin"
              element={
                <PrivateRoute auth={{ isAuthenticated: auth }}>
                  <AdminPanel />
                </PrivateRoute>
              }
            />

            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
