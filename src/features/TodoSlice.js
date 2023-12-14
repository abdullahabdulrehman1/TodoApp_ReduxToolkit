import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName, fathername, age } = action.payload;
      state.push({ firstName, lastName, fathername, age });
    },
   
  },
});

export const { addUser, update,deleteUser } = userSlice.actions;

export default userSlice.reducer;
