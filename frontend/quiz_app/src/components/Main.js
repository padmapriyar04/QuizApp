import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetUserId } from "./Store/resultSlice.js";

export default function Main(){
    const dispatch = useDispatch();
    const inputRef = useRef();
    const setUserId = (val)=>{
        if(val){
            dispatch(SetUserId(val));
        }
    }
     return(
        <>
            <h1>Welcome,Let's start Quizzing</h1>
            <h2>Rules for the Quiz</h2>
            <ol>
                <li>You will have to answer 10 questions</li>
                <li>10 points are awarded fro each correct answer</li>
                <li>Each question has three options, out of which only one option is correct</li>
                <li>The Result will be displayed at the end</li>
            </ol>
            <div>
                <input type="text" placeholder="Enter your username" ref={inputRef}/>
                <Link to={'quiz'} onClick={()=>{setUserId(inputRef.current.value)}}>Start the Quiz</Link>
            </div>
        </>
    )
}