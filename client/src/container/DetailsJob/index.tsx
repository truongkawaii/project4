import React from 'react'
import DetailsRec from '../../components/DetailsRec';
import InfoRecruitment from '../../components/InfoRecruitment';
import './DetailsJob.scss';

function DetailsJob() {
    return (
        <div className="container">
            <div className="detail-job"> 
                <div className="detail-job__desc">
                <DetailsRec/>
                </div>
                <div className="detail-job__relation">
                <InfoRecruitment/>
                </div>
               
            </div>
        </div>
    )
}

export default DetailsJob;
