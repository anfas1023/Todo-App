import styles from "./todoitem.module.css";
import { useEffect, useState } from "react";
export default function Todoitem({
  item,
  todos,
  settodos,
  CompleteTodo,
  setCompleteTodo,
}) {
  useEffect(() => {
    // Update CompleteTodo state whenever todos or item.done changes
    const completedTodos = todos.filter((todo) => todo.done);
    setCompleteTodo(completedTodos);
  }, [todos, item.done, setCompleteTodo]);

  const [editing, setEditing] = useState(false);
  const [editedName, setEditingName] = useState(item.name);

  function handleDelete(item) {
    console.log("buttton clicked", item, todos);
    let filiterTodos = todos.filter((todo) => todo !== item);
    settodos(filiterTodos);
  }

  function handleClick(name) {
    let newTodo = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(newTodo);
  }
  const completedTask = item.done ? styles.completed : " ";

  function handleSaveChanges(item) {
    // console.log("currentItem",currentItem);
    const updatedTodos = todos.map((todo) =>
      item.name === todo.name ? { ...item, name: editedName } : todo
    );
    settodos(updatedTodos);

    setEditing(false);
    console.log("updatedTodos", updatedTodos);
    console.log("todos", todos);
  }

  function handleEditClick() {
    setEditing(true);
  }
  return (
    <div className={styles.item}>
      {console.log("todo item")}
      <div className={styles.itemName}>
        <span className={completedTask} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        {/* editbutton */}
        <span>
          {editing ? (
            <>
              <input
                onChange={(e) => setEditingName(e.target.value)}
                type="text"
                value={editedName}
              />

              <button onClick={() => handleSaveChanges(item)}>Save</button>
            </>
          ) : (
            <button className={styles.Edit} onClick={handleEditClick}> Edit</button>
          )}
          {/* delete button */}
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
