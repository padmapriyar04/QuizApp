import { combineReducers,configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice.js";
import resultReducer from "./resultSlice.js";

const combined_Reducer = combineReducers({
    questions: questionReducer,
    results: resultReducer,
});

const store = configureStore({
    reducer: combined_Reducer,
})

export default store;