import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../state/actions";
import "./App.css";

function App() {
  const todoList = useSelector((state: any) => state.todoList.num);
  const dispatch = useDispatch();

  const handlerAddTodo = () => {
    dispatch(addTodo());
  };

  return (
    <div className="App">
      <input type="text" placeholder="input" />
      <button onClick={handlerAddTodo}>CLICK</button>
      <h2>{todoList}</h2>
    </div>
  );
}

export default App;
