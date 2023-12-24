import React from 'react'
import './Thumb.scss'
import { IThumb } from '../../model/cardModel';
// import thumb-1 from '../../assets/images/thumb-1.png'

interface ThumbModel {
    img : IThumb['img'];
    avatar : IThumb['avatar'];
    userName : IThumb['userName'];
}

export default function Thumb({img, avatar, userName} : ThumbModel) {
    // console.log(img, avatar, userName);

  return (
    <div className="thumbItemWrapper">
        <div className="thumbItem">
            <div className="thumbImg">
                <img src={img} alt="thumb" />
            </div>
        </div>
        <div className="userBlock">
            <div className="userAvatar">
                <img src={avatar} alt="" />
            </div>
            <div className="userName">{userName}</div>
        </div>

    </div>

  )
}
