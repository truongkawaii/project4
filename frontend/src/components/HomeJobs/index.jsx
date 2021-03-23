import React, { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { FaBuffer } from "react-icons/fa";

import { getAllJob } from '../../state/actions';
import './HomeJobs.scss';
import ItemJob from './ItemJob';

function HomeJobs() {
  const dispatch = useDispatch();
  const listJob = useSelector(state=>state.jobs.posts);

  useEffect(() => {
    dispatch(getAllJob());
  }, [])

  const data = listJob?.map(item=><ItemJob key={item.id} item={item}/>)
 
  return (
    <div className="home-job">
      <div className="list-job">
        <div className="job-detail-list">
          <span><FaBuffer/></span>
          <h4>Tất cả Job</h4>
        </div>
       <div className="data-jobs">
       {data}
       </div>
     
      </div>
      <div className="banner-job">
        <img src="https://firebasestorage.googleapis.com/v0/b/burgerbuilder-4fc93.appspot.com/o/co-viec-sieu-toc-cung-topcv%20(1).jpg?alt=media&token=58e676b0-e33f-43c8-98df-d3944a6dd254" alt=""/>
      </div>
    </div>
  )
}

export default HomeJobs
