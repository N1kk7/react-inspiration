import React from "react";
import './ThumbWrapper.scss'
import Thumb from "../Thumb/Thumb";
import thumb1 from '../../assets/images/thumb-1.png';
import thumb2 from '../../assets/images/thumb-2.png';
import thumb3 from '../../assets/images/thumb-3.png';
import thumb4 from '../../assets/images/thumb-4.png';
import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';
import user4 from '../../assets/images/user4.png';




const ThumbWrapper = () => {

    return (

        <div className="thumbWrapper">
            <Thumb img={thumb1} avatar={user1} userName="User1" />
            <Thumb img={thumb2} avatar={user2} userName="User2"/>
            <Thumb img={thumb3} avatar={user3} userName="User3"/>
            <Thumb img={thumb4} avatar={user4} userName="User4"/>

        </div>
            

        
    )
    
}

export default ThumbWrapper;