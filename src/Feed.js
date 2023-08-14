import React from 'react'
import './Feed.css'
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteIcon from '@mui/icons-material/EditNote';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar className='feed_avatar' src='https://github.com/Walber2903.png'/>
          <form className='form_input'>
            <button type='submit'>Start a post</button>
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
            <p>Write article</p>  
          </div>
        </div> 
      </div>  

      {/* Posts */}
    </div>
  )
}

export default Feed