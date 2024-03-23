import { useState } from "react";
import TodoList from "./Todolist";
import Form from './Formcomponent';
import Footer from "./Footer";

export default function () {
  const [todos,settodos] =useState([]);
  const [CompleteTodo,setCompleteTodo]=useState([])
  const completedTodo=todos.filter((todo)=>{
    if(todo.done){
      return todo
    }else{

    }
  })

  let totalTodo=todos.length

  console.log(completedTodo.length);
  return (
    <div> 
      <Form  todos={todos} settodos={settodos}/>
      <TodoList todos={todos} settodos={settodos} CompleteTodo={CompleteTodo} setCompleteTodo={setCompleteTodo} />
      <Footer completedTodo={completedTodo} totalTodo={totalTodo} />
      </div>

  );
}
