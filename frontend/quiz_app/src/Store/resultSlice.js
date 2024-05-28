import {createSlice} from '@reduxjs/toolkit';

export const resultSlice = createSlice({
    name: "Result",
    initialState:{
        userId: null,
        result: [],
    },
    reducers: {
        SetUserId:(state,action)=>{
            state.userId = action.payload;
        },
        PushResult :(state,action)=>{
            state.result.push(action.payload);
        },
        ResetResultSlice: (state,action)=>{
            return{
                userId: null,
                result:[],
            }
        },
        UpdateResultArray : (state,action)=>{
            const {track,checked} = action.payload;
            state.result.fill(checked,track,track+1);
        }
    }
})

export const {SetUserId,PushResult,ResetResultSlice,UpdateResultArray} = resultSlice.actions;
export default resultSlice.reducer;