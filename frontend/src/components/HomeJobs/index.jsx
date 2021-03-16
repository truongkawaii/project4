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
        <img src="https://static.topcv.vn/manual/co-viec-sieu-toc-cung-topcv.png" alt=""/>
      </div>
    </div>
  )
}

export default HomeJobs
