import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "Question",
    initialState: {
        queue: [],
        answers: [],
        track: 0,
    },
    reducers: {
        FetchQandA: (state, action) => {
            const {questions,answers} = action.payload;
            return {
                ...state,
                queue: questions,
                answers:answers,
            }
        },
        Increment_track: (state) => {
            return {
                ...state,
                track: state.track + 1,
            }
        },
        Decrement_track: (state) => {
            return {
                ...state,
                track: state.track - 1,
            }
        },
        ResetQuestionSlice: (state, action) => {
            return {
                queue: [],
                answers: [],
                track: 0,
            }
        }
    }
})

export const { FetchQandA, Increment_track, Decrement_track,ResetQuestionSlice } = questionSlice.actions;
export default questionSlice.reducer;