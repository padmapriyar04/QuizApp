import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetUserId } from "./Store/resultSlice.js";

export default function Main() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const setUserId = (val) => {
        if (val) {
            dispatch(SetUserId(val));
        }
    }
    const handleClick = (event) => {
        event.preventDefault();
        setUserId(inputRef.current.value);
    };
    return (
        <>
            <div className="container-fluid main-container p-0" style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundImage: 'linear-gradient(135deg, #09203f 10%, #537895 100%)' }}>
                <div className="container" style={{ marginTop: '20vh' }} >
                    <h1 className="text-center fs-1 text-light">Welcome,Let's start Quizzing</h1>
                    <h2 className="text-center fs-4  fw-light mt-4 text-light" >This quiz is designed to test your general knowledge.</h2>
                    <h2 className="text-center fs-4 fw-light text-light ">Are you ready to challenge yourself and learn something new?</h2>
                    <div className="container fs-6 text-light" style={{ marginTop: '3%' }}>
                        <div className="row justify-content-center fs-5 mt-3">
                            Rules for the Quiz
                        </div>
                        <ol className="list-group list-group-numbered" style={{ width: '50%', margin: 'auto' }}>
                            <li className="list-group-item mt-3 mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)' }}>You have to answer 10 questions</li>
                            <li className="list-group-item  mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)' }}>10 points are awarded for each correct answer</li>
                            <li className="list-group-item  mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)' }}>Each question has three options, out of which only one option is correct</li>
                            <li className="list-group-item  mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)' }}>The Result will be displayed at the end of the quiz</li>
                        </ol>
                    </div>
                    <div className="container row content-justify-center">
                        <form onSubmit={handleClick} style={{ width: '40%', margin: 'auto' }}>
                            <input className="form-control me-2" type="search" aria-label="Search" placeholder="Enter your username" ref={inputRef} />
                        </form>
                        <div className="d-flex justify-content-center align-content-center">
                            <Link
                                className=" row justify-content-center btn btn-secondary mt-4"
                                to={'quiz'}
                                onClick={() => { setUserId(inputRef.current.value); }}
                                style={{ width: 'fit-content', margin: 'auto' }}
                            >
                                Start the Quiz
                            </Link>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <p className="text-center fs-7 text-light">Good luck, and have fun!</p>
                    </div>
                </div>
            </div>
        </>
    )
}