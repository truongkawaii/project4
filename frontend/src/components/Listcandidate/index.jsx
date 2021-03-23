import React from 'react'
import './Listcandidate.scss';
import ReactHtmlParser from 'react-html-parser';
import {Button} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import {skills} from '../../mocks/index';

function Listcandidate({data}) {
    const history = useHistory();
    console.log(data,'data');
    return (
        <div className="list-candidateSearch">
           <ul className="title-table">
               <li  className="idCandidate">mã cv</li>
               <li className="userNameCandidate">Username</li>
               <li className="fullNameCandidate">Tên đầy đủ</li>
               <li className="phoneCandidate">Số điện thoại</li>
               <li className="skill-candidate">Kĩ năng</li>
               <li className="verify-candidate">Verify</li>
               <li className="check-cv">Kiểm tra</li>
           
           </ul>
           {data?.map(item=>{
               return <div className="item-candidateS">
                   <div className="idCandidate">
                       {item.id}
                   </div>
                   <div className="userNameCandidate">
                       {ReactHtmlParser(item.userName)}
                   </div>
                   <div className="fullNameCandidate">
                       {ReactHtmlParser(item.fullName)}
                   </div>
                   <div className="phoneCandidate">
                       {ReactHtmlParser(item.phone?item.phone:'0312555444')}
                   </div>
                   <div className="skill-candidate">
                       {item.skills?.map(item=>{
                           return <h4 className="item-skill">{skills[item]}</h4>
                       })}
                        {item.skills?null:<h4 className="item-skill2">Chưa có</h4>}
                   </div>
                   <div className="verify-candidate">
                         { item.verify?<span className="verifyCV">Verifed</span> : <span className="notVerifyCV">Not Verify</span>}
                   </div>
                   <div className="check-cv">
                       <Button  onClick={()=>{history.push(`/detailcv/${item.id}`)}}>Check thông tin</Button>
                   </div>
               </div>
           })}
        </div>
    )
}

export default Listcandidate
