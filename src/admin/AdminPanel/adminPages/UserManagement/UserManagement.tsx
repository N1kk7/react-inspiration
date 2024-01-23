import React, { useEffect, useRef } from 'react';
import './UserManagement.scss';

import arrowRight from '../../../../assets/images/arrow-right.svg';

import { useDispatch } from 'react-redux';
import { popup } from '../../../../redux/rootSlice';

const UserManagement = () => {
	const dispatch = useDispatch();
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					dispatch(popup('close-filter'));
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

	return (
		<>
			<div className='userManagement'>
				<h1>User Management</h1>
				<div className='searchFilterWrapper'>
					<div className='search' onClick={() => {}}>
						<div className='searchDesktop'>
							<input type='text' placeholder='User search' />
							<div className='arrowBtn'>
								<img src={arrowRight} alt='' />
							</div>
						</div>
					</div>
				</div>

				<div className='userManagementWrapper'>

				</div>
			</div>
		</>
	);
};

export default UserManagement;
