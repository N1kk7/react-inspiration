import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './AdminPanel.scss';
import { useDispatch } from 'react-redux';
import { adminPage } from '../../redux/adminSlice';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const [activeClass, setActiveClass] = useState<string>('video');

    useEffect(() => {
        dispatch(adminPage('open'));
    });

    return (
        <>
            <div className='adminPanel'>
                <aside id='aside'>
                    <div className='logo'>
                        <Link to='/admin'>
                            <span>Ad inspiration</span>
                        </Link>
                    </div>
                    <div className='aside-menu'>
                        <ul>
                            <li className={activeClass === 'video' ? 'active' : ''}>
                                <Link
                                    to='/admin/video'
                                    onClick={() => {
                                        setActiveClass('video');
                                    }}
                                >
                                    <span>Video Ad moderation</span>
                                </Link>
                            </li>
                            <li className={activeClass === 'user' ? 'active' : ''}>
                                <Link
                                    to='/admin/user'
                                    onClick={() => {
                                        setActiveClass('user');
                                    }}
                                >
                                    <span>User Management</span>
                                </Link>
                            </li>
                            <li className={activeClass === 'analytics' ? 'active' : ''}>
                                <Link
                                    to='/admin/analytics'
                                    onClick={() => {
                                        setActiveClass('analytics');
                                    }}
                                >
                                    <span>Analytics and Reporting</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='profile'>
                        <Link to='/creator-page'>
                            <span>Profile</span>
                        </Link>
                    </div>
                </aside>

                <main className='main'>
                    <div className='main-wrapper'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
};

export default AdminPanel;
