import React from 'react';
import './profile.css';
import Rightbar from '../components/rightbar/Rightbar';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';
import Feed from '../components/feed/Feed';

const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                            <img className='profileUserImg' src="assets/post/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Tahmim Hridoy</h4>
                            <span className="profileInfoDesc">Hello My All Friends.</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;