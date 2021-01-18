import React from "react";
import "./InfoRecruitment.scss";

function InfoRecruitment() {
  return <ul className="info-recruitment">
    <li className="list-info info-top">
      <span>THÔNG TIN TUYỂN DỤNG</span>
    </li>
    <li className="list-info">
      <span>Mức lương :</span> <h5>&nbsp; 9-12 triệu</h5>
    </li>
    <li className="list-info">
      <span>Hình thức làm việc :</span>
      <h5>&nbsp; Toàn thời gian</h5>
    </li>
    <li className="list-info">
      <span>Số lượng cần tuyển :</span>
      <h5>&nbsp; 2 người</h5>
    </li>
    <li className="list-info">
      <span>Chức vụ:</span>
      <h5> &nbsp;Nhân viên</h5>
    </li>
    <li className="list-info">
      <span>Yêu cầu kinh nghiệm:</span>
      <h5>&nbsp; 1 năm</h5>
    </li>
    <li className="list-info">
      <span>Yêu cầu giới tính:</span>
      <h5>&nbsp; Không yêu cầu</h5>
    </li>
    <li className="list-info">
      <span>Địa điểm làm việc:</span>
      <h5> &nbsp;Hà Nội, Hải Phòng, Quảng Ninh</h5>
    </li>
  </ul>;
}

export default InfoRecruitment;
