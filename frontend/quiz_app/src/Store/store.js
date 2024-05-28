import { combineReducers,configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import resultReducer from "./resultSlice";

const combined_Reducer = combineReducers({
    questions: questionReducer,
    results: resultReducer,
});

const store = configureStore({
    reducer: combined_Reducer,
})

export default store;