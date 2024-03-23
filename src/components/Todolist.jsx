import Todoitem from "./Todoitem";
import todoStyle from './todolist.module.css'
import { useState } from "react";
import CompletedTodoOnly from "./CompletedTodoOnly";

export default function TodoList({ todos,settodos,CompleteTodo,setCompleteTodo }) {
  const [showCompleted, setShowCompleted] = useState(false);
  function handleToggleCompleted (){
    setShowCompleted(false)
  }

  function handleToggletodo(){
    setShowCompleted(true)
  }


  return (
  
    <div className={todoStyle.list}>
      {console.log("Todolist")}
      <button className={todoStyle.button} onClick={handleToggleCompleted }>To-do</button>
      <button className={todoStyle.buttonCompleted} onClick={handleToggletodo}>CompleteTodo</button>

      {showCompleted ? (
  CompleteTodo.map((item) => (
    <CompletedTodoOnly key={item.name} item={item}/>
  ))
) : (
  todos.map((item) => (
    <Todoitem key={item.name} item={item} todos={todos} settodos={settodos} CompleteTodo={CompleteTodo} setCompleteTodo={setCompleteTodo} />
  ))
)}


    </div>
  );
}
