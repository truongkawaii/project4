import React from "react";
import { Company } from "../../model/company";
import _ from "lodash";
import "./RecruitmentFamous.scss";

interface User {
  listRecruitmentFamous: Company[];
}

const  RecruitmentFamous: React.FC<User> = (props) => {
  const { listRecruitmentFamous } = props;

  const listData = _.map(listRecruitmentFamous, (item) => (
    <div className="rec__item" key={item.id}>
      <img src={item.src} alt="" />
    </div>
  ));

  return (
    <div className="rec__famous">
      <div className="container">
        <h2 className="recruitment-title">Nhà tuyển dụng nổi bật</h2>
        <div className="rec__famous-list">{listData}</div>
      </div>
    </div>
  );
}

export default RecruitmentFamous;
