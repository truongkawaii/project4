import React, { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import './Recruitment.scss';
import { getAllJob } from '../../state/actions';
import Jobs from '../../components/Jobs';
import Search from '../../components/Search';

function Recruitment() {
  const dispatch = useDispatch();
  const listJob = useSelector(state=>state.jobs.posts);

  useEffect(() => {
    dispatch(getAllJob());
  }, [])

  console.log(listJob,'listJob');
  return (
    <div className="bg-rec">
    <Search/>
      <div className="container">
        <div className="listjob-rec">
          <div className="search__card">
            <h2>Chiến dịch tìm kiếm ứng viên</h2>
          </div>
          {listJob? <Jobs listJob={listJob}/>:null }
         
        </div>
      </div>
    </div>
  );
}

export default React.memo(Recruitment);
