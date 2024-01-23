import React, { useEffect, useRef } from 'react';
import './VideoModeration.scss';

import arrowRight from '../../../../assets/images/arrow-right.svg';
import arrowDown from '../../../../assets/images/arrow-down.svg';

import { useDispatch, useSelector } from 'react-redux';
import { popup } from '../../../../redux/rootSlice';
import ThumbWrapper from '../../adminComponents/ThumbWrapperAdmin';

const VideoModeration = () => {
	const dispatch = useDispatch();
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	const filterPopup = useSelector((state: any) => state.mainState.filterPopup);

	const toggleFilter = () => {
		filterPopup ? dispatch(popup('close-filter')) : dispatch(popup('open-filter'));
	};

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
			<div className='videoModeration'>
				<h1>Video Ad moderation</h1>
				<div className='searchFilterWrapper'>
					<div className='search' onClick={() => {}}>
						<div className='searchDesktop'>
							<input type='text' placeholder='Video search' />
							<div className='arrowBtn'>
								<img src={arrowRight} alt='' />
							</div>
						</div>
					</div>

					<div ref={wrapperRef} className='filter'>
						<div
							className='filterWrapper'
							onClick={() => {
								toggleFilter();
							}}
						>
							<span>Filters</span>
							<img src={arrowDown} alt='' />
						</div>

						{filterPopup && (
							<div className='filterPopup'>
								<div className='filterPopupContainer'>
									<div className='categories'>
										<div className='optionTitle'>
											<span>Categories:</span>
										</div>
										<div className='categoryWrapper'>
											<div className='category'>
												<div className='categoryName'>
													<span>App / Digital</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Apparel / Fashion</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Beauty / Personal Care</span>
												</div>
												<div className='categoryCount'>
													<span>123</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Electronics / Tech</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Food / Beverage</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Health / Wellness</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Home</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Kids / Babies</span>
												</div>
												<div className='categoryCount'>
													<span>632</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Local Services</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Pets</span>
												</div>
												<div className='categoryCount'>
													<span>98</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>Other</span>
												</div>
												<div className='categoryCount'>
													<span>823</span>
												</div>
											</div>
										</div>
									</div>

									<div className='platforms'>
										<div className='optionTitle'>
											<span>Platform:</span>
										</div>
										<div className='platformsWrapper'>
											<div className='category'>
												<div className='categoryName'>
													<span>Facebook & Instagram</span>
												</div>
												<div className='categoryCount'>
													<span>122</span>
												</div>
											</div>
											<div className='category'>
												<div className='categoryName'>
													<span>TikTok</span>
												</div>
												<div className='categoryCount'>
													<span>123</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className='videoThumbsWrapper'>
					<ThumbWrapper />
				</div>
			</div>
		</>
	);
};

export default VideoModeration;
