import React, { useEffect } from 'react'
 
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProfileUser, upgradeVip } from '../../state/actions';
import { toastWarning } from '../../Helper/toastHelper';

function UpgradeVip() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.infoUser.user);
    useEffect(() => {
        dispatch(getProfileUser());
    }, [])
   const handlerBuyVip = (coins)=>{
        if (user?.coins&&user?.coins>coins) {
            // mua vip trừ coins
            dispatch(upgradeVip({num:coins,id:user?.id}))
            history.push('/home');
        }
        else toastWarning('Coins ko đủ vui lòng nạp thêm coins');
    }
    return (
        <div className="price-list">
        <div className="container">
            <h1>Pricing</h1>
            <div className="list-price-content">
                <div className="price-item price-start">
                    <h5>STARTER</h5>
                    <h2>500 coins</h2>
                    <ul className="list-item-price">
                        <li className="title-price">INCLUDING</li>
                        <li>Sở hữu vip</li>
                        <li>kéo dài 1 tuần</li>
                        <li>Bảo hành trọn đời </li>
                    </ul>
                    <Button onClick={() =>handlerBuyVip(500)} className="prSt">Mua ngay</Button>
                </div>
                <div className="price-item price-basic">
                    <h5>BASIC</h5>
                    <h2>5000 coins</h2>
                    <ul className="list-item-price">
                        <li className="title-price">INCLUDING</li>
                        <li>Sở hữu vip</li>
                        <li>kéo dài 1 tháng</li>
                        <li>Bảo hành trọn đời </li>
                    </ul>
                    <Button onClick={() =>handlerBuyVip(5000)} className="prBS">Mua ngay</Button>
                </div>
                <div className="price-item price-pro">
                    <h5>PRO</h5>
                    <h2> 8000 coins</h2>
                    <ul className="list-item-price">
                        <li className="title-price">INCLUDING</li>
                        <li>Sở hữu vip</li>
                        <li>kéo dài 6 tháng</li>
                        <li>Bảo hành trọn đời </li>
                    </ul>
                    <Button onClick={() =>handlerBuyVip(8000)} className="prPr">Mua ngay</Button>
                </div>
            </div>

        </div>
    </div>
    )
}

export default UpgradeVip
