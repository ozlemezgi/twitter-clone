import React from 'react';
import "./Widgets.css";
import { 
  TwitterTimelineEmbed ,
  TwitterShareButton,
  TwitterTweetEmbed, 
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
// npm i react-twitter-embed


function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon'/>
            <input placeholder='Search Twitter' type="text"/>  
        </div>
        <div className='widgets__widgetContainer'>
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1615794781094875146"}/>
          <TwitterTimelineEmbed sourceType="profile" screenName="vlknnaktss" options={{height:400}}/>
          <TwitterShareButton url={"https://twitter.com/react"} options={{text: "#react is awesome!"  ,via :"reactjs"}}/>
        </div>
    </div>
  )
}

export default Widgets;