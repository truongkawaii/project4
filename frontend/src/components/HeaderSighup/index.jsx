import React from 'react'
import './Headersn.scss';
function Header() {
    return (
        <div>
            <div className="header">
  <div className="logo">
    <img src="https://firebasestorage.googleapis.com/v0/b/burgerbuilder-4fc93.appspot.com/o/FarmTwo%20(1).jpg?alt=media&token=4662aab7-4020-4412-aa1a-e8bb0c230ed0" alt="" />
  </div> 
  <div className="menu">
    <ul>
      <li>
        <a href="a">Có việc siêu tốc <span>Hot</span> </a>
      </li>
      <li><a href="a">Mẫu CV</a></li>
      <li><a href="a">Mẫu Cover Letter</a></li>
      <li><a href="a">Việc làm</a></li>
      <li><a href="a">Khám phá</a></li>
      <li><a href="a">Công ty</a></li>
      <li><a href="a">Đăng nhập</a></li>
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
    )
}

export default Header;
