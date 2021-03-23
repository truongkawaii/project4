import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { FaCubes, FaEyeDropper, FaFileArchive } from "react-icons/fa";
import './Admin.scss';
import { getListUser } from '../../state/actions';
 

function Admin(props) {

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
        <li><Link to={'/admin'}>Danh sách chung</Link></li>
        <li><Link to={'/recruitmentadmin'}>Danh sách recruitment</Link></li>
        <li><Link to={'/candidateadmin'}>Danh sách candidate</Link></li>
        <li><Link to={'/jobadmin'}>Danh sách các công việc</Link></li>
        <li><Link to={'/accountadmin'}>Danh sách admin</Link></li>
      </ul>
      {/* candidateadmin */}
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
              <h2>{total}</h2>
              <h3>TÀI KHOẢN CANDIDATE</h3>
            </div>
          </div>
        </div>
        <div className="list-acc">
        
          
           {props.children}
           </div>
       
      </div>

    </div>
  )
}

export default Admin
