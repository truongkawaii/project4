import React, { useEffect, useState } from 'react';
import DetailsRec from '../../components/DetailsRec';
import InfoRecruitment from '../../components/InfoRecruitment';
import { FaBuffer } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory} from 'react-router-dom';
import { applyToJob, getAllJob, getProfileUser, rejectApplyJob } from '../../state/actions';
import { Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';
import './DetailsJob.scss';

function DetailsJob() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const dispatch = useDispatch();
  const listJob = useSelector(state => state.jobs.posts);
  const userInfo = useSelector(state => state.infoUser.user);
  const history = useHistory();
  const param = useParams();
  const jobItem = listJob?.filter(item => item.id === parseInt(param.id))[0];
  console.log('jobItem', jobItem);
  console.log('param', param);
  useEffect(() => {
    dispatch(getAllJob());
    dispatch(getProfileUser());
  }, [])

  // infoUser
  const handleOk = (id) => {
    setIsModalVisible(false);
    dispatch(applyToJob(id))
  };
  const handleOk2 = (id)=>{
    setIsModalVisible2(false);
    dispatch(rejectApplyJob(id))
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  return (
    <div className="container">
      <div className="detail-job">
        <div className="detail-job__desc">
          <img src={jobItem?.thumbnail} alt="" />
          <DetailsRec detail={jobItem?.description} />
        </div>
        <div className="detail-job__relation">
          <InfoRecruitment />
          {userInfo?.roles[0].id === 3 ? <Button type="primary" size={'large'} onClick={() => setIsModalVisible(true)} >Ứng tuyển vào Job</Button> : null}

        </div>

      </div>
      {userInfo?.roles[0].id === 2? <div className="list-candidate-man">
        <h2 className="title-list">
          Danh sách ứng viên đã được apply
        </h2>
        <div className="item-join">
          {jobItem?.postFeedBacks.length > 0 ? jobItem.postFeedBacks.map(item => {
            if (item.postFeedBackType === 1 || item.postFeedBackType === 2) return;
            return (<>
              <h3>{item.user.id}</h3>
              <h5>{item.user.userName}</h5>
              <h5>{item.user.email}</h5>
              <Button type="primary" size={'large'} onClick={()=>{
                history.push(`/detailcv/${item.user.id}`);
              }} >Check thông tin </Button>
              <Button type="danger" size={'large'} onClick={()=>setIsModalVisible2(true)}  >Xóa ứng viên</Button>
            </>)
          }) : null}
        </div>

      </div>:null}
     
      <Modal cancelText="Hủy" okText="Đồng ý" title="Bạn có chắc muốn ứng tuyển vào Job" visible={isModalVisible} onOk={() => handleOk(jobItem.id)} onCancel={handleCancel}>
        {ReactHtmlParser(jobItem?.title)}
      </Modal>
      <Modal cancelText="Hủy" okText="Đồng ý" title="Bạn có chắc muốn Xóa ứng viên" visible={isModalVisible2} onOk={() => handleOk2(jobItem.id)} onCancel={handleCancel2}>
         
      </Modal>
    </div>
  )
}

export default DetailsJob;








