import styles from './ThemeButton.module.css'

function ThemeButton({ onChangeDarkTheme, darkTheme }) {
  return (
    <button onClick={onChangeDarkTheme} className={styles.theme_btn}>
      {!darkTheme ? (
        <img
          src="/theme-dark.svg"
          alt="dark"
          className={styles['dropdown_btn_img']}
        />
      ) : (
        <img
          src="/theme-light.svg"
          alt="light"
          className={styles['dropdown_btn_img']}
        />
      )}
    </button>
  )
}

export default ThemeButton
