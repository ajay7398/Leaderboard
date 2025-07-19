import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // [{_id, name, totalPoints}]
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    updateUserPoints: (state, action) => {
      const { userId, points } = action.payload;
      const user = state.users.find((u) => u._id === userId);
      if (user) {
        user.totalPoints += points;
      }
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    
  },
});

export const { setUsers, updateUserPoints, addUser } = userSlice.actions;
export default userSlice.reducer;
