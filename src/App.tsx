import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage'
import './style/App.scss';
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

function App() {
  // const dispatch = useDispatch();
  const loginModal = useSelector((state: any) => state.mainState.logIn);
  const signInModal = useSelector((state: any) => state.mainState.signIn);



  return (


    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />

          {loginModal && <LogIn />}
          {signInModal && <SignIn />}

          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/gallery" element={<div>My Gallery</div>} /> */}
          </Routes>

          {/* <main>Main</main>

          <div className="count">{count}</div>
          <button onClick={() => dispatch(increment('ololo'))}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button> */}


          <Footer />
        </div>
      </div>

    </Router>

  );
}

export default App;
