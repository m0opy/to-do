import styles from './ThemeButton.module.css'
import { ThemeContext } from '../context/theme.context'
import { useContext } from 'react'

function ThemeButton() {
  const { themeId, setThemeId } = useContext(ThemeContext)
  function changeDarkTheme() {
    if (themeId === 1) {
      setThemeId(2)
    } else {
      setThemeId(1)
    }
  }
  return (
    <button onClick={changeDarkTheme} className={styles.theme_btn}>
      {themeId === 2 ? (
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
