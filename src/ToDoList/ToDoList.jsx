import TaskItem from '../TaskItem/TaskItem'
import styles from './ToDoList.module.css'

function ToDoList({
  items,
  onEditItem,
  onEditCheckpointItem,
  onDeleteItem,
  filter,
  searchText,
  darkTheme,
}) {
  let filteredItems = items.filter((item) => {
    if (filter === 'Complete') {
      return item.checkpoint
    } else if (filter === 'Incomplete') {
      return !item.checkpoint
    }
    return true
  })

  if (searchText) {
    filteredItems = filteredItems.filter((item) =>
      item.text.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  if (items.length === 0 || filteredItems.length === 0) {
    return (
      <>
        <img className={styles.empty_img} src="/empty.svg" alt="empty" />
        <p className={styles.empty_text}>Empty...</p>
      </>
    )
  }

  return (
    <div className={styles.container}>
      {filteredItems.map((el) => (
        <TaskItem
          key={el.id}
          id={el.id}
          text={el.text}
          checkpoint={el.checkpoint}
          onEditItem={onEditItem}
          onEditCheckpointItem={onEditCheckpointItem}
          onDeleteItem={onDeleteItem}
          darkTheme={darkTheme}
        />
      ))}
    </div>
  )
}

export default ToDoList
