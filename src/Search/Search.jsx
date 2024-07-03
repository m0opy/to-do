import styles from './Search.module.css'
import classNames from 'classnames'
import { ThemeContext } from '../context/theme.context'
import { useContext } from 'react'

function Search({ setSearchInputValue, searchInputValue }) {
  const { themeId } = useContext(ThemeContext)
  const handleChangeSearchInputValue = (event) => {
    setSearchInputValue(event.target.value)
  }

  return (
    <form
      className={classNames(styles['search'], {
        [styles['dark']]: themeId === 2,
      })}
    >
      <input
        value={searchInputValue}
        onChange={handleChangeSearchInputValue}
        type="text"
        placeholder="Search note..."
        className={classNames(styles['search_text'], {
          [styles['dark']]: themeId === 2,
        })}
      />
      <button className={styles.search_btn}>
        {themeId === 1 ? (
          <img src="/to-do/search.svg" alt="search" />
        ) : (
          <img src="/to-do/search-dark.svg" alt="search" />
        )}
      </button>
    </form>
  )
}

export default Search
