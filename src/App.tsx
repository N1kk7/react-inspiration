import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import './style/App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/rootSlice.tsx';
// import count from './redux/rootSlice.tsx';


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.mainState.count);



  return (


    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />

          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/gallery" element={<div>My Gallery</div>} />
          </Routes>

          <main>Main</main>

          <div className="count">{count}</div>
          <button onClick={() => dispatch(increment('ololo'))}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>


          <Footer />
        </div>
      </div>

    </Router>
    
  );
}

export default App;
