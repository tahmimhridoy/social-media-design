import { MoreVert } from '@mui/icons-material';
import React from 'react';
import './post.css';

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className="postUserName">Tahmim Hasan</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post</span>
                    <img className='postImg' src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="assets/like.png" alt="" />
                        <img className='likeIcon' src="assets/heart.png" alt="" />
                        <span className="postLikeCon">32 People Like it</span>
                    </div>
                    <div className="postBottomLeft">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;