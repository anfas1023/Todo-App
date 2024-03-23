 import style from './Complete.module.css'
 
 export default function CompletedTodoOnly({ item }) {
  return <div className={style.item}>
    <span className={style.itemName}>{item.name}</span>
    <hr className={style.line}></hr>
  </div>;
}
