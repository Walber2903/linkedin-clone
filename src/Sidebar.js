import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?i
        xlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b
        y1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
        <Avatar className='sidebar__avatar' src='https://github.com/Walber2903.png' />
        <h2>Walber Araujo</h2>
        <h4>Front End | Back End | Fullstack Developer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className='sidebar__statNumber'>200</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className='sidebar__statNumber'>635</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem(' reactjs')}
        {recentItem('programing')}
        {recentItem('softwareengineering')}
        {recentItem('nodeJS')}
        {recentItem('developer')}
        {recentItem('laravel')}
      </div>
    </div>
  )
}

export default Sidebar