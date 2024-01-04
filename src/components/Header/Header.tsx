import React, { useEffect } from 'react';

import './Header.scss';
import './MediaHeader.scss';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popup } from "../../redux/rootSlice";
import userProfileImg from '../../assets/images/user-avatar.png'
import { changeCollectionState } from '../../redux/myCollection';
import { Link, useNavigate } from 'react-router-dom';




const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

  const collectionState = useSelector((state: any) => state.MyCollectionState.collectionState)

  const checkCollectionState = (e: any) => {
    // if (collectionState) {
      dispatch(changeCollectionState());


      if (collectionState) {
        // navigate('/collection-page')
        console.log('collection-page');
        


    
      } else {
        e.preventDefault()
        console.log('popup');
        
      }
     


    // } else {
    //   <Link to="/collection-page"/>
    // }
    
    // console.log(collectionState, "click collection");

    
  }

  // useEffect(() => {
  //   console.log('ololo');
    
    
  // },[])
 

  // console.log(collectionState);
  


  return (

      <div className="container">
        <header className="App-header">
          <div className="pageMenu">
            <Link to='/'>
              <div className="Page-Name">Gallery</div>

            </Link>
            {/* <Link>
            
            </Link> */}
            {!guestStatus && <div className='Page-Name' onClick={(event) => {checkCollectionState(event)}}>My Collections</div>}


          </div>


          <a
            className="App-link Title-Page"
            href="/"
          >
            Adinspiration
          </a>

          <div className="login-menu">
            {guestStatus && <button className='log-btn' onClick={() => dispatch(popup('open-logIn'))} >Log in</button>}
            {!guestStatus && <button className='log-btn' >Go pro</button>}
            {guestStatus && <div className="vLine"></div>}
            {guestStatus && <button className='sign-btn' onClick={() => dispatch(popup('open-signIn'))}>Sign up</button>}
            {!guestStatus && 
              <>
                {/* <div className="userProfileBtn"> */}
                  <button className='user-profileBtn'>
                    First Name
                    <img src={userProfileImg} alt="user-avatar" />

                  </button>
                {/* </div> */}
              </>
            }
          </div>
        </header>
        
    </div>
    
  );
};

export default memo(Header);