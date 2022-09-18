import { MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import './post.css';
import { Users } from '../../dummyData'; 

const Post = ({post}) => {
    const {date, comment, photo, like} = post;
    const user = Users.filter(u => u.id === post.userId);
    const [currentLike, setCurrentLike] = useState(like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setCurrentLike(isLiked ? currentLike - 1 : currentLike + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={user[0].profilePicture} alt="" />
                        <span className="postUserName">{user[0].username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' onClick={likeHandler} src="assets/like.png" alt="" />
                        <img className='likeIcon' onClick={likeHandler} src="assets/heart.png" alt="" />
                        <span className="postLikeCon">{currentLike} People Like it</span>
                    </div>
                    <div className="postBottomLeft">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;