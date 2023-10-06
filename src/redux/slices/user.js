import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const verifyToken = createAsyncThunk("verifyToken", async (body) => {
  const token = localStorage.getItem("jwtToken");
  console.log(token);
  try {
    if (token) {
      const user = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/verify-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (user.status === 200) {
        console.log("Token Verified");
        return user.data;
      }
    }
  } catch (error) {
    throw error;
  }
});

export const generateOTP = createAsyncThunk("generateOTP", async (body) => {
  const token = localStorage.getItem("jwtToken");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/generate-OTP`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      localStorage.setItem("email", body.email);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const verifyOTP = createAsyncThunk("verifyOTP", async (body) => {
  const email = localStorage.getItem("email");
  const otp = body.otp;
  const token = localStorage.getItem("jwtToken");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/verify-OTP`,
      { email, otp },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
});

export const updatePassword = createAsyncThunk(
  "updatePassword",
  async (body) => {
    const email = localStorage.getItem("email");
    const newPassword = body;
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/auth/update-password`,
        { email, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.data?.status === 200) {
        localStorage.removeItem("email");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const updateProfile = createAsyncThunk("updateProfile", async (body) => {
  const token = localStorage.getItem("jwtToken");
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/user/update-profile`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
});

export const sendFeedback = createAsyncThunk("sendFeedback", async (body) => {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("jwtToken");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/feedback`,
      { body, email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: "",
    data: "",
    isError: false,
  },
  extraReducers: (builder) => {
    //----------For User verify token-----------
    builder.addCase(verifyToken.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = action.payload;
    });
    builder.addCase(verifyToken.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
      state.msg = "User Verify Token failed";
    });
    // -------For Generate OTP for password reset ------------------
    builder.addCase(generateOTP.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(generateOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        state.isError = true;
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(generateOTP.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
    //--------------Verify OTP for password reset-----------
    builder.addCase(verifyOTP.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verifyOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        state.isError = true;
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(verifyOTP.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
    //---------------Update Password------------
    builder.addCase(updatePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        state.isError = true;
        state.msg = action.payload.message;
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
    //-----------------Update Profile--------------
    builder.addCase(updateProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        state.isError = true;
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
    //-----------------User send Feedback--------------
    builder.addCase(sendFeedback.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sendFeedback.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        state.isError = true;
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(sendFeedback.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
