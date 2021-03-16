import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCubes, FaEyeDropper, FaFileArchive } from "react-icons/fa";
import './Admin.scss';
import { getListUser } from '../../state/actions';
import ItemUser from '../../components/ItemUser';

function Admin() {

  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.listUser.items);
  const total = useSelector(state => state.listUser.total);
  console.log('dataUser', dataUser);
  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch])
  return (
    <div className="admin-page">
      <ul className="admin-option">
        <li>Danh sách chung</li>
        <li>Danh sách recruitment</li>
        <li>Danh sách candidate</li>
        <li>Danh sách các công việc</li>
        <li>Danh sách admin</li>
      </ul>
      <div className="admin-detail">
        <div className="item-list">
          <div className="item-admin__card">
            <span><FaCubes /></span>
            <div className="admin-sub">
              <h2>{total}</h2>
              <h3>TỔNG TÀI KHOẢN</h3>
            </div>
          </div>
          <div className="item-admin__card">
            <span><FaEyeDropper /></span>
            <div className="admin-sub">
              <h2>24</h2>
              <h3>TÀI KHOẢN RECRUITMENT</h3>
            </div>
          </div>
          <div className="item-admin__card">
            <span><FaFileArchive /></span>
            <div className="admin-sub">
              <h2>05</h2>
              <h3>TÀI KHOẢN CANDIDATE</h3>
            </div>
          </div>
        </div>
        <div className="list-acc">
        <div className="card__item">
            <h4 className="id__item">Mã</h4>
            <h4 className="user__name">Tên tài khoản</h4>
            <h4 className="email__item">Email ứng viên</h4>
           <h4 className="email__item">Checking</h4>
        
        </div>
           {dataUser?.map(item => <ItemUser data={item} />)}</div>
     
      </div>

    </div>
  )
}

export default Admin
