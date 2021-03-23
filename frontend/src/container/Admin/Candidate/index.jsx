import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { FaCubes, FaEyeDropper, FaFileArchive } from "react-icons/fa";
// import './Admin.scss';
import { getListUser } from '../../../state/actions';
import ItemUser from '../../../components/ItemUser';
import './Candidate.scss';

function CandidateAdmin() {
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.listUser.items);
    const total = useSelector(state => state.listUser.total);
    console.log('dataUser', dataUser);
    useEffect(() => {
      dispatch(getListUser());
    }, [dispatch])
    return (
        <div className="admin-candidate">
         <h1>Danh sách tài khoản ứng viên</h1>
          <div className="card__item">
            <h4 className="id__item">Mã</h4>
            <h4 className="user__name">Tên tài khoản</h4>
            <h4 className="email__item">Email ứng viên</h4>
            <h4 className="email__item">Chi tiết ứng viên</h4>
           <h4 className="email__item">Checking</h4>
        
        </div>
        {dataUser?.map(item => <ItemUser data={item} />)} 
        </div>
    )
}

export default CandidateAdmin
