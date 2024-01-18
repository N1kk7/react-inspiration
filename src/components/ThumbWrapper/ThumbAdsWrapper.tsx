import React from "react";
import './ThumbWrapper.scss'
import './MediaThumbWrapper.scss'
import ThumbAds from "../Thumb/ThumbAds";
import { thumbsArray } from '../../data/thumbAdsData'
import { IAdsThumb }  from '../../model/cardAdsModel'
import { useSelector } from "react-redux";


const ThumbAdsWrapper = () => {

    const guestStatus = useSelector((state: any) => state.logInState.guestStatus);



    return (

        <div className="thumbWrapper">
            {thumbsArray.map((item: IAdsThumb) => {

                if (guestStatus && item.id <= 8) {
                    return (
                        <ThumbAds img={item.img} key={item.id} />
                    )

                } else if (!guestStatus) {

                    return (
                        <ThumbAds img={item.img}  key={item.id} />
                    )
                }

            })}
        </div>

    )
}

export default ThumbAdsWrapper;