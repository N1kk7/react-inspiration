import React from 'react';
import './Thumb.scss';
import { IAdsThumb } from '../../model/cardAdsModel';
import { creatorBrand } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import thumb-1 from '../../assets/images/thumb-1.png'

interface ThumbAdsModel {
    img: IAdsThumb['img'];
}

export default function ThumbAds({ img }: ThumbAdsModel) {
    const dispatch = useDispatch();

    return (
        <div className='thumbItemWrapper'>
            <Link to='creator-page'>
                <div
                    className='thumbItem'
                    onClick={() => {
                        dispatch(creatorBrand('creator'));
                    }}
                >
                    <div className='thumbImg'>
                        <img src={img} alt='thumb' />
                    </div>
                </div>
            </Link>
        </div>
    );
}
