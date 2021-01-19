import React from 'react';
import _ from 'lodash';
import { Modal, Button } from 'antd';
import './Jobs.scss';
import JobItem from './JobItem';

function Jobs({ listJob }) {
  return (
    <React.Fragment>
      {listJob.map(item => (
        <JobItem itemJob={item} key={item.id} />
      ))}
    </React.Fragment>
  );
}

export default Jobs;
