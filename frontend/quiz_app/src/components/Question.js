import React, { useEffect, useState } from "react";
import useFetchQuestions from "./Custom Hooks/useFetchQuestions";
import { useSelector, useDispatch } from "react-redux";
import { UpdateResultArray } from "./Store/resultSlice.js";
import { FetchQandA } from "./Store/questionSlice.js";
import { questions,answers } from "./data.js";

export default function Question({ setans }) {
    const [checked, setChecked] = useState(undefined);
    const {isloading,apiData,serverError} = useFetchQuestions();
    const storeDataQ = useSelector(state=>state.questions.queue);
    const storeDataA = useSelector(state=>state.questions.answers);
    const dispatch = useDispatch();
    const { track } = useSelector(state => state.questions);


    const handleChange = (i) => {
        setChecked(i);
        console.log("option selected");
        setans(i);

    }

    useEffect(() => {
        if (!isloading && storeDataQ.length > 0 && storeDataA.length > 0) {
            console.log("Data loaded into store", storeDataQ, storeDataA);
        }
    }, [isloading, storeDataQ, storeDataA]);

    useEffect(() => {
        dispatch(UpdateResultArray({ track, checked }));
        setChecked(undefined);
    }, [checked]);

    if(isloading){
        return <>Loading...</>
    }
    
    return (
        <>
            <div>
            <div>
                <p>{storeDataQ[track]?.Question}</p>
                {storeDataQ[track]?.Options.map((option, i) => (
                    <li key={option} style={{ listStyle: "none" }}>
                        <input type="radio" name="option" onChange={() => handleChange(i)} />
                        <label>{option}</label>
                    </li>
                ))}
            </div>
            </div>
        </>
    )
}