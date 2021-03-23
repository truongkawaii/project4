import React, { useState } from 'react'
import { Button } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUser } from '../../state/actions';
import { Select } from 'antd';
import {skills} from '../../mocks';
import './EditCV.scss';
const { Option } = Select;



// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

function EditCV() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.infoUser.user);
    const [data, setData] = useState({
        description: user ? user.description : '',
        cv: user ? user.cv : '',
        fullName: user ? user.fullName : '',
        // cv: null,
        // avatar: null,
        skills: [1, 2, 3, 4],
        phone: user ? user.phone : '',
        email: user ? user.email : '',
        recruitmentType: 0,
        position: 0,
    });
    const handlerUpCV = e => {
        let cv = e.target.files[0];
        setData({ ...data, cv });
    };
    const handlerUpAvatar = e => {
        let firstName = e.target.files[0];
        setData({ ...data, firstName });
    };
    const handlerUpdateCV = () => {
        // console.log(data, 'data');
        dispatch(editUser(data));
        history.push(`/detailcv/${user?.id}`)
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
       const dataNum = [...value].map(item=>parseInt(item)); 
       setData({...data,skills:[...dataNum]});
       console.log(data.skills);
    }
    return (
        <div className="updateCV">
            <div className="container">
                {/* FULL NAME   */}
                <h2>Tên đầy đủ</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data={`${user?.fullName}`}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(e, editor) => {
                        const fullName = editor.getData();
                        setData({ ...data, fullName });
                        // console.log({ event, editor, data });
                        console.log(data);
                    }}
                    onBlur={(event, editor) => {
                        const fullName = editor.getData();
                        setData({ ...data, fullName });
                    }}
                    onFocus={(event, editor) => {
                        const fullName = editor.getData();
                        setData({ ...data, fullName });
                    }}
                />
                {/* Kĩ năng  */}
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' ,marginTop:'25px'}}
                    placeholder="Please select"
                    // defaultValue={[skills[1],skills[2]]}
                    onChange={handleChange}
                >
                   
                    {Object.keys(skills).map(item=>{
                                return <Option value={item}>{skills[item]}</Option>
                   })}
                </Select>
            
                {/* PHONE NUMBER  */}
                <h2>Số điện thoại</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data={`${user?.phone}`}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(e, editor) => {
                        const phone = editor.getData();
                        setData({ ...data, phone });
                        // console.log({ event, editor, data });
                        console.log(data);
                    }}
                    onBlur={(event, editor) => {
                        const phone = editor.getData();
                        setData({ ...data, phone });
                    }}
                    onFocus={(event, editor) => {
                        const phone = editor.getData();
                        setData({ ...data, phone });
                    }}
                />
                {/* EMAIL  */}
                <h2>Email</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data={`${user?.email}`}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(e, editor) => {
                        const email = editor.getData();
                        setData({ ...data, email });
                        // console.log({ event, editor, data });
                        console.log(data);
                    }}
                    onBlur={(event, editor) => {
                        const email = editor.getData();
                        setData({ ...data, email });
                    }}
                    onFocus={(event, editor) => {
                        const email = editor.getData();
                        setData({ ...data, email });
                    }}
                />
                {/* DESCRIPTION CV  */}
                <h2>Mô tả thông tin</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data={`${user?.description}`}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(e, editor) => {
                        const description = editor.getData();
                        setData({ ...data, description });
                        // console.log({ event, editor, data });
                        console.log(data);
                    }}
                    onBlur={(event, editor) => {
                        const description = editor.getData();
                        setData({ ...data, description });
                    }}
                    onFocus={(event, editor) => {
                        const description = editor.getData();
                        setData({ ...data, description });
                    }}
                />
                {/* FILE CV  */}
                {/* <h2>File CV</h2>
                <input type="file" onChange={handlerUpCV} /> */}
                {/* AVATAR CV  */}
                <h2>Avatar của bạn</h2>
                <input type="file" onChange={handlerUpCV} />
                <div className="up-job">
                    <Button onClick={handlerUpdateCV} type="primary">CẬP NHẬT PROFILE</Button>
                </div>
            </div>
        </div>
    )
}

export default EditCV
