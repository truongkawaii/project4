import React, { useEffect } from 'react';
import './DetailCandidate.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getListUser } from '../../state/actions';
import ReactHtmlParser from 'react-html-parser';

function DetailCandidate() {
    const param = useParams();
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.listUser.items);
    const UserItem = dataUser?.filter(item => item.id === parseInt(param.id))[0];
    console.log(UserItem, 'UserItem');
    useEffect(() => {
        dispatch(getListUser());
    }, [dispatch])
    return (
        <div className="detailCV">
            <div className="wrapper">
                <section className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h2 className="nameCV">{ReactHtmlParser(UserItem?.fullName)}</h2>
                                <ul className="listInfo">
                                    <li className="item-infoCV">
                                        <p>Ngày sinh:</p>
                                        <p> 19/10/2000</p>
                                    </li>
                                    <li className="item-infoCV">
                                        <p>Giới tính:</p>
                                        {UserItem?.gender===0?' Nam':' Nữ'}
                                    </li>
                                    <li className="item-infoCV">
                                        <p>Email:</p>
                                        {ReactHtmlParser(UserItem?.email)}
                                    </li>
                                    <li className="item-infoCV">
                                        <p>Số điện thoại:</p>
                                        {ReactHtmlParser(UserItem?.phone)}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3"> 
                                <div className="imgCV">
                                    {/* <img width="180" src="https://static.topcv.vn/avatars/k2O1EDfmHVk0TmW6rZnk_5f92dd1467ea7_cvtpl.jpg?1615907697" alt="" /> */}
                                    <img   src={UserItem?.cv} alt="" />
                                </div>
                            </div>

                        </div>
                        {ReactHtmlParser(UserItem?.description)}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default DetailCandidate
