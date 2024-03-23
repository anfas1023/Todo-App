import { useState } from "react";
import formStyle from './Form.module.css'

export default function Form({todos,settodos}) {

  const [todo, setTodo] = useState({name:"",done:false});
  function handleSubmit(e){
    e.preventDefault()
    settodos([...todos,todo])
    setTodo({name:"",done:false})
}

  return (
    <form className={formStyle.todoForm} onSubmit={handleSubmit}>
      <div className={formStyle.inputContainer}>
      <input className={formStyle.modernInput}
        type="text" placeholder="Enter items..."
        onChange={(e) => setTodo({name:e.target.value,done:false})}
        value={todo.name}
      ></input>
      <button className={formStyle.modernButton} type="submit">Add</button>
      </div>
    
    </form>
  );
}
