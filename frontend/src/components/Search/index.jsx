import React from 'react';
import './Search.scss';

function Search() {
  return (
    <div className="group">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="form">
              <span className="icon">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                autocomplete="off"
                placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="formd">
              <span className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <select className="map" aria-hidden="true">
                <option value=""> Tất cả địa điểm</option>
                <option value="1"> Hà Nội</option>
                <option value="2"> Hồ Chí Minh</option>
                <option value="3"> Bình Dương</option>
                <option value="4"> Bắc Ninh</option>
                <option value="5"> Đồng Nai</option>
                <option value="6"> Hưng Yên</option>
                <option value="7"> Hải Dương</option>
                <option value="8"> Đà Nẵng</option>
                <option value="9"> Hải Phòng</option>
                <option value="10"> An Giang</option>
                <option value="11"> Bà Rịa-Vũng Tàu</option>
                <option value="12"> Bắc Giang</option>
                <option value="13"> Bắc Kạn</option>
                <option value="14"> Bạc Liêu</option>
                <option value="15"> Bến Tre</option>
                <option value="16"> Bình Định</option>
                <option value="17"> Bình Phước</option>
                <option value="18"> Bình Thuận</option>
                <option value="19"> Cà Mau</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="formt">
              <span className="icon">
                <i className="fas fa-tools"></i>
              </span>
              <select className="set" aria-hidden="true">
                <option value="">Tất cả nghành nghề</option>
                <option value=""> An toàn lao động</option>
                <option value=""> Bán hàng kỹ thuật</option>
                <option value=""> Bán lẻ / bán sỉ</option>
                <option value=""> Báo chí / Truyền hình</option>
                <option value=""> Bảo hiểm</option>
                <option value=""> Bảo trì / Sữa chữa</option>
                <option value=""> Bất động sản</option>
                <option value=""> Biên / Phiên dịch</option>
                <option value=""> Bưu chính - Viễn thông</option>
                <option value=""> Chứng khoán / Vàng / Ngoại tệ</option>
                <option value=""> Cơ khí / Chế tạo / Tự động hóa</option>
                <option value=""> Công nghệ cao</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <button type="submit">
              <i className="fas fa-search"></i>
              <span>Tìm</span>
            </button>
          </div>
        </div>
        <div className="text__bot">
          <h1>
            Tìm việc làm nhanh, uy tín, mới nhất trên Mạng Tuyển dụng, Việc Làm
            TopCV
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Search;
