import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Recruitment.scss';
import { getAllJob,approveJob,rejectApplyJob } from '../../state/actions';
import Jobs from '../../components/Jobs';
import Search from '../../components/Search';
import { Button } from 'antd';
import ReactHtmlParser from 'react-html-parser';

function Recruitment() {
  const dispatch = useDispatch();
  const listJob = useSelector(state => state.jobs.posts);

  useEffect(() => {
    dispatch(getAllJob());
  }, [])

  const handlerApprove=(id)=>{
    dispatch(approveJob(id));
  }
  const handlerReject=(id)=>{
    dispatch(rejectApplyJob(id));
  }

  console.log(listJob, 'listJob');
  return (
    <div className="bg-rec">
      <Search />
      <div className="container">
        <div className="listjob-rec">
          <div className="search__card">
            <h2>Chiến dịch tìm kiếm ứng viên</h2>
          </div>
          {listJob ? <Jobs listJob={listJob} /> : null}

        </div>
        <div className="listjob-rec">
          <h2>Danh sách ứng viên muốn ứng tuyển</h2>
          {listJob?.map(item => {
            if (item.postFeedBacks.length === 0) return;
           return item.postFeedBacks.map(itemReq => {
            if(itemReq.postFeedBackType!==1) return;
            return <div key={itemReq.id} className="join-Job">
            <h4>Ứng viên {itemReq.user.userName}</h4>
            <div className="option-job">
              <p>Đã ứng tuyển vào Job { ReactHtmlParser(itemReq.post.title)}</p>
              <Button onClick={()=>handlerApprove(itemReq.id)} type="primary" size={"large"}>
                Đồng ý  </Button>
              <Button onClick={()=>handlerReject(itemReq.id)} type="danger" size={"large"}>
                Từ chối </Button>
            </div>
          </div>
           }) })}

        </div>
      </div>
    </div>
  );
}

export default React.memo(Recruitment);
