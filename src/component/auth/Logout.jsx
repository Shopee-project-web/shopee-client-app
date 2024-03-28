import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser,clearState, selectIsLoading,selectIsSuccess,selectIsError } from '../../features/authSlice/LogoutSlice';
import { useSelector, useDispatch } from 'react-redux';

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSuccess = useSelector(selectIsSuccess);
    const isError = useSelector(selectIsError);

    useEffect(() => {
        if(isSuccess) {
            navigate("/auth/login")
        }
        if(isError){
            alert("Lỗi hệ thống")
            navigate("/")
        };
    });

    const handleClick = () => {
        dispatch(logoutUser());
    }
  return (
    <button onClick={handleClick}>Đăng xuất</button>
  )
}

export default Logout