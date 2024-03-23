import style from './footer.module.css'

export default function Footer({completedTodo,totalTodo}){
return <div className={style.footer}>
    <span className={style.item}>completed Total Todos:{completedTodo.length}</span>
    <span className={style.item}>Total Todos:{totalTodo}</span>

</div>
}