"use client";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import moduleReducer from "./Courses/[cid]/Modules/reducer";
import coursesReducer from "./Courses/reducer";
const store = configureStore({
  reducer: { coursesReducer, moduleReducer, accountReducer },
});
export default store;
