import React from 'react'
import './Thumb.scss'
// import thumb-1 from '../../assets/images/thumb-1.png'

export default function Thumb({img, avatar, userName} : any) {
    console.log(img, avatar, userName);

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
