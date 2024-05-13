import styles from './TaskItem.module.css'
import classNames from 'classnames'
import { useState } from 'react'

function TaskItem({
  id,
  text,
  checkpoint,
  onEditItem,
  onEditCheckpointItem,
  onDeleteItem,
}) {
  const [finish, setFinish] = useState(checkpoint)
  const [inputValue, setInputValue] = useState(text)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const checkItem = () => {
    const newFinish = !finish
    setFinish(newFinish)
    onEditCheckpointItem(id, newFinish)
  }

  const editItem = () => {
    onEditItem(id, inputValue)
  }

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <div
      className={classNames(styles['list_item'], {
        [styles['complete']]: finish,
      })}
    >
      <button
        onClick={checkItem}
        className={classNames(styles['check_btn'], {
          [styles['complete']]: finish,
        })}
      >
        <img
          src="/complete.svg"
          className={styles.complete_img}
          alt="complete"
        />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={classNames(styles['text_item'], {
          [styles['complete']]: finish,
        })}
      />
      <button onClick={editItem} className={styles.edit_item}></button>
      <button onClick={deleteItem} className={styles.delete_item}></button>
    </div>
  )
}

export default TaskItem
