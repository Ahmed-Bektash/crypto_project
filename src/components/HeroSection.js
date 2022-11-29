import React from 'react';
import '../styles/App.css';
import { Button } from './Button';
import '../styles/HeroSection.css';

function HeroSection() {

  
  return (
    <div className='hero-container' id='Home'>
    
      <img src='/images/laptop.jpg' alt ='hero' className='hero_image'/>
      <div className='hero-overlay'></div>
      <i  className='fas fa-gamepad hero-gamepad' />
     <h1 className="page-title">Your favorite gaming coin</h1>
      <h2 className="Hero-subtitle">What are you waiting for?</h2>
     
     {/* Buttons section */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          path='/#About'
        >
          About Our Coin
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          path='/#Tokenomics'
         
        >
          Tokenomics 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          path='/#Timeline'
          
        >
          Our Timeline 
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          path='/#Markets'
        
        >
          Listings
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          path='/#FAQ'
        
        >
          F.A.Q
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
