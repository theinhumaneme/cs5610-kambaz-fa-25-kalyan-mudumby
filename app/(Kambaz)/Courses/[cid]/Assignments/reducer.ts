"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { Assignment } from "../../../types/assignment";

const initialState: { assignments: Assignment[] } = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
    addNewAssignment: (state, { payload: assignment }) => {
      const newAssignment = { ...assignment, _id: crypto.randomUUID() };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId,
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a,
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: Assignment) =>
        a._id === assignmentId ? { ...a, editing: true } : a,
      );
    },
  },
});
export const {
  addNewAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
