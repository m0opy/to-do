import styles from './ThemeButton.module.css'

function ThemeButton({ onChangeDarkTheme, darkTheme }) {
  return (
    <button onClick={onChangeDarkTheme} className={styles.theme_btn}>
      {!darkTheme ? (
        <img
          src="/to-do/theme-dark.svg"
          alt="dark"
          className={styles['dropdown_btn_img']}
        />
      ) : (
        <img
          src="/to-do/theme-light.svg"
          alt="light"
          className={styles['dropdown_btn_img']}
        />
      )}
    </button>
  )
}

export default ThemeButton
