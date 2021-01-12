import React from "react";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from "../../container/Login";
import { addTodo } from "../../state/actions";
import 'antd/dist/antd.css';
import "./App.css";
import Loading from "../../common/Loading";

function App() {
  const todoList = useSelector((state: any) => state.todoList.num);
  const dispatch = useDispatch();

  const handlerAddTodo = () => {
    dispatch(addTodo());
  };

  return (
    <div className="App">
        <ToastContainer />
      <input type="text" placeholder="input" />
      <button onClick={handlerAddTodo}>CLICK</button>
      <h2>{todoList}</h2>
      <Login/>
    </div>
  );
}

export default App;
