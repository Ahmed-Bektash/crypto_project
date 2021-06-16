import React from 'react'
import 'aos/dist/aos.css';

import './Markets.css'

function Markets() {


    return (
        <div className="Markets-wrapper" id="Markets">

            <img src='/images/stocks.jpg' alt ='hero' className='hero_image markets-background-img'/>
            <div className='hero-overlay'></div>

            <div className="Markets-container" data-aos="zoom-in" data-aos-delay="300"  data-aos-duration="800">
                

                <h1 className="markets-title"> We are listed on</h1>

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
