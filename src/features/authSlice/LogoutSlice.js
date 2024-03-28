import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogout } from "../../api/authAPI";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const logoutUser = createAsyncThunk("auth/logout",async() => {
    try{
        let response = null;
        response = userLogout();
        if((await response).status === 200){
            alert("Đăng xuất thành công!");
        }else {
            alert("Đã xảy ra lỗi trong quá trình xử lý!");
        }
    }catch(e){
        alert("Đã xảy ra lỗi trong quá trình xử lý!");
    }
});


export const LogoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {
        clearState: (state,action) => {
            state.isLoading = action.payload;
            state.isSuccess = action.payload;
            state.isError = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
});

export const selectIsLoading = (state) => state.logout.isLoading;
export const selectIsSuccess = (state) => state.logout.isSuccess;
export const selectIsError = (state) => state.logout.isError;

export const clearState = LogoutSlice.actions;

export default LogoutSlice.reducer;