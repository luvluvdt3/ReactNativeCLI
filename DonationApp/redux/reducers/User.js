import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage:
    'https://avatars.githubusercontent.com/u/77581509?v=4',
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {logIn, resetToInitialState} = User.actions;
export default User.reducer;