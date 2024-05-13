import styles from './Search.module.css'
import classNames from 'classnames'

function Search({ setSearchInputValue, searchInputValue, darkTheme }) {
  const handleChangeSearchInputValue = (event) => {
    setSearchInputValue(event.target.value)
  }

  return (
    <form
      className={classNames(styles['search'], {
        [styles['dark']]: darkTheme,
      })}
    >
      <input
        value={searchInputValue}
        onChange={handleChangeSearchInputValue}
        type="text"
        placeholder="Search note..."
        className={classNames(styles['search_text'], {
          [styles['dark']]: darkTheme,
        })}
      />
      <button className={styles.search_btn}>
        {!darkTheme ? (
          <img src="/to-do/search.svg" alt="search" />
        ) : (
          <img src="/to-do/search-dark.svg" alt="search" />
        )}
      </button>
    </form>
  )
}

export default Search
