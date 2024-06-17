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
            <div className="container-fluid main-container p-0 m-0" style={{ width: '100%', height: '100vh',overflow:'hidden', backgroundImage: 'linear-gradient(135deg, #09203f 10%, #537895 100%)' }}>
                <div className="container" style={{ marginTop: '10vh',marginBottom:'2vh',height:'100%' }} >
                    <h1 className="text-center text-light" style={{fontSize:'3vw',maxWidth:'70vw',margin:'auto', width: 'fit-content',marginTop:'3vh',color:'linear-gradient(to right, white, rgb(120, 151, 237))'}} >Welcome,Let's start Quizzing</h1>
                    <h2 className="text-center fw-light mt-4 text-light" style={{fontSize:'2vw',color:'linear-gradient(to right, white, rgb(120, 151, 237))'}} >This quiz is designed to test your general knowledge.</h2>
                    <h2 className="text-center fw-light text-light "style={{fontSize:'2vw',color:'linear-gradient(to right, white, rgb(120, 151, 237))'}} >Are you ready to challenge yourself and learn something new?</h2>
                    <div className="container text-light" style={{ marginTop: '8vh',maxWidth:'45vw' }}>
                        <div className="row justify-content-center mt-3"style={{fontSize:'1.6vw'}}>
                            Rules for the Quiz
                        </div>
                        <ol className="list-group list-group-numbered" style={{ maxwidth: '45vw', margin: 'auto' }}>
                            <li className="list-group-item mt-3 mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)',fontSize:'1.2vw',maxHeight:'7vh' }}>You are expected to answer 10 questions</li>
                            <li className="list-group-item  mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)' ,fontSize:'1.2vw',maxHeight:'7vh'}}>10 points are awarded for each correct answer</li>
                            <li className="list-group-item  mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)',fontSize:'1.2vw',maxHeight:'7vh'}}>Each question has three options, out of which only one option is correct</li>
                            <li className="list-group-item  mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)',fontSize:'1.2vw',maxHeight:'7vh' }}>The Result will be displayed at the end of the quiz</li>
                        </ol>
                    </div>
                    <div className="row content-justify-center"style={{marginTop:'2vh'}}>
                        <form onSubmit={handleClick} style={{ margin: 'auto',maxWidth:'40vw' }}>
                            <input className="form-control text-center" type="search" aria-label="Search" placeholder="Enter your username" ref={inputRef} style={{fontSize:'1vw'}}/>
                        </form>
                        <div className="d-flex justify-content-center align-content-center">
                            <Link
                                className=" row justify-content-center btn btn-secondary mt-4"
                                to={'quiz'}
                                onClick={() => { setUserId(inputRef.current.value); }}
                                style={{ width: 'fit-content', margin: 'auto',maxWidth:'20vw',maxHeight:'7vh',fontSize:'1.2vw' }}
                            >
                                Start the Quiz
                            </Link>
                        </div>
                        <p className="text-center fs-7 text-light" style={{fontSize:'1.2vw',marginTop:'2vh',marginBottom:'7vh'}}>Good luck, and have fun!</p>
                    </div>
                </div>
            </div>
        </>
    )
}