import styles from './TaskItem.module.css'
import classNames from 'classnames'
import { useState } from 'react'

function TaskItem({ id, text, checkpoint, onEditItem, onEditCheckpointItem }) {
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

  return (
    <div className={styles['list_item']}>
      <button
        onClick={checkItem}
        className={classNames(styles['check_btn'], {
          [styles['finished']]: finish,
        })}
      >
        <img
          src="/finished.svg"
          className={styles.finished_img}
          alt="finished"
        />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={classNames(styles['text_item'], {
          [styles['finished']]: finish,
        })}
      />
      <button onClick={editItem} className={styles.edit_item}></button>
      <button className={styles.delete_item}></button>
    </div>
  )
}

export default TaskItem
