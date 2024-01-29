import React from 'react';
import './ThumbWrapper.scss';
import './MediaThumbWrapper.scss';
import ThumbCollection from '../Thumb/ThumbCollection';
import { thumbsArray } from '../../data/thumbCollectionData';
import { ICollectionThumb } from '../../model/cardCollectionModel';
import { useSelector } from 'react-redux';

const ThumbCollectionWrapper = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    return (
        <div className='thumbWrapper'>
            {thumbsArray.map((item: ICollectionThumb) => {
                if (guestStatus && item.id <= 8) {
                    return <ThumbCollection img={item.img} key={item.id} />;
                } else if (!guestStatus) {
                    return <ThumbCollection img={item.img} key={item.id} />;
                }

                return false;
            })}
        </div>
    );
};

export default ThumbCollectionWrapper;
