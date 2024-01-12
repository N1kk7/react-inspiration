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

export default function Thumb({img} : ThumbCollectionModel) {

    const dispatch = useDispatch();

  return (


    <div className="thumbItemWrapper">
        <Link to='creatorPage'>
            <div className="thumbItem"  onClick={() => {dispatch(creatorBrand('creator'));}}>
                <div className="thumbImg">
                    {img.map((imgItem) => {
                      return <img src={imgItem} alt="thumb" />
                    })}
                </div>
            </div>

        </Link>




    </div>

  )
}
