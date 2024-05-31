import { useSelector,useDispatch } from "react-redux";
import * as Action from './Store/questionSlice.js';

export default async function Fetch_Data(){
    try{
        const response = await fetch('http://localhost:5050/questions')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resdata = await response.json();
        console.log("API request done",resdata[0].questions);
        return {"questions":resdata[0].questions,"answers": resdata[0].answers};
    }catch(error){
        throw new Error("Data Fetching failed..");
    }
}
