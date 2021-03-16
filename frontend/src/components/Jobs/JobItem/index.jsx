import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import './JobItem.scss';
import { Link } from 'react-router-dom';
import { deleteRec } from '../../../state/actions';
import { Button } from 'antd';

function JobItem({ itemJob }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(deleteRec(itemJob.id));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="itemJob">
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="Xóa Job"
        okText="Đồng ý"
        cancelText="Hủy bỏ"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có muốn xóa không ?</p>
        <h5 className="itemJob-title">{ReactHtmlParser(itemJob.title)}</h5>
      </Modal>
      <h5 className="idJob">{itemJob.id} </h5>
      <div className="job-img">
        <img src={itemJob.thumbnail} alt="ko co anh" />
      </div>
      <h5 className="itemJob-title"><Link to={`/detail/${itemJob.id}`}>{ReactHtmlParser(itemJob.title)}</Link></h5>
      <h6 className="authorJob">{itemJob.author}</h6>
      <h6 className="dateJob">{itemJob.createdAt}</h6>
      <div className="optionJob">
        <div className="jobEdit">
          <Link to={`/editjob/${itemJob.id}`}> <Button type="primary" size={"large"}>
            EDIT <FaPencilAlt />
          </Button></Link>
        </div>
        <div className="jobDelete" onClick={showModal}>
         <Button type="danger" size={"large"}>
            XÓA <FaRegTrashAlt />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
