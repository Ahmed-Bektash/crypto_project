import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Markets.css'

function Markets() {

    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <div className="Markets-wrapper" id="Markets">
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted playsinline className='video-markets'/> */}
            <img src='/images/stocks.jpg' alt ='hero' className='background-image'/>
            <div className="Markets-container" data-aos="fade-up" data-aos-delay="150"  data-aos-duration="800">
                

                <h1 className="part-title"> We are listed on</h1>

                <article className='Markets' >

                <div className="market">

                <a href='https://youtube.com' target='_' className='Markets-Link'> <img src='/images/gecko.png' alt='gecko' className='Markets-image'></img> </a>


                </div>

                <div className="market">
                <a href='https://youtube.com' target='_' className='Markets-Link'> <img src='/images/coinsbit.png' alt='coinsbit' className='Markets-image'></img> </a>

                </div>

                <div className="market">

                <a href='https://youtube.com' target='_' className='Markets-Link'> <img src='/images/CoinMarketCap.png' alt='CoinMarketCap' className='Markets-image'></img> </a>

                </div>

                <div className="market">
                
                    <a href='https://youtube.com' target='_' className='Markets-Link'> <img src='/images/BitMart.png' alt='BitMart' className='Markets-image'></img> </a>

                </div>

                </article>
                </div>
            
        </div>
    )
}

export default Markets
