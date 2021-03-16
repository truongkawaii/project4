import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {useHistory} from 'react-router-dom';
import { FaFolderMinus } from 'react-icons/fa';
import './ItemJob.scss';

function ItemJob({item}) {
    const history = useHistory();
    const handlerViewDetail = (id)=>{
      history.push(`/detail/${id}`);
    }
    return (
        <div className="item-job">
           <div className="item__job">
           <img src={item.thumbnail} alt=""/>
           <div className="item__info">
            <p>  {  ReactHtmlParser(item.title) }</p>
           <h5>{item.author}</h5>
           <span onClick={()=>handlerViewDetail(item.id)}><FaFolderMinus/></span>
           </div>
           </div>
        </div>
    )
}

export default ItemJob
