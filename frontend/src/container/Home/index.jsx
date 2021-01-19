import React from 'react';
import Advisory from '../../components/Advisory';
import RecruitmentFamous from '../../components/RecruitmentFamous';
import { Company } from '../../mocks';

function Home() {
  return (
    <div>
      <RecruitmentFamous listRecruitmentFamous={Company} />
      <Advisory />
    </div>
  );
}

export default Home;
