import React from 'react'
import Header from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import './Login.scss'

function Login() {
    return (
     
        <div>
            <div className="banner">
  <div className="row">
    <div className="col-lg-5 col-md-12">
      <div className="box">
        <h1>Đăng nhập để sử dụng</h1>
        <div className="face">
          <a href="a">
            <i className="fab fa-facebook-square" /><span>
              Đăng nhập với Facebook</span
            ></a
          >
        </div>
        <div className="text">
          <p>
            Khi bạn đăng nhập bằng facebook, mặc định bạn đồng ý với
            <span>Điều khoản dịch vụ</span> và
            <span>Chính sách bảo mật</span> của BotCV
          </p>
          <hr />
        </div>
        <p>Hoặc sử dụng email</p>
        <div className="form">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mật khẩu" />
          <div className="dn"><a href="a">Đăng nhập</a></div>
          <p><a href="a">Quên mật khẩu?</a></p>
          <div className="dk">
            <a href="a">Đăng ký tài khoản mới</a>
            <br />
            <p>Bạn không đăng nhập được tài khoản?</p>
            <p>
              Vui lòng gọi tới số <span>(024) 6680 5588</span>(giờ hành chính)
              để được hỗ trợ.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-7 col-md-12">
      <div className="tutorial">
        <div className="tutorial_text">
          <h1>Hướng dẫn sử dụng BotCV</h1>
          <p>
            1. Đăng nhập (Đăng ký tài khoản mới nếu bạn chưa từng sử dụng BotCV
            tại đây)
          </p>
          <p>2. Viết CV trực tiếp trên BotCV</p>
          <p>3. Tải CV dạng PDF về máy</p>
          <p>4. Ứng tuyển các việc làm hot ngay trên BotCV</p>
          <iframe
            src="https://www.youtube.com/embed/REMS55jZFoc"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            
          />
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Login;
