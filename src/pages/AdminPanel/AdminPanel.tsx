import React from 'react';
import {
    Link,
    Route,
    Routes
  } from "react-router-dom";

import './AdminPanel.scss';

const AdminPanel = () => {
	return (
		<>
			<div className='adminPanel'>
				<aside id='aside'>
                    <div className="logo">
                        <Link to='/admin'>
                            <span>Video Ad moderation</span>
                        </Link>
                    </div>
					<div className='aside-menu'>
						<ul>
							<li className='active'>
                                <Link to='/admin/video'>
                                    <span>Video Ad moderation</span>
                                </Link>
							</li>
							<li>
                                <Link to='/admin/user'>
                                    <span>User Management</span>
                                </Link>
							</li>
							<li>
                                <Link to='/admin/analytics'>
                                    <span>Analytics and Reporting</span>
                                </Link>
							</li>
						</ul>
					</div>
                    <div className="profile">
                        <Link to='/admin'>
                            <span>Profile</span>
                        </Link>
                    </div>
				</aside>

                <main className='main'>
                <Routes>
                    {/* <Route index path="/" element={<MainPage />} />
                    <Route path="/creatorPage" element={<CreatorPage />} />
                    <Route path="/brandPage" element={<BrandPage />} /> */}
                </Routes>
                </main>
			</div>
		</>
	);
};

export default AdminPanel;
