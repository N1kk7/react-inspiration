import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage'
import './style/App.scss';
import './style/MediaApp.scss';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useSelector } from 'react-redux';
// import { decrement, increment } from './redux/rootSlice.tsx';
// import count from './redux/rootSlice.tsx';
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

function App() {
  // const dispatch = useDispatch();
  const loginModal = useSelector((state: any) => state.mainState.logIn);
  const signInModal = useSelector((state: any) => state.mainState.signIn);
  const createPasswordModal = useSelector((state: any) => state.mainState.createPasswordModal);
  const welcomeModal = useSelector((state: any) => state.welcomeModalState.welcomeModal);
  const getInfoModal = useSelector((state: any) => state.getInfoState.getInfoModal);
  const selectPlanModal = useSelector((state: any) => state.selectPlanState.selectPlanModal);



  return (

    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />

          {loginModal && <LogIn />}
          {signInModal && <SignIn />}
          {createPasswordModal && <CreatePassword/>}
          {welcomeModal && <WelcomeModal/>}
          {getInfoModal && <GetInfo/>}
          {selectPlanModal && <SelectPlan/>}


          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/creatorPage" element={<CreatorPage />} />
            <Route path="/brandPage" element={<BrandPage />} />
            <Route path="/collection-page" element={<CollectionPage />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/project-page" element={<ProjectPage />} />





            {/* <Route path="/gallery" element={<div>My Gallery</div>} /> */}
          </Routes>

          {/* <MainPage /> */}
          {/* <main>Main</main>

          <div className="count">{count}</div>
          <button onClick={() => dispatch(increment('ololo'))}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button> */}


          {/* <Footer /> */}
        </div>
      </div>

    </Router>

  );
}

export default App;
