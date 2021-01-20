import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from 'antd';
import './UpLoadJob.scss';
import { uploadJob } from '../../state/actions';

function UpLoadJob() {
  const [data,setData] = useState({
    title:'',
    description:'',
    thumbnail:'',
    content:'',
    postType:1,
    file:null
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handlerUpImage = e => {
    let file = e.target.files[0];
    setData({ ...data,file});
  };

  const handlerAddJob = () =>{
    dispatch(uploadJob(data));
    history.push({pathname:'/recruitment'})
  }

  return (
    <div className="container">
      <h2>Tiêu đề Công việc</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Nhập tiêu đề công việc</p>" 
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(e, editor) => {
          const title = editor.getData();
          setData({...data,title});
          // console.log({ event, editor, data });
          console.log(data);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <h2>Mô tả công việc</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Vui lòng nhập mô tả công việc</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const description = editor.getData();
          setData({...data,description});
          console.log(data);
        }}
        onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
      <h2>Tác giả</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Nhập tên người tạo công việc </p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const content = editor.getData();
          // console.log({ event, editor, data });
          setData({...data,content});
          console.log(data);
        }}
        onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
      <h2>Up ảnh công việc</h2>
      <input type="file" onChange={handlerUpImage}/>

      <div className="up-job">
      <Button onClick={handlerAddJob} type="primary">Đăng công việc</Button>
      </div>
    </div>
  );
}

export default UpLoadJob;

 