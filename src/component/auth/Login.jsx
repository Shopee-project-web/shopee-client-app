import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser, selectIsLoading, selectIsSuccess, selectIsError, selectErrorMessage, clearState } from '../../features/authSlice/LoginSlice'; 
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBRow,
    MDBCol,
    MDBInput
  } from 'mdb-react-ui-kit';

function Login() {
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
<MDBContainer fluid className="h-100">
  <MDBRow className='d-flex justify-content-end align-items-center h-100'>
    <MDBRow className='col-md-6 col-lg-8 col-sm-4 justify-content-center'>
        <MDBCol className='align-items-center'>
            <h1>âsdasdas</h1>
        </MDBCol>
        
    </MDBRow>
    <MDBCol className="col-md-6 col-lg-4 col-sm-8">
      <MDBCard className='my-5 ms-auto me-5' style={{borderRadius : '20px'}}>
        <MDBCardBody className='p-5'>

          <h1 className="fw-bold mb-3 text-center">Đăng nhập</h1>
          <p className="text-muted text-center mb-4 form-label fs-5 ">Vui lòng sử dụng tên tài khoản và mật khẩu để đăng nhập.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='username' className='form-label fs-5 h'>Tên tài khoản:</label>
            <MDBInput wrapperClass='mb-4' id='usename' type='text' size="lg" aria-describedby='' {...register('username', { required: true })} />
            {errors.username && <p className='text-danger fs-6'>Tên tài khoản không được để trống</p>}
            
            <label htmlFor='Password' className='form-label fs-5'>Mật khẩu:</label> 
            <MDBInput wrapperClass='mb-4' id='password' type='password' size="lg" {...register('password', { required: true })} />
            {errors.password && <p className='text-danger fs-6'>Mật khẩu không được để trống</p>}

            <div className='mb-4 d-flex flex-column '>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Nhớ tài khoản' />
            
            <div>
                <button type="submit" class="btn btn-primary mb-3 btn-lg" disabled={isLoading}>
                    {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
            </div>
            </div>

          </form>

          <hr className="my-4" />

          <div className='d-flex'>
          <button className="btn btn-danger btn-lg me-1" >
            <i className='fab fa-google mx-2'/>
            Đăng nhập với Google
          </button>

          <button className="btn btn-primary btn-lg ms-2">
          <i className="fab fa-facebook mx-2"></i>
            Đăng nhập với Facebook
          </button>
          </div>

        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
    )
};

export default Login;