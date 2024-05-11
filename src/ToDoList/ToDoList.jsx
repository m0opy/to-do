import TaskItem from '../TaskItem/TaskItem'
import styles from './ToDoList.module.css'

function ToDoList({ items, onEditItem, onEditCheckpointItem }) {
  return (
    <div className={styles.container}>
      {items.map((el) => (
        <TaskItem
          key={el.id}
          id={el.id}
          text={el.text}
          checkpoint={el.checkpoint}
          onEditItem={onEditItem}
          onEditCheckpointItem={onEditCheckpointItem}
        />
      ))}
    </div>
  )
}

export default ToDoList
