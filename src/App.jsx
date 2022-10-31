import React, { useState } from "react";
import "./App.css";
import Homework from "./componets/Homework";

function App() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const saveText = (e) => {
    e.preventDefault();
    const value = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const array = [...todo];
    array.push(value);
    setTodo(array);
    console.log(todo);
  };
   
  const changeValue = (e) => {
    e.preventDefault();
    const valor = e.target.value;

    setTitle(valor);
  };

  return (
    <div className="conteiner">
      <form className="conteiner-form">
        <input className="form-input" onChange={changeValue}  />
        <input className="form-input-clik"  onClick={saveText} type="submit" value="crear tarea" />
      </form>
      <div className="cont-homework">
        {todo.map((item) => (
          <Homework item={item} value={title} todo={todo} set={setTodo} />
        ))}
      </div>

    </div>
  );
}

export default App;
