import React,{useState} from 'react';
import'./FAQs.css';
import Faq from './faq-item';

const data=[
    {   
        id:1,
        question:"what is GC?",
        answer: "GC coin is a community token that strives to serve the gaming tounrament community on a local and global level. We are attracting talented minds from around the world that share our vision and are joining our groups for Digital art, NFTs, Gamification, and more."
    },
    {
        id:2,
        question:"what tournaments do you partake in?",
        answer: " A few tournaments we are in communications with are: some amazing tournament here and some awesome tournament there, we would also like to bring awarenss to some other tournament here"
    },
    {
        id:3,
        question:"what is the tax?",
        answer: "The tax is built into the contract and is broken into two equal parts. The first part goes into the liquidity and the other half gets distributed to all wallet holders."
    },
    {
        id:4,
        question:"how does redistribution work?",
        answer: "The 4% of the tax is distributed based on how much is in each wallet."
    },
    {
        id:5,
        question:"what does it mean to have a renounced contract?",
        answer: "When GC is launched, the developers will renounce control of the contract which means it cannot be altered."
    },
];



function FAQs() {
   
    


    return (
        <>
        <h1 className='faq-heading' id='FAQ'> FAQs</h1>
        <div className='faqs'>
        

             {data.map((item)=>( 
                       
                    <Faq key={item.id} question={item.question} answer={item.answer} />
                        

                    ))} 

        </div>
            
        </>
    )
}

export default FAQs;
