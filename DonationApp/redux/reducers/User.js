import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Tu',
  lastName: 'Penguin',
  userId: 1,
  profileImage: 'https://avatars.githubusercontent.com/u/77581509?v=4',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: state => {
      return initialState;
    },
  },
});

export const {resetToInitialState, updateFirstName} = User.actions;
export default User.reducer;
