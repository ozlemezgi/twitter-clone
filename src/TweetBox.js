import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://avatars.githubusercontent.com/u/92430613?s=96&v=4"/>
                <input placeholder="What's happening?" type="text"></input>         
            </div> 

            <input className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type="text"></input>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox