// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userRegister } from "../../api/authAPI";

// const initialState = {
//     isLoading: false,
//     isSuccess: false,
//     isError: false,
//     errorMessage: ""
// };

// export const registerUser = createAsyncThunk("auth/register", async(data,{rejectWithValue}) => {
//     try{
//         const response = await userRegister(data);
//         if(response.status === 200){
//             return response.data;
//         }else{
//             rejectWithValue(response.data);
//         }
//     }catch(e) {
//         rejectWithValue(e.response.data)
//     }
// });

// export const RegisterSlice = createSlice({
//     name:"register",
//     initialState,
//     reducers: {
//         clearState: (state,action) => {
//             state.isError = action.payload;
//             state.isLoading = action.payload;
//             state.isSuccess = action.payload; 
//         }
//       },
//     extraReducers: (builder) => {
//         builder
//             .addCase(registerUser.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(registerUser.fulfilled, (state) => {
//                 state.isLoading = false;
//                 state.isSuccess = true;
//             })
//             .addCase(registerUser.isError, (state,action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.errorMessage = action.payload.Message
//             })
//     }
// });

// export const {clearState} = RegisterSlice.actions;

// export const selectIsSuccess = (state) => state.register.isSuccess;
// export const selectIsLoading = (state) => state.register.isLoading;
// export const selectIsError = (state) => state.register.isError;
// export const selectErrorMessage = (state) => state.register.errorMessage;

// export default RegisterSlice.reducer;