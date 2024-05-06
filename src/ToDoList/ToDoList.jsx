import styles from './ToDoList.module.css'

function ToDoList() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <input type="checkbox" id="1" />
          <label htmlFor="1">Заметка 1</label>
        </li>
        <li>
          <input type="checkbox" id="2" />
          <label htmlFor="2">Заметка 2</label>
        </li>
      </ul>
    </div>
  )
}

export default ToDoList
