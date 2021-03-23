import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterListUserString, getListUser ,filterListUser, getProfileUser, getListUserRec} from '../../state/actions';
import ItemUser from '../../components/ItemUser';
import { Input } from 'antd';
import './SearchCandidate.scss';
import { Select } from 'antd';
import Listcandidate from '../../components/Listcandidate';
import {skills} from '../../mocks';


function SearchCandidate() {
    const { Option } = Select;
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.listUserSeedRec.items);
    const user = useSelector(state=>state.infoUser.user);
    // const dataRecruitment = useSelector(state=>state.listRecruitment.items);
    // const total = useSelector(state => state.listUser.total);
    console.log('dataUser', dataUser);
    useEffect( () => {
       
      dispatch(getProfileUser()); 
     
        
    }, [dispatch])

    function handleChange(value) {
        dispatch(filterListUser({key:value}))
    }
    function handleChangeInput(e) {
        dispatch(filterListUserString({name:e.target.value}))
        console.log(e.target.value);
    }
    // console.log(dataRecruitment,'dataRecruitment'); 
    return (
        <div className="find-candidate">
            <div className="container">
                <div className="searching">
                    <h1>Chiến dịch tìm kiếm ứng viên </h1>
                    <div className="search-input"> 
                        <Input placeholder="Tim kiem ung vien" onChange={handleChangeInput}  />
                        <Select defaultValue="Filter skills" style={{ width: 120 }} onChange={handleChange}>
                            {Object.keys(skills).map(item=>{
                                return <Option value={item}>{skills[item]}</Option>
                            })}
                        </Select>
                    </div>
                    <Listcandidate data={dataUser}/>
                </div>
            </div>
        </div>
    )
}

export default SearchCandidate
