import React, { useEffect, useState } from "react";
import useFetchQuestions from "./Custom Hooks/useFetchQuestions";
import { useSelector, useDispatch } from "react-redux";
import { UpdateResultArray } from "../Store/resultSlice";
import { FetchQandA } from "../Store/questionSlice";

export default function Question({ setans }) {
    const [checked, setChecked] = useState(undefined);
    const [iserror, setIsError] = useState(false);
    const [isloading,setIsloading] = useState(false);
    const dispatch = useDispatch();
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const { questions, results } = useSelector(state => state);
    const { track } = useSelector(state => state.questions);


    const handleChange = (i) => {
        setChecked(i);
        console.log("option selected");
        setans(i);
    }

    const fetch_data = async() => {
        try {
            setIsError(false);
            setIsloading(true);
            const response = await fetch('http://localhost:5050/questions')
            const resdata = await response.json();
            setQuestion(resdata[0].questions);
            setAnswer(resdata[0].answers);
        } catch (error) {
            setIsError(true);
            console.error(error);
        }
    };

    useEffect(() => {
        fetch_data();
    }, [])

    useEffect(() => {
        dispatch(UpdateResultArray({ track, checked }));
        setChecked(undefined);
    }, [checked]);

    useEffect(()=>{
        dispatch(FetchQandA(question,answer));
        setIsloading(false);
    },[question,answer]);

    useEffect(()=>{
        console.log(question,answer);
    })

    if(isloading){
        return <>Loading...</>
    }
    return (
        <>
            <div>
            <div>
                        <p> {questions?.queue[questions?.track]?.Question}</p>
                        {
                            questions?.queue[questions?.track]?.Options.map((option, i) => (
                                <li key={option} style={{ listStyle: "none" }}>
                                    <input type="radio" name="option" value={false} onChange={() => { handleChange(i) }} />
                                    <label>{option}</label>
                                </li>
                            ))
                        }
                    </div>
            </div>
        </>
    )
}