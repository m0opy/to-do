import styles from './TaskItem.module.css'
import classNames from 'classnames'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/theme.context'

function TaskItem({
  id,
  text,
  checkpoint,
  onEditItem,
  onEditCheckpointItem,
  onDeleteItem,
}) {
  const { themeId } = useContext(ThemeContext)
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
    if (!inputValue) {
      setInputValue(text)
      return
    }
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
          src="/to-do/complete.svg"
          className={classNames(styles['complete_img'], {
            [styles['complete']]: finish,
          })}
          alt="complete"
        />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={classNames(styles['text_item'], {
          [styles['complete']]: finish,
          [styles['dark']]: themeId === 2,
        })}
      />
      <button onClick={editItem} className={styles.edit_item}></button>
      <button onClick={deleteItem} className={styles.delete_item}></button>
    </div>
  )
}

export default TaskItem
