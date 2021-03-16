import React from 'react'
import './listJobFake.scss';
import { dataMock } from '../../constant/constant';

function ListJobFake() {

    return (
       
            <div className="card-item">
                {dataMock.map((item) => (
                    <div className="mock-item">
                        <div className="mock-cpn">
                            <img src={item.img} />
                            <div className="item-text">
                                <h3>
                                    {item.name.length > 32
                                        ? item.name.slice(0, 32) + "..."
                                        : item.name}
                                </h3>
                                <h5>
                                    {item.company.length > 30
                                        ? item.company.slice(0, 30) + "..."
                                        : item.company}
                                </h5>
                                <h6>{item.salary}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
 
    )
}

export default ListJobFake




































































