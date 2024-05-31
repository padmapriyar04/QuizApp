import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { Increment_track, Decrement_track } from "./Store/questionSlice.js";
import { PushResult } from "./Store/resultSlice.js";
import { Link } from 'react-router-dom';

export default function Quiz() {
    const { track, queue } = useSelector(state => state.questions);
    const { result } = useSelector(state => state.results);
    const dispatch = useDispatch();
    const [ans, setans] = useState(undefined);

    const nxtQues = () => {
        if (track <= 8) {
            dispatch(Increment_track());
        }
        if(result.length <= track){
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
            <h1>You are Quizzingg..</h1>
            <button onClick={prevQues}>Previous Question</button>
            <button onClick={nxtQues}>Next Question</button>
            <Question setans={SetAns} />
            {(track >= 9) && (
                <div>
                    <h1>Finish Quiz</h1>
                    <Link to='/result'>Results</Link>
                </div>
            )}
        </>
    )
}