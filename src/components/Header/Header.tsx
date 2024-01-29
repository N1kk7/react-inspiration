import React, { useEffect, useRef } from 'react';

import './Header.scss';
import './MediaHeader.scss';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popup } from '../../redux/rootSlice';
import userProfileImg from '../../assets/images/user-avatar.png';
import { Link } from 'react-router-dom';
import { getUnlimAccess } from '../../redux/selectPlanSlice';
import { useNavigate } from 'react-router-dom';
import { openSupportModal } from '../../redux/supportSlice';
import { userLogIn } from '../../redux/logInSlice';

const Header = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const profileRef = useRef(null);
    useOutsideAlerter(profileRef);

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    const profilePopup = useSelector((state: any) => state.mainState.profilePopup);

    const userFree = useSelector((state: any) => state.logInState.userFree);

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    dispatch(popup('close-profile-popup'));
                }
            }
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    // const collectionState = useSelector((state: any) => state.MyCollectionState.collectionState)

    // const checkCollectionState = (e: any) => {

    //     if (collectionState) {

    //     } else {

    //       e.preventDefault()
    //       dispatch(popupMethod('yourCollection'))
    //       // dispatch(changeCollectionState())

    //     }

    // }

    return (
        <div className='container'>
            <header className='App-header'>
                <div className='pageMenu'>
                    <Link to='/'>
                        <div className='Page-Name'>Gallery</div>
                    </Link>
                    {/* <Link>

            </Link> */}
                    {!guestStatus && (
                        <Link to='/creator-page/collections' className='Page-Name'>
                            My Collections
                        </Link>
                    )}
                </div>

                <a className='App-link Title-Page' href='/'>
                    Adinspiration
                </a>

                <div className='login-menu'>
                    {guestStatus && (
                        <button className='log-btn' onClick={() => dispatch(popup('open-logIn'))}>
                            Log in
                        </button>
                    )}
                    {userFree && (
                        <button
                            className='log-btn go-pro'
                            onClick={() => {
                                dispatch(getUnlimAccess('open-unlim-access'));
                            }}
                        >
                            Go Pro
                        </button>
                    )}
                    {guestStatus && <div className='vLine'></div>}
                    {guestStatus && (
                        <button className='sign-btn' onClick={() => dispatch(popup('open-signIn'))}>
                            Sign up
                        </button>
                    )}
                    {!guestStatus && (
                        <>
                            {/* <div className="userProfileBtn"> */}
                            <button className='user-profileBtn' onClick={() => dispatch(popup('open-profile-popup'))}>
                                First name
                                <img src={userProfileImg} alt='user-avatar' />
                            </button>
                            {/* </div> */}
                            {profilePopup && (
                                <div className='profilePopup' ref={profileRef}>
                                    <div className='profileListPopup'>
                                        <ul>
                                            <li
                                                onClick={() => {
                                                    dispatch(popup('close-profile-popup'));
                                                    navigate('/creator-page');
                                                }}
                                            >
                                                My profile
                                            </li>
                                            {userFree ? (
                                                <li
                                                    onClick={() => {
                                                        dispatch(popup('close-profile-popup'));
                                                        dispatch(getUnlimAccess('open-unlim-access'));
                                                    }}
                                                >
                                                    My plan
                                                </li>
                                            ) : (
                                                <li
                                                    onClick={() => {
                                                        dispatch(popup('close-profile-popup'));
                                                        navigate('/my-subscription');
                                                    }}
                                                >
                                                    My subscription
                                                </li>
                                            )}

                                            <li
                                                onClick={() => {
                                                    dispatch(popup('close-profile-popup'));
                                                    dispatch(openSupportModal());
                                                }}
                                            >
                                                Support
                                            </li>
                                            <hr />
                                            <li
                                                onClick={() => {
                                                    dispatch(popup('close-profile-popup'));
                                                    dispatch(userLogIn('guest'));
                                                    navigate('/');
                                                }}
                                            >
                                                Log out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </header>
        </div>
    );
};

export default memo(Header);
