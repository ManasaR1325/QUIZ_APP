import React, { useState } from 'react'
import {data} from './Data'
import './Style.css';
export default function QuizApp() {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false)
    
    const correctAnswer = ['Option1','Option2','Option3','Option2','Option3','Option4','Option3','Option1','Option2'] ;
    
    const handleNext = () =>{
        if(option === correctAnswer[index]){
            setScore(score+1)
        }
    if(index < data.length - 1){
        setIndex(index + 1);
        setOption(null);

     }   else {
        setQuizFinished(true);

     }
    };
     if (quizFinished) {
        return (
            <> 
            <h1>Quiz Finished....</h1>
            <h1> Your score:{score} out of  {data.length}</h1>
            </>
        )
     }
     const handleSelect = (optn) => {
        setOption(optn);
     }

     return (
    <div className='quiz'>
        <h1>Quiz</h1>
    
    <h3>{data[index].Question}</h3>
<ul>
    <li className={option === 'Option1'?'demo':''}
        onClick={()=>{handleSelect('Option1')}}
        >{data[index].Option1}</li>
    <li  className={option === 'Option2'?'demo':''}
    onClick={()=>{handleSelect('Option2')}}
        >{data[index].Option2}</li>
    <li  className={option === 'Option3'?'demo':''}
     onClick={()=>{handleSelect('Option3')}}
        >{data[index].Option3}</li>
    <li  className={option === 'Option4'?'demo':''}
    onClick={()=>{handleSelect('Option4')}}
        >{data[index].Option4}</li>
</ul>
<button onClick={handleNext} disabled = {!option}>Next</button>
<h5>Question {index+1} of {data.length}</h5>
</div>
  )
};

