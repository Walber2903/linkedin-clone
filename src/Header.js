import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img 
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/linkedin_logo_icon_170234.png" 
          alt="linkedin logo" 
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search'/>
        </div>

      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='https://github.com/Walber2903.png' title='Me' />
      </div>
    </div>
  )
}

export default Header