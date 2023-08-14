import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar src='https://github.com/hobbyn.png' />
        <div className="post__info">
          <h2>Beto Barbosa</h2>
          <p>Decription</p>
        </div>
      </div>
      <div className="post__body">
        <p>Message  here</p>
      </div>

    </div>
  )
}

export default Post