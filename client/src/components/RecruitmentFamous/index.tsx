import React from "react";
import { Company } from "../../model/company";
import "./RecruitmentFamous.scss";

function RecruitmentFamous({listRecruitmentFamous}:{listRecruitmentFamous:Company[]}) {

  const listData = listRecruitmentFamous.map(item=> {
    return <div className="rec__item" key={item.id}>
        <img src={item.src} alt=""/>
    </div>
  } )

  return (
    <div className="rec__famous">
      <div className="container">
        <h2 className="recruitment-title">Nhà tuyển dụng nổi bật</h2>
        <div className="rec__famous-list">
              {listData}
        </div>
      </div>
    </div>
  );
}

export default RecruitmentFamous;
