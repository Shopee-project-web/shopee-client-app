import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser, selectIsLoading, selectIsSuccess, selectIsError, selectErrorMessage, clearState } from '../../features/authSlice/LoginSlice'; 
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const isSuccess = useSelector(selectIsSuccess);
    const errorMessage = useSelector(selectErrorMessage);

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    },[]);

    useEffect(() => {
        if(isError) {
           navigate("/login")
        }
        if(isSuccess) {
            alert("Đăng nhập thành công!")
            navigate("/");
        }
    },[isError,isSuccess])

    const onSubmit = (data) => {
        dispatch(loginUser(data));
        console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                 
                    {...register('username', { required: true })}
                />
                {errors.username && <span>Username is required</span>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <span>Password is required</span>}
            </div>
            {isError && <div style={{ color: 'red' }}>{errorMessage}</div>}
            {isSuccess && <div style={{ color: 'green' }}>Login successful!</div>}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Login'}
            </button>
        </form>
    )
};

export default Login;