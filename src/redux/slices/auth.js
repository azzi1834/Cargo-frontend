import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerUser = createAsyncThunk("registerUser", async (body) => {
  const response = await axios.post(
    "http://localhost:4000/auth/signup",
    {
      body,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  localStorage.setItem("jwtToken", response.data.token);
  console.log("respppppp", response.data.token);
  if (response.status === 0) {
    // toast("User already exists");
  }
  return response.data;
});
export const loginUser = createAsyncThunk("loginUser", async (body) => {
  const result=false;
  const response = await axios.post(
    "http://localhost:4000/auth/login",
    {
      body,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  localStorage.setItem("jwtToken", response.data.token);
  if (response.status === 0) {
    return {
      result
    }
  }
  return {
    status:response.data.status,
    message:response.data.message
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    status: 0,
    message: "",
  },
  extraReducers: (builder) => {
    //------------state manage for user registration
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.status = action.payload.status;
      state.message = action.payload.message;
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
      state.status = action.payload.status;
      state.message = action.payload.message;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      // state.isError = true;
    });
  },
});

export default authSlice.reducer;
