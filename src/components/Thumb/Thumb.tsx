import React, { useState } from 'react';
import './Thumb.scss';
import { IThumb } from '../../model/cardModel';
import { creatorBrand } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface ThumbModel {
	img: IThumb['img'];
	avatar: IThumb['avatar'];
	userName: IThumb['userName'];
}

export default function Thumb({ img, avatar, userName }: ThumbModel) {
	const [playClass, setPlayClass] = useState<string>('playBtn');

	const dispatch = useDispatch();

	const togglePlay = () => {
		playClass === 'playBtn' ? setPlayClass('pauseBtn') : setPlayClass('playBtn');
	};

	return (
		<div className='thumbItemWrapper'>
			<div
				className='thumbItem'
				onClick={() => {
					dispatch(creatorBrand('creator'));
				}}
			>
				<div className='thumbImg'>
					<img src={img} alt='thumb' />
				</div>
				<div className='thumbHover'>
                    {/* TODO make function for copyBtn to show popup "Link copied" */}
					<button className='copyBtn'></button>
                    {/* TODO make function for notesBtn to show popup with login */}
					<button className='notesBtn'></button>
					<button className={playClass} onClick={() => togglePlay()}></button>
				</div>
			</div>

			<Link to='brandPage'>
				<div
					className='userBlock'
					onClick={() => {
						dispatch(creatorBrand('brand'));
					}}
				>
					<div className='userAvatar'>
						<img src={avatar} alt='' />
					</div>
					<div className='userName'>{userName}</div>
				</div>
			</Link>
		</div>
	);
}
