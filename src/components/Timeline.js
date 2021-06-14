import React,{useRef,useLayoutEffect,useState} from 'react';
import './Timeline.css';

//you can also just use the react library AOS to animate on scroll if there are too many nodes.

function Timeline(){

    const [show,setShow]=useState({
        MileStone_one:false,
        MileStone_two:false,
        MileStone_three:false,
        MileStone_four:false,
        MileStone_five:false
    }); //useState will help control whether or not each milestone is shown

    //use ref for each element of the timeline
    const MileStone1= useRef(null);
    const MileStone2= useRef(null);
    const MileStone3= useRef(null);
    const MileStone4= useRef(null);
    const MileStone5= useRef(null);

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
      
        const item1Pos = topPos(MileStone1.current);
        const item2Pos = topPos(MileStone2.current);
        const item3Pos = topPos(MileStone3.current);
        const item4Pos = topPos(MileStone4.current);
        const item5Pos = topPos(MileStone5.current);
         
    
        const onScroll = () => {
          
          const scrollPos = window.scrollY + window.innerHeight;
        
          if (scrollPos - item1Pos > 300) {
            setShow(state => ({ ...state, MileStone_one: true })); //put the spread operator for state here to avoid a large amount of unnecessary renders
          }  
        if (scrollPos - item2Pos > 500) {
            setShow(state => ({ ...state, MileStone_two: true }));
          } 
           if (scrollPos - item3Pos > 500) {
            setShow(state => ({ ...state, MileStone_three: true }));
          } 
          if (scrollPos - item4Pos > 600) {
            setShow(state => ({ ...state, MileStone_four: true }));
          } 
          if (scrollPos - item5Pos > 800) {
            setShow(state => ({ ...state, MileStone_five: true }));
          }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll); //important for memory leaks
      }, []);
      

/*********************************************************************BELOW HERE FOR ONE ITEM ONLY***************************************/
    // function isElementInViewport() {
    //     var rect = listItem.current.getBoundingClientRect();
    //     return (
    //       rect.top >= 0 &&
    //       rect.left >= 0 &&
    //       rect.bottom <=
    //         (window.innerHeight || document.documentElement.clientHeight) &&
    //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    //   }

    //   function callbackFunc() {
    //     if (isElementInViewport()) {
    //     //    console.log(listItem.current.classList);
    //         listItem.current.classList.add("in-view");
    //     }
    //   }

    //   useEffect(() => {
    //     window.addEventListener("scroll", callbackFunc, true);
    //     return () => {
    //       window.removeEventListener("scroll", callbackFunc, true);
    //     };
    //   }, []);
      
/*********************************************************************ABOVE HERE FOR ONE ITEM ONLY***************************************/
    return(
      <section className="Timeline" id='Timeline'>
         <div className='timeline-overlay'></div>
        <video src='/videos/video-1.mp4' autoPlay loop muted playsInline className='video-Timeline'/>
       
        
        <h1 className='timeline-heading'> Our Timeline</h1>
        <ul>
        
          <li ref={MileStone1} className={`${show.MileStone_one ? " in-view" : ""}`}>
           
            <div>
              <time>June 2021</time> 
              <img src="/images/team.jpg" alt="launch" className='Timeline-Image'></img>
              <p className='subtext'>GC landing page is launched</p>
            </div>
          </li>
          <li ref={MileStone2} className={`${show.MileStone_two ? " in-view" : ""}`}>
            
            <div>
              <time>July 2021</time>
              <img src="/images/tokenomics.jpg" alt="launch" className='Timeline-Image'></img>
              <p className='subtext'> The coin is launched on coin base </p> 
            </div>
          </li>
      
          <li ref={MileStone3} className={`${show.MileStone_three ? " in-view" : ""}`}>
            <div>
              <time>August 2021</time> 
              <img src="/images/stocks.jpg" alt="launch" className='Timeline-Image'></img>
              <p className='subtext'> Markets open and GC goes to the moon </p>
            </div>
          </li>
          <li ref={MileStone4} className={`${show.MileStone_four ? " in-view" : ""}`}>
            
            <div>
              <time>August 2021</time> 
              <img src="/images/gaming.jpg" alt="launch" className='Timeline-Image'></img>
              <p className='subtext'> First tournament is launched and gamers buy GC </p>
            </div>
          </li>
          <li ref={MileStone5} className={`${show.MileStone_five ? " in-view" : ""}`}>
            <div>
            <time>August 2021</time> 
              <img src="/images/road.jpg" alt="launch" className='Timeline-Image'></img>
              <p className='subtext'> The road ahead is positive </p>
              </div>
          </li>
          
        </ul>
      </section>
        
        
    );

}


export default Timeline;