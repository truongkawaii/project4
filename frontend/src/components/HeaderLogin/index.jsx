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
          <img src="https://firebasestorage.googleapis.com/v0/b/burgerbuilder-4fc93.appspot.com/o/FarmTwo%20(1).jpg?alt=media&token=4662aab7-4020-4412-aa1a-e8bb0c230ed0" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/home">Trang chủ</Link>
            </li>
            <li> 
            {infoUser?.roles[0].id === 2 ? <a href="a">
                Loại toài khoản {infoUser.recruitmentType===1?<span className="vip">Vip</span> :<span className="normal">Normal</span>}
              </a> : null}
            </li>
            <li> 
            {infoUser?.roles[0].id === 2 ? <a href="a"> 
                Coins hiện tại :{infoUser.coins?<span className="coinsRec">{infoUser.coins}</span>:<span className="coinsRec">0</span>}
              </a> : null}
            </li>
            <li> 
            {infoUser?.roles[0].id === 2 ? <Link to="/priceList"> 
               Mua coins
              </Link> : null}
            </li>
            <li> 
            {infoUser?.roles[0].id === 2 ? <Link to={`/upgradeVip`}>
               {infoUser.recruitmentType===1? null :'Nâng cấp Vip'}
              </Link> : null}
            </li>
            <li>
            {infoUser?.roles[0].id === 3 ? <Link to="/addcv">Tìm kiếm công việc</Link> : null}
            </li>
            <li>
            {infoUser?.roles[0].id === 3 ? <Link to="/addcv">Tạo CV</Link> : null}
            </li>
            <li>
            {infoUser?.roles[0].id === 3 ? <Link to="/managercv">Quản lý CV</Link> : null}
            </li>
            <li>
            {infoUser?.roles[0].id === 2 ? <Link to="/searchcandidate">Tìm kiếm ứng viên</Link> : null}
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
            <Link to="/signup">Đăng kí</Link>
            </li>
            <li>
        {infoUser?.roles[0].id?<a href="#a" onClick={handlerLogout}>Đăng xuất</a>:<Link to="/login">Đăng nhập</Link>}     
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
