import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { Increment_track, Decrement_track } from "./Store/questionSlice.js";
import { PushResult } from "./Store/resultSlice.js";
import { Link } from 'react-router-dom';
import logo from '../images/question-mark.png'
import party_logo from '../images/confetti.png'

export default function Quiz() {
    const { track, queue } = useSelector(state => state.questions);
    const { result } = useSelector(state => state.results);
    const dispatch = useDispatch();
    const [ans, setans] = useState(undefined);

    const nxtQues = () => {
        if (track <= 8) {
            dispatch(Increment_track());
        }
        if (result.length <= track) {
            dispatch(PushResult(ans));
            setans(undefined);
        }
    }

    const prevQues = () => {
        if (track > 0) {
            dispatch(Decrement_track());
        }

    }

    const SetAns = (input) => {
        setans(input);
    }

    return (
        <>
            <div className="container-fluid m-0 p-0" style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundImage: 'linear-gradient(135deg, #09203f 10%, #537895 100%)', overflowY: 'auto' }}>
                {(track < 9) && (
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center mt-7" style={{ marginTop: '20vh' }}>
                            <img src={logo} alt="" style={{ width: '100px', height: '70px', marginRight: '12px' }} />
                            <h1 className="text-center fs-1 text-light" style={{ fontSize: 'xlarge' }} >It's Quiz Time!</h1>
                        </div>
                    </div>
                )}
                {(track>=9) &&(
                    <div className="container">
                    <div className="d-flex align-items-center justify-content-center mt-7" style={{ marginTop: '20vh' }}>
                    <img src={party_logo} alt="" style={{ width: '60px', height: '80px', marginRight: '12px' }} />
                        <h1 className="text-center fs-1 text-light" style={{ fontSize: 'xlarge' }} >Congrats on completing the quiz!</h1>
                    </div>
                </div>
                )}
                <div>
                    <div style={{ marginTop: '10vh' }}>
                        <Question setans={SetAns} style={{ marginTop: '5vh' }} />
                        {(track >= 9) && (
                            <div className="container text-center ">
                                <h1 className="fs-2 text-light"> Click below to view your results.</h1>
                                <Link
                                    className=" row justify-content-center btn btn-success mt-4"
                                    to={'/result'}
                                    style={{ width: 'fit-content', margin: 'auto' }}
                                >
                                    View Results
                                </Link>
                                <h2 className="fs-4 text-light " style={{marginTop:'6vh'}}>Thank you for participating! We hope to see you again soon:)</h2>
                            </div>
                        )}
                    </div>
                </div>
                {(track < 9) && (
                    <div className="container d-flex justify-content-between my-5" style={{ marginTop: '5vh' }}>
                        <button className="btn btn-primary" onClick={prevQues}>Previous Question</button>
                        <button className="btn btn-success" onClick={nxtQues}>Next Question</button>
                    </div>
                )}
            </div>
        </>
    )
}
