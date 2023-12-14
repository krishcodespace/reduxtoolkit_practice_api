import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  singlePost: null,
  //   user: null,
  isLoding: false,
  error: false,
};

export const fetchUserData = createAsyncThunk("FETCH_DATA", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  console.log("result", result);
  return result;
});
export const getSingleData = createAsyncThunk("SINGLE_DATA", async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const result = await response.json();
  console.log("result", result);
  return result;
});

export const deleteUser = createAsyncThunk("DELETE_USER", async () => {});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.isLoding = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        console.log("action", action);
        state.user = action.payload;
        state.isLoding = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = true;
        state.user = null;
        state.isLoding = false;
      })
      .addCase(getSingleData.pending, (state, action) => {
        state.isLoding = true;
      })
      .addCase(getSingleData.fulfilled, (state, action) => {
        console.log('action', action)
        state.singlePost = action.payload;
        state.isLoding = false;
      })
      .addCase(getSingleData.rejected, (state, action) => {
        state.error = true;
        state.singlePost = null;
      });
  },
});

export const { reducer } = userSlice;

export default userSlice.reducer;
