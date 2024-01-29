import React from 'react';
import './Thumb.scss';
import { IBrandThumb } from '../../model/cardBrandModel';
import { creatorBrand } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import thumb-1 from '../../assets/images/thumb-1.png'

interface ThumbBrandModel {
    img: IBrandThumb['img'];
}

export default function Thumb({ img }: ThumbBrandModel) {
    const dispatch = useDispatch();

    return (
        <div className='thumbItemWrapper'>
            <Link to='/brand-page'>
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
