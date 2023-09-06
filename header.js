import React from 'react'
import '../App.css'
import vector from '../assets/Vector.svg'
export default function header() {
  return (
    <div className='header'>
        <img  src={vector} alt='house' className='class' />
        <h1 >Hi, Priya</h1>
       <div className='lastpodu'>
       <svg  style={{width:'65px',height:'65px',fill:'#FFF'}}  xmlns="http://www.w3.org/2000/svg" width="65" height="66" viewBox="0 0 65 66" fill="none">
  <path d="M32.5 0C14.56 0 0 14.784 0 33C0 51.216 14.56 66 32.5 66C50.44 66 65 51.216 65 33C65 14.784 50.44 0 32.5 0ZM32.5 9.9C37.895 9.9 42.25 14.322 42.25 19.8C42.25 25.278 37.895 29.7 32.5 29.7C27.105 29.7 22.75 25.278 22.75 19.8C22.75 14.322 27.105 9.9 32.5 9.9ZM32.5 56.76C24.375 56.76 17.1925 52.536 13 46.134C13.0975 39.567 26 35.97 32.5 35.97C38.9675 35.97 51.9025 39.567 52 46.134C47.8075 52.536 40.625 56.76 32.5 56.76Z" fill="white"/>
</svg>
<br />
<div style={{width:'5px',height:'69px',backgroundColor:'#FFF'}}></div>
<br />
<svg style={{width:'58px',height:'42px',fill:'#FFF'}} xmlns="http://www.w3.org/2000/svg" width="58" height="42" viewBox="0 0 58 42" fill="none">
  <path d="M43.5 9.33333L39.411 12.6233L46.893 18.6667H17.4V23.3333H46.893L39.411 29.3533L43.5 32.6667L58 21L43.5 9.33333ZM5.8 4.66667H29V0H5.8C2.61 0 0 2.1 0 4.66667V37.3333C0 39.9 2.61 42 5.8 42H29V37.3333H5.8V4.66667Z" fill="white"/>
</svg>
</div>
    </div>
  )
}