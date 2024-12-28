import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>Better Experience Download<br/> Tomato App</p>
    <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
      
    </div>
  )
}

export default AppDownload
