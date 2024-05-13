import styles from './Dropdown.module.css'
import { useState } from 'react'
import classNames from 'classnames'

function Dropdown({ filter, setFilter }) {
  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(!open)
  }
  return (
    <div className={styles.dropdown}>
      <button
        onClick={openMenu}
        className={classNames(styles['dropdown_btn'], {
          [styles['main_btn_closed']]: open,
        })}
      >
        {filter}
        {!open ? (
          <img
            src="/dropdown_btn-close.svg"
            alt="close"
            className={styles.dropdown_btn_img}
          />
        ) : (
          <img
            src="/dropdown_btn-open.svg"
            alt="open"
            className={styles.dropdown_btn_img}
          />
        )}
      </button>
      <div
        className={classNames(styles['dropdown_list'], {
          [styles['closed']]: !open,
        })}
      >
        <button
          className={classNames(styles['dropdown_item'], {
            [styles['closed']]: !open,
          })}
          href="#"
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          className={classNames(styles['dropdown_item'], {
            [styles['closed']]: !open,
          })}
          href="#"
          onClick={() => setFilter('Complete')}
        >
          Complete
        </button>
        <button
          className={classNames(styles['dropdown_item'], {
            [styles['closed']]: !open,
          })}
          href="#"
          onClick={() => setFilter('Incomplete')}
        >
          Incomplete
        </button>
      </div>
    </div>
  )
}

export default Dropdown
