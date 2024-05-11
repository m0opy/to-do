import styles from './ThemeButton.module.css'

function ThemeButton() {
  return (
    <button className={styles.theme_btn}>
      <img src="/theme-dark.svg" className="dark_theme-img" alt="Dark" />
    </button>
  )
}

export default ThemeButton
