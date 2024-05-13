import styles from './Header.module.css'
import Search from '../Search/Search'
import Dropdown from '../Dropgown/Dropdown'
import ThemeButton from '../ThemeButton/ThemeButton'
import classNames from 'classnames'

function Header({
  filter,
  onChangeFilter,
  onSearchChange,
  searchText,
  onChangeDarkTheme,
  darkTheme,
}) {
  return (
    <div className={styles.container}>
      <p
        className={classNames(styles['title'], {
          [styles['dark']]: darkTheme,
        })}
      >
        Todo List
      </p>
      <div className={styles.nav}>
        <Search
          searchInputValue={searchText}
          setSearchInputValue={onSearchChange}
          darkTheme={darkTheme}
        />
        <Dropdown filter={filter} setFilter={onChangeFilter} />
        <ThemeButton
          darkTheme={darkTheme}
          onChangeDarkTheme={onChangeDarkTheme}
        />
      </div>
    </div>
  )
}

export default Header
