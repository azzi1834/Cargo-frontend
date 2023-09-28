import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerUser = createAsyncThunk("registerUser", async (body) => {
  const response = await axios.post(
    "http://localhost:4000/auth/signup",

    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("response",response);
  localStorage.setItem("jwtToken", response.data.token);
  localStorage.setItem("email", response?.data?.dataValues?.email);
  return response.data;
});
export const loginUser = createAsyncThunk("loginUser", async (body) => {
  const response = await axios.post(
    "http://localhost:4000/auth/login",

    body
  );
  localStorage.setItem("jwtToken", response.data.token);
  return response;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    userResponse: "",
    isCompleted: false,
  },
  extraReducers: (builder) => {
    //------------state manage for user registration
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isCompleted = true;
      state.userResponse = action?.payload?.data?.dataValues;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    //------------State manage for user login
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isCompleted = true;
      state.userResponse = action?.payload?.data?.dataValues;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
