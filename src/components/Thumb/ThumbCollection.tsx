import React from 'react'
import './Thumb.scss'
import { ICollectionThumb } from '../../model/cardCollectionModel';
import { creatorBrand } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import thumb-1 from '../../assets/images/thumb-1.png'

interface ThumbCollectionModel {
    img : ICollectionThumb['img'];

}

export default function ThumbCollection({img} : ThumbCollectionModel) {

  const dispatch = useDispatch();

  return (


    <div className="thumbItemWrapper">
        <Link to='/creator-page'>
            <div className="thumbCollectionItem"  onClick={() => {dispatch(creatorBrand('creator'));}}>
                <div className="thumbCollectionImg">
                    {img.map((imgItem, index) => {
                      return <img src={imgItem} key={index} alt="thumb" />
                    })}
                </div>

                <div
                  className='collectionNameBlock'
                >
                  <div className='collectionName'>Collection name</div>
                </div>
            </div>

        </Link>

    </div>

  )
}
