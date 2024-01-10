import React from "react";
import './ThumbWrapper.scss'
import './MediaThumbWrapper.scss'
import Thumb from "../Thumb/Thumb";
import {thumbsArray} from '../../data/thumbData'
import { IThumb }  from '../../model/cardModel'
import { useSelector } from "react-redux";


const ThumbWrapper = () => {

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);



    return (

        <div className="thumbWrapper">
            {thumbsArray.map((item: IThumb) => {

                if (guestStatus && item.id <= 24) {
                    return (
                        <Thumb img={item.img} avatar={item.avatar} userName={item.userName} key={item.id} />
                    )

                } else if (!guestStatus) {

                    return (
                        <Thumb img={item.img} avatar={item.avatar} userName={item.userName} key={item.id} />
                    )
                }
                return false;

            })}
        </div>

    )
}

export default ThumbWrapper;