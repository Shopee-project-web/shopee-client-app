import React from 'react'

function Register() {
  return (
    <div className="mobile">
      <form action="">
        <h3>Đăng ký</h3>
        <input type="text" placeholder="Số điện thoại" />
        <button className="btn btn--primary">Tiếp theo</button>
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
          <span>Bạn đã có tài khoản? </span>
          <a href="/login">Đăng nhập</a>
        </div>
      </form>
    </div>
  )
}

export default Register
