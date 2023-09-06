import React from 'react'
import '../App.css'
import Registercancel from './registercancel'


const body = () => {
  
  return (
  <div className='header1'>
    <svg style={{marginTop:'20px',width:'721px',height:'68px'}} xmlns="http://www.w3.org/2000/svg" width="721" height="68" viewBox="0 0 721 68" fill="none">
    <path d="M0 10C0 4.47715 4.47715 0 10 0H711C716.523 0 721 4.47715 721 10V58C721 63.5228 716.523 68 711 68H10C4.47717 68 0 63.5228 0 58V10Z" fill="#A4A6A6" fill-opacity="0.67"/>
  </svg>
  <h2 className='texthead'>APPLY FOR GATE PASS</h2>
  <svg style={{marginTop:'20px',width:'1191px',height:'662px',fill:'#D0CCCC',filter:'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}} xmlns="http://www.w3.org/2000/svg" width="1199" height="670" viewBox="0 0 1199 670" fill="none">
    <g filter="url(#filter0_d_241_39)">
      <path d="M4 20C4 8.95432 12.9543 0 24 0H1175C1186.05 0 1195 8.95431 1195 20V642C1195 653.046 1186.05 662 1175 662H24C12.9543 662 4 653.046 4 642V20Z" fill="#D0CCCC"/>
    </g>
    <defs>
      <filter id="filter0_d_241_39" x="0" y="0" width="1199" height="670" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_39"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_39" result="shape"/>
      </filter>
    </defs>
  </svg>
  <div className='header3' style={{marginTop:'-50px'}}>
  <div className='header2' style={{marginTop:'-311px'}} >
    <h3 style={{marginRight:'100px',marginLeft:'50px'}}>StudentID</h3>
    <input type='text'   />
    <svg style={{width:'38px',height:'38px',fill:'#000',marginLeft:'20px'}} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
    <path d="M19 0C8.50403 0 0 8.50403 0 19C0 29.496 8.50403 38 19 38C29.496 38 38 29.496 38 19C38 8.50403 29.496 0 19 0ZM19 7.35484C22.7234 7.35484 25.7419 10.3734 25.7419 14.0968C25.7419 17.8202 22.7234 20.8387 19 20.8387C15.2766 20.8387 12.2581 17.8202 12.2581 14.0968C12.2581 10.3734 15.2766 7.35484 19 7.35484ZM19 33.7097C14.5028 33.7097 10.473 31.6718 7.77621 28.4847C9.21653 25.7726 12.0359 23.9032 15.3226 23.9032C15.5065 23.9032 15.6903 23.9339 15.8665 23.9875C16.8625 24.3093 17.9044 24.5161 19 24.5161C20.0956 24.5161 21.1452 24.3093 22.1335 23.9875C22.3097 23.9339 22.4935 23.9032 22.6774 23.9032C25.9641 23.9032 28.7835 25.7726 30.2238 28.4847C27.527 31.6718 23.4972 33.7097 19 33.7097Z" fill="black"/>
  </svg>
    </div>
    <div className='header2' style={{marginTop:'-130px'}} >
    <h3 style={{marginRight:'100px',marginLeft:'50px'}}>StudentID</h3>
    <input type='text'  />
    <svg style={{width:'36px',height:'39px',fill:'#000',marginLeft:'20px'}} xmlns="http://www.w3.org/2000/svg" width="36" height="39" viewBox="0 0 36 39" fill="none">
    <path d="M32.4 3.54545H30.6V0H27V3.54545H9V0H5.4V3.54545H3.6C1.62 3.54545 0 5.14091 0 7.09091V35.4545C0 37.4045 1.62 39 3.6 39H32.4C34.38 39 36 37.4045 36 35.4545V7.09091C36 5.14091 34.38 3.54545 32.4 3.54545ZM32.4 35.4545H3.6V12.4091H32.4V35.4545Z" fill="black"/>
</svg>
  </div>
  <div className='header2' style={{marginTop:'60px'}}  >
  <h3 style={{marginRight:'100px'}}>StudentID</h3>
  <input type='text'  />
  </div>
  <div className='header2' style={{marginTop:'280px'}} >
  <h3 style={{marginRight:'100px'}}>StudentID</h3>
  <input type='text'  />
  </div>
  <div className='header2' style={{marginTop:'500px'}} >
  <h3 style={{marginRight:'100px'}}>StudentID</h3>
  <input type='text'  />
  </div>
  </div>
  <Registercancel />
 </div>
  )
}

export default body