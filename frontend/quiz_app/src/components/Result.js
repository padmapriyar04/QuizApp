import React from "react";
import {Link} from 'react-router-dom';
import { ResetQuestionSlice } from "../Store/questionSlice";
import { ResetResultSlice } from "../Store/resultSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Result(){
    const {result,userId} = useSelector(state=>state.results);
    const {answers} = useSelector(state=>state.questions);
    const dispatch = useDispatch();
    const onclickhandler = ()=>{
        dispatch(ResetQuestionSlice());
        dispatch(ResetResultSlice());
    }
    const attempted_questions = result.filter((r)=> r!== undefined);
    const attempted_count = attempted_questions.length;
    let points=0;
    for(let i=0;i<9;i++){
        if(result[i] === answers[i]){
            points += 10;
        }
    }

    return(
        <>
        <div>
            <span>UserName:</span>
            <span>{userId}</span>
        </div>
        <div>
            <span>Total Quiz Points:</span>
            <span>90</span>
        </div>
        <div>
            <span>Total Questions:</span>
            <span>9</span>
        </div>
        <div>
            <span>Questions attempted</span>
            <span>{attempted_count}</span>
        </div>
        <div>
            <span>Quiz Points earned:</span>
            <span>{points}</span>
        </div>
        <div>
            <span>Quiz Result:</span>
            <span>{(points>40)?"Passed":"Failed"}</span>
        </div>
        <div>
            <Link to={'/'} onClick={onclickhandler}>Restart Quiz</Link>
        </div>
        </>
    )
}