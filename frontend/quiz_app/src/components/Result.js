import React from "react";
import { Link } from 'react-router-dom';
import { ResetQuestionSlice } from "./Store/questionSlice.js";
import { ResetResultSlice } from "./Store/resultSlice.js";
import { useDispatch, useSelector } from "react-redux";
import exam_logo from '../images/exam.png'

export default function Result() {
    const { result, userId } = useSelector(state => state.results);
    const { answers } = useSelector(state => state.questions);
    //const answers = [0, 0, 0, 2, 0, 2, 2, 1, 2];
    console.log(answers);
    console.log(result);
    const dispatch = useDispatch();
    const onclickhandler = () => {
        dispatch(ResetQuestionSlice());
        dispatch(ResetResultSlice());
    }
    const attempted_questions = result.filter((r) => r !== undefined);
    const attempted_count = attempted_questions.length;
    let points = 0;
    for (let i = 0; i < 9; i++) {
        if (result[i] === answers[i]) {
            points += 10;
        }
    }

    return (
        <div className="container-fluid m-0 p-0 text-light d-flex flex-column align-items-center justify-content-center" style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundImage: 'linear-gradient(135deg, #09203f 10%, #537895 100%)', position: 'relative' }}>
            <h2 className="mb-4" style={{ fontSize: '3vw',color:'#FFFACD'}}>Quiz Completed!</h2>
            <p className="mb-4" style={{ fontSize: '2vw',color:'#E6E6FA' }}>Congratulations on completing the quiz! Here's a summary of your performance:</p>

            <div className="container text-center position-relative" style={{ maxWidth: '60%', maxHeight: '60%',color:'#FFFFF0',  backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '10px', padding: '3vh', marginBottom: '5vh', marginTop: '3vh' }}>
                <div className="mb-3 d-flex justify-content-between flex-wrap" style={{ fontSize: '1.5vw' }}>
                    <span>UserName :</span>
                    <span>{userId}</span>
                </div>
                <div className="mb-3 d-flex justify-content-between flex-wrap" style={{ fontSize: '1.5vw' }}>
                    <span>Total Quiz Points :</span>
                    <span>90</span>
                </div>
                <div className="mb-3 d-flex justify-content-between flex-wrap" style={{ fontSize: '1.5vw' }}>
                    <span>Total Questions :</span>
                    <span>9</span>
                </div>
                <div className="mb-3 d-flex justify-content-between flex-wrap" style={{ fontSize: '1.5vw' }}>
                    <span>Questions attempted :</span>
                    <span>{attempted_count}</span>
                </div>
                <div className="mb-3  d-flex justify-content-between flex-wrap" style={{ fontSize: '1.5vw' }}>
                    <span>Quiz Points earned :</span>
                    <span>{points}</span>
                </div>
                <div className="mb-3  d-flex justify-content-between flex-wrap" style={{ fontSize: '1.5vw' }}>
                    <span>Quiz Result :</span>
                    <span>{(points > 40) ? "Passed" : "Failed"}</span>
                </div>
            </div>
            <p className="mt-4" style={{ fontSize: '1.5vw',color:'#B0E0E6' }}>
                {(points > 40) ? "Great job! Keep up the good work..." : "Don't worry, Try again and improve your score!"}
            </p>
            <Link to={'/'} className="btn btn-warning mt-4" onClick={onclickhandler} style={{ marginBottom: '3vh',padding:'0 auto' }}>Restart Quiz</Link>
        </div>
    );
}