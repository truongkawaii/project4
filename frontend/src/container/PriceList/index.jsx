import React, { useEffect } from 'react'
import './PriceList.scss';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProfileUser } from '../../state/actions';

function PriceList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.infoUser.user);
    useEffect(() => {
        dispatch(getProfileUser());
    }, [])
    return (
        <div className="price-list">
            <div className="container">
                <h1>Pricing</h1>
                <div className="list-price-content">
                    <div className="price-item price-start">
                        <h5>STARTER</h5>
                        <h2>$20</h2>
                        <ul className="list-item-price">
                            <li className="title-price">INCLUDING</li>
                            <li>100 coins</li>
                            <li>Giới hạn đăng 5 job</li>
                            <li>Bảo hành trọn đời </li>
                        </ul>
                        <Button onClick={() => {
                            history.push({
                                pathname: `/checkout/${user?.id}`,
                                coins:100
                            })
                        }} className="prSt">Mua ngay</Button>
                    </div>
                    <div className="price-item price-basic">
                        <h5>BASIC</h5>
                        <h2>$200</h2>
                        <ul className="list-item-price">
                            <li className="title-price">INCLUDING</li>
                            <li>1500 coins</li>
                            <li>Giới hạn đăng 15 job</li>
                            <li>Bảo hành trọn đời </li>
                        </ul>
                        <Button onClick={() => {
                            history.push({
                                pathname: `/checkout/${user?.id}`,
                                coins:1500
                            })
                        }} className="prBS">Mua ngay</Button>
                    </div>
                    <div className="price-item price-pro">
                        <h5>PRO</h5>
                        <h2>$2000</h2>
                        <ul className="list-item-price">
                            <li className="title-price">INCLUDING</li>
                            <li>20000 coins</li>
                            <li>Giới hạn đăng 30 job</li>
                            <li>Bảo hành trọn đời </li>
                        </ul>
                        <Button onClick={() => {
                            history.push({
                                pathname: `/checkout/${user?.id}`,
                                coins:20000
                            })
                        }} className="prPr">Mua ngay</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PriceList
