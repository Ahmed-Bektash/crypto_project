import React,{useState} from 'react';
import'./FAQs.css';



function Faq({question,answer}) {
    
    const [show,setShow]=useState(false);

    
const HandleClick = ()=>{
    setShow(!show);

}

    return (
        <>
        <div className={`faq-item ${show?'ques-show':''}`}>

                <div className={`faq-ques`}>
                    
                    <h1 className='question-text'>{question}</h1> 

                    <i className={`fas fa-${show?'minus':'plus'} quesToggle`} onClick={HandleClick}></i>

                </div>
                
                <div className={`answer-text faq ans-${show?'show':'hide'}`}>

                    <h3>{answer}</h3>

                </div>

            </div>
       
            
        </>
    )
}

export default Faq;
