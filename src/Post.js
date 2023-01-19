import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="https://avatars.githubusercontent.com/u/92430613?s=96&v=4"/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>Ozlem Ezgi SARI {" "}
                        <span className='post__headerSpecial'>
                            <VerifiedUserIcon className='post__badge' /> 
                            @ozlemezgi
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>
                        I challange you to build a Twitter Clone with React.js!!!
                    </p>
                </div>
            </div>
            <img src='https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg'></img>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
        </div>

    </div>
  )
}

export default Post