import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import Advisory from '../../components/Advisory';
import Banner from '../../components/Banner';
import HomeJobs from '../../components/HomeJobs';
import ListJobFake from '../../components/listJobFake';
import RecruitmentFamous from '../../components/RecruitmentFamous';
import { Company } from '../../mocks';

function Home() {
  const infoUser = useSelector(state=>state.infoUser.user);
  console.log('infoUser',infoUser);
  return (
    <div className="container">
      <Banner/>
      <HomeJobs/>
      <ListJobFake/>
      <RecruitmentFamous listRecruitmentFamous={Company} />
      <Advisory />
    </div>
  );
}

export default Home;
