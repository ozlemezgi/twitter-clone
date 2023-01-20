import React from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>

        {/* Header */}
        <div className='feed__header'>
            <h2>Home </h2>
        </div>

        {/* Tweet Box */}
        <TweetBox />

        {/* Post */}
        <Post 
        displayName="Ezgi SARI"
        username="asdf"
        verified={true}
        text="Yoo its working"
        avatar="https://avatars.githubusercontent.com/u/92430613?s=96&v=4"
        image="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
        />
        <Post />
        <Post />
        <Post />
        <Post />


    </div>
  )
}

export default Feed