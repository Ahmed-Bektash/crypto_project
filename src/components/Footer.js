import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  //Telegram, Reddit page , Github of code
  return (
    <div className='footer-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted playsinline className='video-footer'/> */}
        {/* <img src='/images/gaming-pc.jpg' alt ='hero' className='background-image'/> */}
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Navigation</h2>
            <Link to='/'>Home</Link>
            <Link to='/#About'>About</Link>
            <Link to='/#Timeline'>Timeline</Link>
            <Link to='/#Tokenomics'>Tokenomics</Link>
            <Link to='/#Where'>Where to find us</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              GC
              <i className='fas fa-gamepad' />
            </Link>
          </div>
          <small className='website-rights'>GC © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link reddit'
              to='/'
              target='_blank'
              aria-label='Reddit'
            >
              <i className='fab fa-reddit-alien' />
            </Link>
            <Link
              className='social-icon-link telegram'
              to='/'
              target='_blank'
              aria-label='Telegram'
            >
              <i className='fab fa-telegram-plane' />
            </Link>
            <Link
              className='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='github'
            >
              <i className='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
