import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: {
    _id: "234",
    username: "dark_knight",
    password: "wayne123",
    firstName: "Bruce",
    lastName: "Wayne",
    email: "bruce@wayne.com",
    dob: "1972-02-19",
    role: "STUDENT",
    loginId: "001234562S",
    section: "S101",
    lastActivity: "2020-11-02",
    totalActivity: "15:32:43",
  },
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
