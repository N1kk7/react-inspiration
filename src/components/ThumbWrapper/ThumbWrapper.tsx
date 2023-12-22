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
    const thumbsArray:any = [
        {
            id: 1,
            img: thumb1,
            avatar: user1,
            userName: 'User1'
        },
        {
            id: 2,
            img: thumb2,
            avatar: user2,
            userName: 'User2'
        },
        {
            id: 3,
            img: thumb3,
            avatar: user3,
            userName: 'User3'
        },
        {
            id: 4,
            img: thumb4,
            avatar: user4,
            userName: 'User4'
        },
        {
            id: 5,
            img: thumb1,
            avatar: user1,
            userName: 'User1'
        },
        {
            id: 6,
            img: thumb2,
            avatar: user2,
            userName: 'User2'
        },
        {
            id: 7,
            img: thumb3,
            avatar: user3,
            userName: 'User3'
        },
        {
            id: 8,
            img: thumb4,
            avatar: user4,
            userName: 'User4'
        },
        {
            id: 9,
            img: thumb1,
            avatar: user1,
            userName: 'User1'
        },
        {
            id: 10,
            img: thumb2,
            avatar: user2,
            userName: 'User2'
        },
        {
            id: 11,
            img: thumb3,
            avatar: user3,
            userName: 'User3'
        },
        {
            id: 12,
            img: thumb4,
            avatar: user4,
            userName: 'User4'
        },
        {
            id: 13,
            img: thumb1,
            avatar: user1,
            userName: 'User1'
        },
        {
            id: 14,
            img: thumb2,
            avatar: user2,
            userName: 'User2'
        },
    ]
    return (

        <div className="thumbWrapper">
            {thumbsArray.map((item: any) => {
                return (
                    <Thumb img={item.img} avatar={item.avatar} userName="{item.userName}" key={item.id} />
                )
            })};
        </div>

    )
}

export default ThumbWrapper;