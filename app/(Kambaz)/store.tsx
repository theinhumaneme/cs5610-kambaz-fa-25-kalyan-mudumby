"use client";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/[cid]/Assignments/reducer";
import moduleReducer from "./Courses/[cid]/Modules/reducer";
import enrollmentsReducer from "./Courses/enrollmentReducer";
import coursesReducer from "./Courses/reducer";
const store = configureStore({
  reducer: {
    coursesReducer,
    moduleReducer,
    accountReducer,
    assignmentReducer,
    enrollmentsReducer,
  },
});
export default store;
