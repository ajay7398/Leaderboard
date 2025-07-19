import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    addClaimHistory: (state, action) => {
      state.history.unshift(action.payload); // add new history at top
    },
  },
});

export const { addClaimHistory } = historySlice.actions;
export default historySlice.reducer;
