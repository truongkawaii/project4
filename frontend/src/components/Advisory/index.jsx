import React from "react";
import { FaHeadset } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "./Advisory.scss";

function Advisory() {
  return (
    <div className="advisory">
      <div className="container">
        <div className="advisory__title">
          <FaHeadset className="icon-head" />
          <h1>HOTLINE TƯ VẤN DÀNH CHO NHÀ TUYỂN DỤNG</h1>
        </div>
        <div className="advisory__content">
          <div className="advisory__card">
            <h4 className="advisory__title--small">
              <FiPhoneCall className="phone-icon" /> Hotline Tư vấn Tuyển dụng
              miền Bắc
            </h4>
            <ul className="advisory__list">
              <li className="advisory__list--item">
                <p>
                  <span>0332 678 613</span>- Ms. Đinh Huyền
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0965 696 714</span>- Ms. Chu Thảo
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>097 764 86 23</span>- Ms. Nguyễn Yến
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>033 309 7718</span>- Ms. Thu Thủy
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0984 259 428</span>- Ms. Lan Hương
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0786 121 995</span>- Ms. Trần Thảo
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0966 391 705</span>- Ms. Mai Linh
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0941 768 699</span>- Ms. Nguyễn Nhung
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0982 396 882</span>- Ms. Trần Thúy
                </p>
              </li>
            </ul>
          </div>
          <div className="advisory__card">
            <h4 className="advisory__title--small">
              <FiPhoneCall className="phone-icon" /> Hotline Tư vấn Tuyển dụng
              miền Nam
            </h4>
            <ul className="advisory__list">
              <li className="advisory__list--item">
                <p>
                  <span>0908 350 072</span>- Ms. Thanh Sơn
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0972 665 767</span>- Mr. Khánh Duy
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0907 225 250</span>- Ms. Ngọc Trâm
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>033 584 8428</span>- Ms. Huyền Trang
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0348 344 515</span>- Ms. Thảo Nguyên
                </p>
              </li>
              <li className="advisory__list--item">
                <p>
                  <span>0396 932 311</span>- Ms. Mỹ Trang
                </p>
              </li>
            </ul>
          </div>
          <div className="advisory__card">
            <h4 className="advisory__title--small">
              <FiPhoneCall className="phone-icon" /> CSKH & Khiếu nại dịch vụ
            </h4>
            <ul className="advisory__list">
              <li className="advisory__list--item">
                <p>
                  Hotline CSKH :<span> 0332 678 613</span>
                </p>
              
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="advisory__title">
          <FaHeadset className="icon-head" />
          <h1>HOTLINE TƯ VẤN DÀNH CHO NGƯỜI TÌM VIỆC</h1>
        </div>
        <div className="advisory__content">
          <div className="advisory__card">
            <ul className="advisory__list item2">
              <li className="advisory__list--item">
                <p>
                  <span>0332 678 613</span>- Ms. Đinh Huyền
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advisory;
