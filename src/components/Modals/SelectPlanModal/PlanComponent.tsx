import React from 'react';
import './SelectPlanModal.scss';
import DefaultBtn from '../../shared/DefaultBtn';

const Plan = (props: { freeTextBtn: string; freeMethodBtn: string; proTextBtn: string; proMethodBtn: string }) => {
	return (
		<>
			<div className='planWrapper'>
				<div className={`plan free`}>
					<div className='planType'>
						<div className='type'>
							<h2>Free</h2>
						</div>
						<div className='coast'>$0</div>
					</div>
					<div className='list'>
						<ul>
							<li>
								<span>Browse latest 200 ads</span>
							</li>
							<li>
								<span>Limited search</span>
							</li>
							<li>
								<span>1 Collections</span>
							</li>
						</ul>
					</div>
					<div className='planBtn'>
						<DefaultBtn textBtn={props.freeTextBtn} methodBtn={props.freeMethodBtn} />
					</div>
				</div>
				<div className={`plan pro activePlan`}>
					<div className='planType'>
						<div className='type'>
							<h2>Pro</h2>
						</div>
						<div className='coast'>
							$8/mo
							<span>Billed annually</span>
						</div>
					</div>
					<div className='list'>
						<ul>
							<li>
								<span>Unlimited access to ads</span>
							</li>
							<li>
								<span>Unlimited search</span>
							</li>
							<li>
								<span>Save favourites</span>
							</li>
							<li>
								<span>Unlimited collections</span>
							</li>
							<li>
								<span>Shared collections</span>
							</li>
						</ul>
					</div>
					<div className='planBtn'>
						<DefaultBtn textBtn={props.proTextBtn} methodBtn={props.proMethodBtn} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Plan;
