import React,{useEffect} from "react";
import "./ManagerCV.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser } from "../../state/actions";
function ManagerCV() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.infoUser.user);
  console.log(user);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getProfileUser());
    }
  }, [dispatch])


  return (
    <div className="managerCvpage">
      <div className="container">
        <div className="itemCV">
          <div className="item-left">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/burgerbuilder-4fc93.appspot.com/o/banner_list_cv.jpg?alt=media&token=590f9449-a71d-4686-90ad-bc013927aa17"
              alt=""
            />
            <div className="btn-cv">
              <h3>Danh sách CV</h3>
              <a href="">Tạo mới</a>
            </div>
            <div className="cv-card">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.1/onepage_impressive_2.png"
                alt=""
              />
              <div className="item-right-cv">
                <div className="cv-title-card">
                  <h2>Frontend-Developer</h2>
                  <p>29-01-2021 00:37 AM</p>
                </div>
                <h6>https://i.topcv.vn/nguyenxuantruong?ref=3457593</h6>
                <ul className="list-option-cv">
                  <li>
                    <a href="">Đẩy top</a>
                  </li>
                  <li>
                    <a href="">Đặt cv chính</a>
                  </li>
                  <li>
                    <Link to={`/detailcv/${user?.id}`}>Xem</Link>
                  </li>
                  <li>
                    <a href="">Tải xuống</a>
                  </li>
                  <li>
                  <Link to={`/editcv/${user?.id}`}>Sửa</Link>
                  </li>
                  <li>
                    <a href="">Xoá</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-card">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.1/default.png"
                alt=""
              />
              <div className="item-right-cv">
                <div className="cv-title-card">
                  <h2>Ứng tuyển Fresher front-end</h2>
                  <p>29-01-2021 00:37 AM</p>
                </div>
                <h6>https://i.topcv.vn/nguyenxuantruong?ref=3457593</h6>
                <ul className="list-option-cv">
                  <li>
                    <a href="">Đẩy top</a>
                  </li>
                  <li>
                    <a href="">Đặt cv chính</a>
                  </li>
                  <li>
                    <Link to={`/detailcv/${user?.id}`}>Xem</Link>
                  </li>
                  <li>
                    <a href="">Tải xuống</a>
                  </li>
                  <li>
                  <Link to={`/editcv/${user?.id}`}>Sửa</Link>
                  </li>
                  <li>
                    <a href="">Xoá</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-card">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.1/onepage_impressive_2.png"
                alt=""
              />
              <div className="item-right-cv">
                <div className="cv-title-card">
                  <h2>Frontend-Developer</h2>
                  <p>29-01-2021 00:37 AM</p>
                </div>
                <h6>https://i.topcv.vn/nguyenxuantruong?ref=3457593</h6>
                <ul className="list-option-cv">
                  <li>
                    <a href="">Đẩy top</a>
                  </li>
                  <li>
                    <a href="">Đặt cv chính</a>
                  </li>
                  <li>
                    <Link to={`/detailcv/${user?.id}`}>Xem</Link>
                  </li>
                  <li>
                    <a href="">Tải xuống</a>
                  </li>
                  <li>
                  <Link to={`/editcv/${user?.id}`}>Sửa</Link>
                  </li>
                  <li>
                    <a href="">Xoá</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item-right">
            <div className="item-right-info">
              <div className="card-info-cv">
                <img
                  src={user?.cv}
                  alt=""
                />
                <div className="item-right-name">
                  <p>Chào bạn trở lại</p>
                  <h2>Nguyễn Học Đăng Trường</h2>
                  <p>Tài khoản miễn phí</p>
                  <h4>Nâng cấp tài khoản</h4>
                </div>
              </div>
              <div className="list-info-cv">
                <div className="proges">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                  <h5>Trạng thái tìm việc đang bật</h5>
                </div>
                <p>Cho phép các Nhà tuyển dụng đã được BotWork xác thực xem CV Online để có thể liên hệ với bạn</p>
                <h4>Khởi tạo BotWork Profile để gia tăng 300% cơ hội việc làm tốt</h4>
                <h3>Tạo BotWork profile</h3>
              </div>
            </div>
            <div className="item-right-info2">
              <h2>CV của bạn đã đủ tốt</h2>
              <p>Bao nhiêu NTD đang quan tâm tới Hồ sơ của bạn?</p>
              {/* <div className="cv-rec">
                <div className="item-rec-num">
                    <h2>63</h2>
                    <h3>lượt</h3>
                </div>
                <div className="">
                <p>Mỗi lượt Nhà tuyển dụng xem CV mang đến một cơ hội để bạn gần hơn với công việc phù hợp.</p>
                <h3>Khám phá ngay</h3>
                </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ManagerCV;
