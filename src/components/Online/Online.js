import React from 'react';
import './online.css';

const Online = ({user}) => {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProflieImgContainer">
                    <img className='rightbarProflieImg' src={user.profilePicture} alt="" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    );
};

export default Online;