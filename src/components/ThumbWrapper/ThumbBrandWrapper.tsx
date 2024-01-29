import React from 'react';
import './ThumbWrapper.scss';
import './MediaThumbWrapper.scss';
import ThumbBrand from '../Thumb/ThumbBrand';
import { thumbsArray } from '../../data/thumbBrandData';
import { IBrandThumb } from '../../model/cardBrandModel';
import { useSelector } from 'react-redux';

const ThumbWrapper = () => {
    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);

    return (
        <div className='thumbWrapper'>
            {thumbsArray.map((item: IBrandThumb) => {
                if (guestStatus && item.id <= 8) {
                    return <ThumbBrand img={item.img} key={item.id} />;
                } else if (!guestStatus) {
                    return <ThumbBrand img={item.img} key={item.id} />;
                }

                return false;
            })}
        </div>
    );
};

export default ThumbWrapper;
