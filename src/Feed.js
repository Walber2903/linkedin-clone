import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Post from './Post';
import { db } from './firebase';
import { collection, onSnapshot, orderBy, query, addDoc, serverTimestamp } from 'firebase/firestore';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'posts'), {
      name: 'Walber',
      description: 'Test',
      message: input,
      photoUrl: '',
      timestamp: serverTimestamp(),
    });

    setInput('');
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar className='feed_avatar' src='https://github.com/Walber2903.png'/>
          <form className='form_input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Start a post'/>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

    </div>
  )
}

export default Feed