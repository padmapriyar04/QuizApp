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
        <>
            <div className="container-fluid m-0 p-0 text-light" style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundImage: 'linear-gradient(135deg, #09203f 10%, #537895 100%)', position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img src={exam_logo} alt="Background Image" className="img-fluid" style={{ width: '50vw', height: '80vh', opacity: 0.2, zIndex: 1, marginTop: '10vh', marginLeft: '25vw' }} />
                </div>
                <div className="container position-absolute text-warning" style={{ top: '25vh', width: '30vw', left: '35vw', height: '60vh' }}>
                    <div className="mb-4 fs-3 d-flex justify-content-between">
                        <span  >UserName :</span>
                        <span>{userId}</span>
                    </div>
                    <div className="mb-4 fs-3 d-flex justify-content-between" >
                        <span>Total Quiz Points :</span>
                        <span>90</span>
                    </div>
                    <div className="mb-4 fs-3 d-flex justify-content-between" >
                        <span >Total Questions :</span>
                        <span>9</span>
                    </div>
                    <div className="mb-4 fs-3 d-flex justify-content-between" >
                        <span >Questions attempted :</span>
                        <span>{attempted_count}</span>
                    </div>
                    <div className="mb-4 fs-3 d-flex justify-content-between" >
                        <span >Quiz Points earned :</span>
                        <span>{points}</span>
                    </div>
                    <div className="mb-4 fs-3 d-flex justify-content-between" >
                        <span >Quiz Result :</span>
                        <span>{(points > 40) ? "Passed" : "Failed"}</span>
                    </div>
                </div>
                <div>
                    <Link to={'/'}  className=" row justify-content-center btn btn-success mt-4" onClick={onclickhandler}>Restart Quiz</Link>
                </div>
            </div>
        </>
    )
}