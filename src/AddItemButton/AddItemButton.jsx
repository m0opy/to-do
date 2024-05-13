import styles from './AddItemButton.module.css'

function AddItemButton({ onChangeShow }) {
  return (
    <div className={styles.container}>
      <button onClick={onChangeShow} className={styles.add_btn}>
        <img className={styles.add_img} src="/to-do/add.svg" alt="add" />
      </button>
    </div>
  )
}

export default AddItemButton
