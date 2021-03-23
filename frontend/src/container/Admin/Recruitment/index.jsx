import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListRecruitment } from '../../../state/actions';
import './Recruitment.scss';
import {  useHistory } from 'react-router-dom';
import { Button } from 'antd';

function RecruitmentAdmin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const dataRecruitment = useSelector(state => state.listRecruitment.items);
    const total = useSelector(state => state.listRecruitment.total);
    useEffect(() => {
        dispatch(getListRecruitment());
      }, [dispatch])

     console.log(dataRecruitment);
    return (
        <div className="admin-rec">
         <h1>Danh sách tài khoản nhà tuyển dụng</h1>
         <div className="recItem">
            <h4 className="id__recItem">Mã</h4>
            <h4 className="user__recItem">Tên tài khoản</h4>
            <h4 className="email__recItem">Email </h4>
            <h4 className="phone__recItem">Số điện thoại</h4>
            <h4 className="coins__recItem">Coins</h4>
            <h4 className="type_rec">Loại tài khoản</h4>
            <h4 className="details__recItem">Chi tiết thông tin</h4>
          
        </div>
         {dataRecruitment?.map(item=>{
             return <ul className="itemRec">
                <li className="id__recItem">{item.id}</li>
                <li className="user__recItem">{item.userName}</li>
                <li className="email__recItem">{item.email}</li>
                <li className="phone__recItem">{item.phone?item.phone:'0358444777'}</li>
                <li className="coins__recItem">{item.coins}</li>
                <li className="type_rec">{item.recruitmentType===0?<span className="normal">Normal</span>:<span className="vip">Vip</span>}</li>
                <li className="details__recItem">     <Button type="primary" size={'large'} onClick={() => {
                    history.push(`/detailcv/${item.id}`);
                }} >Check thông tin </Button></li>

             </ul>
         })}   
        </div>
    )
}

export default RecruitmentAdmin
