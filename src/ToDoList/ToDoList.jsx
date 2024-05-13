import TaskItem from '../TaskItem/TaskItem'
import styles from './ToDoList.module.css'
import classNames from 'classnames'

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
        {!darkTheme ? (
          <img
            className={styles.empty_img}
            src="/to-do/empty.svg"
            alt="empty"
          />
        ) : (
          <img
            className={styles.empty_img}
            src="/to-do/empty-dark.svg"
            alt="empty"
          />
        )}
        <p
          className={classNames(styles['empty_text'], {
            [styles['dark']]: darkTheme,
          })}
        >
          Empty...
        </p>
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
