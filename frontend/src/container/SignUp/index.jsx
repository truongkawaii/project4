import React from 'react';
import Header from '../../components/HeaderSighup';
import './Signup.scss';

function SignUp() {
  return (
    <div>
      <Header />
      <div className="banner">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="box">
              <h1>Đăng ký tài khoản</h1>
              <div className="face">
                <a href="a">
                  <i className="fab fa-facebook-square" />
                  <span>Đăng nhập với Facebook</span>
                </a>
              </div>
              <div className="text">
                <p>
                  Khi bạn đăng nhập bằng facebook, mặc định bạn đồng ý với
                  <span>Điều khoản dịch vụ</span> và
                  <span>Chính sách bảo mật</span> của TopCV
                </p>
                <hr />
              </div>
              <p>Hoặc sử dụng email</p>
              <div className="form">
                <input type="text" placeholder="Họ và tên" />
                <input type="text" placeholder="Email (để quản lý CV về sau)" />
                <input type="text" placeholder="Mật khẩu" />
                <input type="text" placeholder="Nhập lại mật khẩu" />
                <div className="dn">
                  <a href="a">Đăng Ký</a>
                </div>
                <p>
                  <a href="a">
                    Bạn đã có tài khoản? <span />
                  </a>
                  <a href="a">Đăng nhập</a>
                </p>
                <br />
                <p>Bạn gặp khó khăn khi tạo tài khoản</p>
                <p>
                  Vui lòng gọi tới số <span>(024) 6680 5588</span>(giờ hành
                  chính) để được hỗ trợ.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="tutorial">
              <div className="tutorial_text">
                <h1>Hướng dẫn sử dụng TopCv</h1>
                <p>
                  1. Đăng nhập (Đăng ký tài khoản mới nếu bạn chưa từng sử dụng
                  TopCV tại đây)
                </p>
                <p>2. Viết CV trực tiếp trên TopCV</p>
                <p>3. Tải CV dạng PDF về máy</p>
                <p>4. Ứng tuyển các việc làm hot ngay trên TopCV</p>
                <iframe
                  src="https://www.youtube.com/embed/REMS55jZFoc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===end banner=== */} {/* ===start footer=== */}
    </div>
  );
}

export default SignUp;
