import React from 'react';
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutPage } from '../../state/actions';
function Header() {
  const infoUser = useSelector(state => state.infoUser.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handlerLogout = () => {
    dispatch(userLogoutPage())
    history.push('/login');
  }
  return (
    <div className="headerMenu">
      <div className="header">
        <div className="logo">
          <img src="https://localhost:5001/Resources/users/logo.png" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/home">Trang chủ</Link>
            </li>
            <li>
              <a href="a">
                Có việc siêu tốc <span>Hot</span> 
              </a>
            </li>
            <li>
            {infoUser?.roles[0].id === 3 ? <Link to="/addcv">Tạo CV</Link> : null}
            </li>
            <li>
            {infoUser?.roles[0].id === 3 ? <Link to="/managercv">Quản lý CV</Link> : null}
            </li>
            <li>
              <a href="a">Mẫu Cover Letter</a>
            </li>
            <li>
              {infoUser?.roles[0].id === 2 ? <Link to="/uploadjob">Tạo Công việc</Link> : null}
            </li>
            <li>
              {infoUser?.roles[0].id === 2 ? <Link to="/recruitment">Quản lý Job</Link> : null}
            </li>
            <li>
              {infoUser?.roles[0].id === 1 ? <Link to="/admin">Quản trị</Link>  : null}
            </li>
            <li>
              <a href="a">Đăng ký</a>
            </li>
            <li>
              <a href="#a" onClick={handlerLogout}>Đăng xuất</a>
            </li>
          </ul>
          <div className="employer">
            <h5>NHÀ TUYỂN DỤNG</h5>
            <p>Đăng tuyển &amp; Tìm hỗ trợ</p>
          </div>
        </div>
        <div className="button">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    </div>
  );
}

export default Header;
