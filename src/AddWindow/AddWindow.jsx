import styles from './AddWindow.module.css'
import classNames from 'classnames'
import { useContext, useRef } from 'react'
import { ThemeContext } from '../context/theme.context'

function AddWindow({
  show,
  onChangeShow,
  onSubmit,
  valid,
  onChangeValid,
  inputValue,
  onChangeValue,
}) {
  const { themeId } = useContext(ThemeContext)
  const inputRef = useRef()

  const handleInputChange = (event) => {
    onChangeValue(event.target.value)
  }

  const addToDoItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const fromProps = Object.fromEntries(formData)
    if (!fromProps.text?.trim().length) {
      onChangeValid(false)
      inputRef.current.focus()
      return
    }
    onChangeValid(true)
    onSubmit(fromProps)
    onChangeValue('')
  }

  return (
    <div
      className={classNames(styles['container'], {
        [styles['show']]: show,
      })}
    >
      <div className={styles.modal_backdrop}></div>
      <div
        className={classNames(styles['add_container'], {
          [styles['dark']]: themeId === 2,
        })}
      >
        <form
          className={classNames(styles['add_form'], {
            [styles['dark']]: themeId === 2,
          })}
          onSubmit={addToDoItem}
        >
          <p
            className={classNames(styles['add_title'], {
              [styles['dark']]: themeId === 2,
            })}
          >
            New note
          </p>
          <input
            name="text"
            value={inputValue}
            onChange={handleInputChange}
            ref={inputRef}
            className={classNames(styles['add_input'], {
              [styles['invalid']]: !valid,
              [styles['dark']]: themeId === 2,
            })}
            placeholder="Input your note..."
            type="text"
          />
          <div className={styles.add_btn}>
            <button
              onClick={onChangeShow}
              className={styles.add_cancel_btn}
              type="button"
            >
              Cancel
            </button>
            <button className={styles.add_apply_btn} type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWindow
