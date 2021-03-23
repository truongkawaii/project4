import { Button } from 'antd';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useLocation,useParams,useHistory} from 'react-router-dom';
import { addCoins } from '../../state/actions';
import './Checkout.scss';

function Checkout() {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
     const dispatch = useDispatch()
    console.log(location,'location');
    console.log(params,'params');
  const handlerAddcoins =()=>{
      const id = params.id;
      const coins = location.coins;
      dispatch(addCoins({id,coins}))
      history.push('/home');
  }
    return (
        <div className="container">
        <div className="payment__cover">
            <div className="payment__component">
                <div className="payment__left">
                    <div className="title">
                        <p>SELECT PAYMENT METHOD</p>
                        <div className="border"></div>
                    </div>
                    <div className="method">
                        <div className="method-info">
                            <span className="image"><i className="fa fa-credit-card-alt" aria-hidden="true"></i></span>
                            <span>Credit Card</span>
                        </div>
                        <div className="method-info">
                            <span className="image"><i className="fa fa-exchange" aria-hidden="true"></i></span>
                            <span>Bank Transfer</span>
                        </div>
                        <div className="method-info">
                            <span className="image"><i className="fa fa-paypal" aria-hidden="true"></i></span>
                            <span>Paypal</span>
                        </div>
                    </div>
                    <div className="customer">
                        <div className="name">
                            <p>NAME ON CARD</p>
                            <div className="input">

                            </div>
                        </div>
                        <div className="card-number">
                            <p>CARD NUMBER</p>
                            <div className="input">
                                <div className="placeholder">
                                    <img src="./assets/img/Debit--VNA_Platinum-Vietnam-Airlines.jpg" alt=""/>
                                    <p>0000-0000-0000-0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="datetime">
                        <div className="month">
                            <div className="title">
                                <p>MONTH</p>
                            </div>
                            <div className="input">
                                <div className="select">
                                    <p>Select Month</p>
                                    <span><i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <div className="title">
                                <p>YEAR</p>
                            </div>
                            <div className="input">
                                <div className="select">
                                    <p>Select Year</p>
                                    <span><i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cvv">
                            <div className="title">
                                <p>CVV</p>
                            </div>
                            <div className="input">
                                <div className="infor">
                                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment__right">
                    <div className="order-infor">
                        <div className="title">
                            <p>ORDER SUMARY</p>
                            <div className="border"></div>
                        </div>
                        <div className="order-name">
                            <span>
                                Samsung Galaxy S8
                            </span>
                            <span className="color">$685</span>
                        </div>
                        <div className="order-des">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="order-spec">
                            <div className="spec-left">
                                <div className="component">
                                    <span className="check"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span>126G storage</span>
                                </div>
                                <div className="component">
                                    <span className="check"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span>5.7' screen</span>
                                </div>
                                <div className="component">
                                    <span className="check"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span>6G Ram</span>
                                </div>
                            </div>
                            <div className="spec-right">
                                <div className="component">
                                    <span className="check"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span>4K display</span>
                                </div>
                                <div className="component">
                                    <span className="check"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span>Silver</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-pub">
                        <div className="pub-title">
                            <p>WEDNESDAY</p>
                        </div>
                        <p>January 18, 2017 | 11:00 AM</p>
                    </div>
                    <div className="purchase">
                         <Button onClick={handlerAddcoins}>PURCHASE NOW</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Checkout
