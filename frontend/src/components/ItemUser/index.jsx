import React from 'react'
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import './ItemUser.scss';
import { verifyCandidate } from '../../state/actions';
import { Button } from 'antd';
import {  useHistory } from 'react-router-dom';

function ItemUser({ data }) {
    const dispatch = useDispatch();
    const { id, userName, verify, email } = data;
    const history = useHistory();
    function onChange() {
        dispatch(verifyCandidate(id));
    }
    return (
        <div className="card__item">
            <h4 className="id__item">{id}</h4>
            <h4 className="user__name">{userName}</h4>
            <h4 className="email__item">{email}</h4>
            <h4 className="email__item">
                <Button type="primary" size={'large'} onClick={() => {
                    history.push(`/detailcv/${id}`);
                }} >Check thông tin </Button>
            </h4>
            {verify ? <h4 className="textverify">Verify</h4> : <h5 className="notverify">Not Verify</h5>}
            <Switch defaultChecked={verify} onChange={onChange} />
        </div>
    )
}

export default ItemUser;
