import React, { useEffect, useState } from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from  "./firebase";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect (() => {
    // code..(feed componenti çalıştığında buradaki kod bir kez çalışır)
    db.collection("posts").onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className='feed'>

        {/* Header */}
        <div className='feed__header'>
            <h2>Home </h2>
        </div>

        {/* Tweet Box */}
        <TweetBox />

        {/* Post */}
        {posts.map(post=>(
             <Post 
             displayName={post.displayName}
             username={post.username}
             verified={post.verified}
             text={post.text}
             avatar={post.avatar}
             image={post.image}
             />
        ))}



    </div>
  )
}

export default Feed