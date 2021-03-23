import React, { useState } from 'react';
import Header from '../../components/HeaderSighup';
import {useDispatch} from 'react-redux';
import {userSignUp} from '../../state/actions';
import {useHistory,Link} from 'react-router-dom';
import './Signup.scss';
import { fromPairs } from 'lodash';

function SignUp() {
  const dispatch = useDispatch();
  const history =useHistory();
  const [data,setData] = useState({
    username: "",
    password: "",
    rePassword: "",
    firstname: "v",
    lastname: "v", 
    email:"",
    status:1,
    gender: 1,                
    roleIds: [3],
    WorkAddress: "VietNam" ,
    verify:false
  })
  const handlerSignUp = () =>{
    // userSignUp
    dispatch(userSignUp(data));
    history.push('/login');
  }
  return (
    <div>
      {/* <Header /> */}
      <div className="banner">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="box">
              <h1>Đăng ký tài khoản ứng viên</h1>
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
                  <span>Chính sách bảo mật</span> của BotWork
                </p>
                <hr />
              </div>
              <p>Hoặc sử dụng email</p>
              <div className="form"> 
                <input type="text" value={data.username} placeholder="UserName"onChange={e=>setData({...data,username:e.target.value})}  />
                <input type="text" value={data.email} placeholder="Email (để quản lý CV về sau)" onChange={e=>setData({...data,email:e.target.value})} />
                <input type="text" value={data.password} placeholder="Mật khẩu" onChange={e=>setData({...data,password:e.target.value})} />
                <input type="text" value={data.rePassword} placeholder="Nhập lại mật khẩu" onChange={e=>setData({...data,rePassword:e.target.value})} />
                <div className="dn">
                  <a onClick={handlerSignUp} href="#">Đăng Ký</a>
                </div>
                <p>
                  <a href="a">
                    Bạn đã có tài khoản? <span />
                  </a>
                  <Link to="/login">Đăng nhập</Link>
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
      {/* ===end banner=== */} {/* ===start footer=== */}
    </div>
  );
}

export default SignUp;
