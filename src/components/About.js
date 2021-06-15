import React, {useEffect} from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function About(){

    useEffect(()=>{
        AOS.init();
    },[]);


return(
<section className="About-wrapper" id='About'>

<div className='about-overlay'></div>
<video src='/videos/video-1.mp4' className='video-About' type="video/mp4" autoPlay loop muted playsInline />

    {/*********************** Stats section **********************************************/}

<div className="Stats-container" data-aos="fade-up" data-aos-delay="100"  data-aos-duration="800">

    <h1 className="part-title"> Our Stats</h1>

    <article className='Stats' >

    <div className="stat">

    <h1> 300k</h1>
    <p>GC holders</p>
   
    </div>
    
    <div className="stat">

    <h1> $ 200M </h1>
    <p> Our market cap</p>
    </div>
    
    <div className="stat">

    <h1> 20 </h1>
    <p> gaming tournaments funded</p>
   
    </div>

    <div className="stat">

    <h1> 20K </h1>
    <p>Discord and Telegram followers</p>
   
    </div>
    
    </article>
</div>

 {/*********************** About section **********************************************/}

<div className="About-container" data-aos="fade-down"  data-aos-delay="100"  data-aos-duration="800">

<h1 className="part-title"> About Us</h1>

    <article className="About">

    <p> GC is a coin made by gamers for gamers, it's aim is to support the gaming tounrament space and provide gamers with a community through which they can have a good time and get rich</p>

    <h2> Our values</h2>

        <ul className="values">
            
            <li className="listItem">
             <h3> <span><i className="fas fa-gamepad gamepad-About"></i></span>  Transparency</h3>
               <p>we have an open communication policy with all our holders and followers</p>
            </li>

            <li>
                <h3> <span><i className="fas fa-gamepad gamepad-About"></i></span> Fun</h3>
                <p>we want to have fun first and foremost so we support the good sport spirit</p>
            </li>

            
            <li>
                <h3><span><i className="fas fa-gamepad gamepad-About"></i></span> community first</h3>
                <p>we realize we will not go far without our community so we put our comunity first!</p>
            </li>

        </ul>


    </article>
</div>
    
</section>


);


}




export default About;