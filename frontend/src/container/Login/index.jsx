import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { userLogin } from '../../state/actions';
import './Login.scss';

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userName: '',
    password: '',
  });
  const handlerLoginUser = () => {
    console.log('LOGIn', user);
    dispatch(userLogin(user));
  };
  // const token = localStorage.getItem('token');
  // if (token && token !== '' && token !== null) {
  //   return <Redirect to="/home" />;
  // }
  // useEffect(() => {
  
  // }, [])

  return (
    <div>
      <div className="banner">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="box">
              <h1>Đăng nhập để sử dụng</h1>
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
                <input
                  type="text"
                  placeholder="Email"
                  onChange={e => setUser({ ...user, userName: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
                <div className="dn">
                  <span onClick={handlerLoginUser}>Đăng nhập</span>
                </div>
                <p>
                  <a href="a">Quên mật khẩu?</a>
                </p>
                <div className="dk">
                  <Link to="/signup">Đăng ký tài khoản mới</Link>
                  <br />
                  <p>Bạn không đăng nhập được tài khoản?</p>
                  <p>
                    Vui lòng gọi tới số <span>(024) 6680 5588</span>(giờ hành
                    chính) để được hỗ trợ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="tutorial">
              <div className="tutorial_text">
                <h1>Hướng dẫn sử dụng BotWork</h1>
                <p>
                  1. Đăng nhập (Đăng ký tài khoản mới nếu bạn chưa từng sử dụng
                    BotWork tại đây)
                </p>
                <p>2. Viết CV trực tiếp trên BotWork</p>
                <p>3. Tải CV dạng PDF về máy</p>
                <p>4. Ứng tuyển các việc làm hot ngay trên BotWork</p>
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
  );
}

export default Login;
