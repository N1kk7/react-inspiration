import React, { useState } from 'react';
import './ThumbAdmin.scss';
import './MediaThumbAdmin.scss';
import { IThumb } from '../../../model/cardModelAdmin';
import { copiedLinkState, creatorBrand } from '../../../redux/rootSlice';
import { useDispatch } from 'react-redux';

interface ThumbModel {
    id: IThumb['id'];
    img: IThumb['img'];
    avatar: IThumb['avatar'];
    userName: IThumb['userName'];
}

export default function Thumb({ img, avatar, userName, id }: ThumbModel) {
    const [playClass, setPlayClass] = useState<string>('playBtn');

    const dispatch = useDispatch();

    function handleLinkCopied(): void {
        dispatch(copiedLinkState('copied-modal-open'));

        setTimeout(() => {
            dispatch(copiedLinkState('copied-modal-close'));
        }, 5000);
    }

    const togglePlay = () => {
        playClass === 'playBtn' ? setPlayClass('pauseBtn') : setPlayClass('playBtn');
    };

    return (
        <div className='thumbItemWrapperAdmin'>
            <label htmlFor={`checkbox${id}`}>
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
                        <button className='copyBtn' onClick={() => handleLinkCopied()}></button>
                        {/* TODO make function for notesBtn to show popup with login */}
                        <button className='notesBtn'></button>
                        {/* TODO make function for edit button */}
                        {/* <button className='editBtn'></button> */}

                        <button className={playClass} onClick={() => togglePlay()}></button>
                    </div>
                </div>

                <div
                    className='userBlock'
                    onClick={() => {
                        dispatch(creatorBrand('brand'));
                    }}
                >
                    <div className='userBlockLeft'>
                        <div className='userAvatar'>
                            <img src={avatar} alt='' />
                        </div>
                        <div className='userName'>{userName}</div>
                    </div>
                    <div className='userBlockRight'>
                        <input type='checkbox' name={`checkbox${id}`} id={`checkbox${id}`} />
                        <label htmlFor={`checkbox${id}`}></label>
                    </div>
                </div>
            </label>
        </div>
    );
}
