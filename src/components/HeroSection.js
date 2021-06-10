import React,{useRef} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

    const videoRef= useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 0.6;
    };
  return (
    <div className='hero-container' id='Home'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted ref={videoRef} onCanPlay={()=>setPlayBack()} className='video-hero'/> */}
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted playsinline className='video-hero'/> */}
      <img src='/images/laptop.jpg' alt ='hero' className='hero_image'/>
      <div className='overlay'></div>
      <i  className='fas fa-gamepad hero-gamepad' />
     <h1>Your favorite gaming coin</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/#About'
        >
          About Our Coin
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/#Tokenomics'
         
        >
          Tokenomics 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/#Timeline'
          
        >
          Our Timeline 
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/#Markets'
        
        >
          Listings
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/#FAQ'
        
        >
          F.A.Q
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
