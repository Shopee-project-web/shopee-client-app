import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsError,selectIsSuccess, clearState, loginUser} from "../../features/authSlice/LoginSlice";
import {useForm} from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';

function LoginForm() {

  const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const isSuccess = useSelector(selectIsSuccess);
   
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
            navigate("/");
        }
    },[isError,isSuccess])

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    }

  return (
    <div className="mobile">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-login-qr mt15">
            <h3>Đăng Nhập</h3>
            <div>
                <h4>Đăng nhập với mã QR</h4>
                <svg width="40" height="40" fill="none" className="_3F92IZ"><g clip-path="url(#clip0)"><path fillrule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D"></path><path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path><path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D"></path><path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
            </div>
        </div>
        <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập" {...register("username", {required: true})} />
        {errors.username && <span style={{ color:"red", fontSize: "1.2em"}} className="error">Tên đăng nhập không được để trống</span>}

        <input type="password" style={{marginTop: "28px"}} placeholder="Mật khẩu" {...register("password", { required: true })} />
        {errors.password && <span style={{color:"red", fontSize: "1.2em"}} className="error">Mật khẩu không được để trống</span>}

        <button type="submit" style={{marginTop: "28px"}} className="btn btn--primary" disabled={isLoading}>Đăng nhập</button>
        {isError && <span className="error">Đăng nhập thất bại</span>}
        <div className="register-forgot">
            <Link to="#">Quên mật khẩu</Link>
            <Link to="#">Đăng nhập với SMS</Link>
        </div>
        <p className="register-or">Hoặc</p>
        <div className="register-type">
            <Link to="#" className="register-facebook"><i className="fab fa-facebook"></i><span>Facebook</span></Link>
            <Link to="#" className="register-google"><i className="fab fa-google-plus-square"></i><span>Google</span></Link>
            <Link to="#" className="register-apple"><i className="fab fa-apple"></i><span>Apple</span></Link>
        </div>
        <p className="register-policy">
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về <Link to="#">Điều khoản dịch vụ</Link> & <Link to="#">Chính sách bảo mật</Link>
        </p>
        <div className="register-question">
            <span>Bạn mới biết đến Shopee? </span>
            <Link to="/register">Đăng ký</Link>
        </div>
    </form>
</div>
  )
}

export default LoginForm
