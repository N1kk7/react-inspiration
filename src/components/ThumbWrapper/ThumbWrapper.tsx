import React from "react";
import './ThumbWrapper.scss'
import './MediaThumbWrapper.scss'
import Thumb from "../Thumb/Thumb";
import {thumbsArray} from '../../data/thumbData'
import { IThumb }  from '../../model/cardModel'


const ThumbWrapper = () => {
    


    return (

        <div className="thumbWrapper">
            {thumbsArray.map((item: IThumb) => {
                return (
                    <Thumb img={item.img} avatar={item.avatar} userName={item.userName} key={item.id} />
                )
            })}
        </div>

    )
}

export default ThumbWrapper;