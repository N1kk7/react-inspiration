import React from 'react';
import './ThumbWrapperAdmin.scss';
import './MediaThumbWrapperAdmin.scss';
import Thumb from './ThumbAdmin';
import { thumbsArray } from '../../../data/thumbData';
import { IThumb } from '../../../model/cardModel';
import { useSelector } from 'react-redux';

const ThumbWrapper = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    return (
        <div className='thumbWrapperAdmin'>
            {thumbsArray.map((item: IThumb) => {
                if (guestStatus && item.id <= 24) {
                    return <Thumb img={item.img} avatar={item.avatar} userName={item.userName} id={item.id} key={item.id} />;
                } else if (!guestStatus) {
                    return <Thumb img={item.img} avatar={item.avatar} userName={item.userName} id={item.id} key={item.id} />;
                }
                return false;
            })}
        </div>
    );
};

export default ThumbWrapper;
