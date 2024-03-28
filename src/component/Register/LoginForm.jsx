import React from 'react'

function LoginForm() {
  return (
    <div className="mobile">
      <form action="">
        <div className="register-login-qr mt15">
          <h3>Đăng Nhập</h3>
          <div>
            <h4>Đăng nhập với mã QR</h4>
            <svg width="40" height="40" fill="none" className="_3F92IZ"><g clip-path="url(#clip0)"><path fillrule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D"></path><path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path><path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D"></path><path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
          </div>
        </div>
        <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />
        <button className="btn btn--primary">Đăng nhập</button>
        <div className="register-forgot">
          <a href=".#">Quên mật khẩu</a>
          <a href=".#">Đăng nhập với SMS</a>
        </div>
        <p className="register-or">Hoặc</p>
        <div className="register-type">
          <a href=".#" className="register-facebook"><i class="fab fa-facebook"></i><span>Facebook</span></a>
          <a href=".#" className="register-google"><i class="fab fa-google-plus-square"></i><span>Google</span></a>
          <a href=".#" className="register-apple"><i class="fab fa-apple"></i><span>Apple</span></a>
        </div>
        <p className="register-policy">
          Bằng việc đăng kí, bạn đã đồng ý với Shopee về <a href=".#">Điều khoản dịch vụ</a> & <a href=".#">Chính sách bảo mật</a>
        </p>
        <div className="register-question">
          <span>Bạn mới biết đến Shopee? </span>
          <a href="/register">Đăng ký</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
