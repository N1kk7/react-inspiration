import React from 'react'
import './Thumb.scss'
import { IThumb } from '../../model/cardModel';
import { creatorBrand } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import thumb-1 from '../../assets/images/thumb-1.png'

interface ThumbModel {
    img : IThumb['img'];
    avatar : IThumb['avatar'];
    userName : IThumb['userName'];
}

export default function Thumb({img, avatar, userName} : ThumbModel) {

    const dispatch = useDispatch();

  return (
    

    <div className="thumbItemWrapper">
        {/* <Link to='creatorPage'> */}
            <div className="thumbItem"  onClick={() => {dispatch(creatorBrand('creator'));}}>
                <div className="thumbImg">
                    <img src={img} alt="thumb" />
                </div>
            </div>
    
        {/* </Link> */}
        <Link to='brandPage'>
            <div className="userBlock" onClick={() => {dispatch(creatorBrand('brand'))}}>
                <div className="userAvatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="userName">{userName}</div>
            </div>

        </Link>
        
        

    </div>

  )
}
