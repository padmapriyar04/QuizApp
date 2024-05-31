import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from '../Store/questionSlice.js';
import Fetch_Data from "../api_req.js";



export default function useFetchQuestions() {
    const [getData,setGetData] = useState({isloading: false,apiData:[],serverError:null});
    const dispatch = useDispatch();

    useEffect(()=>{
        setGetData(prev=>({...prev,isloading:true}));
        (async()=>{
            try{
                let {questions,answers}= await Fetch_Data();
                if(questions.length > 0){
                    setGetData(prev=>({...prev,apiData:questions}));
                    setGetData(prev=>({...prev,isloading:false}));
                    dispatch(Action.FetchQandA({questions,answers}));
                }else{
                    throw new Error("Questions not Available");
                }
            }catch(error){
                setGetData(prev=>({...prev,isloading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }
        })();
    },[dispatch]);
    return getData;
}



