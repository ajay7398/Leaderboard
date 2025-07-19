import { createSlice } from '@reduxjs/toolkit';

const selectedUserSlice = createSlice({
  name: 'currentUser',
  initialState: { 
    value: {}, 
  },
  reducers: {
    //  the selected user
    setUser: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setUser} = selectedUserSlice.actions;
export default selectedUserSlice.reducer;