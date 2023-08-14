import React, { useState } from 'react'
import './Feed.css'
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = e => {
    // e.preventDefault();
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar className='feed_avatar' src='https://github.com/Walber2903.png'/>
          <form className='form_input'>
            <input type="text" placeholder='Start a post'/>
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div> 
        <div className="feed_icons">
          <div className='photo'>
            <InsertPhotoIcon />
            <p>Photo</p>  
          </div>  
          <div className='video'>
            <SmartDisplayIcon />
            <p>Video</p>  
          </div>
          <div className='event'>
            <CalendarMonthIcon />
            <p>Event</p>  
          </div>
          <div className='article'>
            <EditNoteIcon />
            <p>Article</p>  
          </div>
        </div> 
      </div>  

      {/* Posts */}
      {posts.map((post) => (
        <Post />
      ))}

      <Post 
        name='Walber Araujo' 
        description='Its a test' 
        message='Starting the portfolio'
      />

    </div>
  )
}

export default Feed