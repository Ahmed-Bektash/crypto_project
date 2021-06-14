import React,{useState,useLayoutEffect,useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import './Tokenomics.css';
import AOS from 'aos';
import 'aos/dist/aos.css';






function Tokenomics() {
    
    const [DesiredWidth,setDesiredWidth]=useState(false);
    const[width,setWidth]=useState(600);

    useEffect(()=>{
        AOS.init();
    },[]);
    
    /************************Logic for adjusting for mobile************************/
    useLayoutEffect(()=>{

        const calculateMobileWidth=()=>{
            const mobWidth=window.innerWidth;
    
            if(mobWidth<960){
                setDesiredWidth(true);
                setWidth(350);
                
            }else if(mobWidth >=960){
                setDesiredWidth(false);
                setWidth(500);
            }

            
        }
        
        window.addEventListener("resize",calculateMobileWidth);
        window.addEventListener("load",calculateMobileWidth);
        return () => {
            window.removeEventListener("resize",calculateMobileWidth);
            window.removeEventListener("load",calculateMobileWidth);
    }

        
          
    },[]);


    /************************Chart data************************/
    const FirstchartData = {
        labels: ['circulating supply', 'initial burn', 'Burned so far'],
        datasets: [
          {
            label: 'Tokenomics',
            data: [500000, 400000, 30000],
            backgroundColor: [
              '#E51B22',
              '#FFA200',
              '#FFE301',
            ],
            borderColor: [
              '#E51B22',
              '#FFA200',
              '#FFE301',
            ],
            borderWidth: 1,
          },
        ]
      };

      const SecondChartData = {
        labels: ['Liquidity', 'Burn', 'Redistribution'],
        datasets: [
          {
            label: 'Tokenomics',
            data: [50, 23, 27],
            backgroundColor: [
              '#E51B22',
              '#FFA200',
              '#FFE301',
            ],
            borderColor: [
              '#E51B22',
              '#FFA200',
              '#FFE301',
            ],
            borderWidth: 1,
          },
        ]
      };

      const options = {
         hoverOffset:15,
         maintainAspectRatio:true,
         responsive:true,
         plugins:{
             legend:{
                 position:`${DesiredWidth?'bottom':'right'}`,
                 labels:{
                     padding:DesiredWidth?15:20,
                     font:{
                         size:DesiredWidth?12:20
                     },
                     color: 'white'
                 }
             }
             
         },
         layout:{
             padding:20
         }
      };


/************************Rendering************************/
     

    return (
        <div className='Tokenomics-wrapper' id='Tokenomics'>
          <img src='/images/game-over.jpg' alt ='hero' className='background-image'/>
          

            <div className='supply-container'>

                <div className='supply-text' data-aos="fade-right" data-aos-delay="500"  data-aos-duration="800">
                    <h1>The circulating supply is 500,000</h1>
                    <h1>The initial burn is 400,000</h1>
                    <h1>what is burnt so far is 30,000</h1>
                </div>
            
           
                <div className="pie" style={{width:`${width}px`}}>

                    <Pie data={FirstchartData} options={options}  data-aos="zoom-in" data-aos-delay="500"  data-aos-duration="800"/>

                </div>
           </div>

           <div className='supply-container'>

           <div className="pie" style={{width:`${width}px`}}>

                <Pie data={SecondChartData} options={options}  data-aos="zoom-out" data-aos-delay="500"  data-aos-duration="800"/>

                </div>

                <div className='supply-text' data-aos="fade-right" data-aos-delay="300"  data-aos-duration="800">
                    <h1>The circulating supply is 500,000</h1>
                    <h1>The initial burn is 400,000</h1>
                    <h1>what is burnt so far is 30,000</h1>
                </div>


               
                </div>


        </div>
    )
}

export default Tokenomics
