import styles from './Header.module.css'
import Search from '../Search/Search'
import Dropdown from '../Dropgown/Dropdown'
import ThemeButton from '../ThemeButton/ThemeButton'
import classNames from 'classnames'
import { ThemeContext } from '../context/theme.context'
import { useContext } from 'react'

function Header({ filter, onChangeFilter, onSearchChange, searchText }) {
  const { themeId } = useContext(ThemeContext)
  return (
    <div className={styles.container}>
      <p
        className={classNames(styles['title'], {
          [styles['dark']]: themeId === 2,
        })}
      >
        Todo List
      </p>
      <div className={styles.nav}>
        <Search
          searchInputValue={searchText}
          setSearchInputValue={onSearchChange}
        />
        <Dropdown filter={filter} setFilter={onChangeFilter} />
        <ThemeButton />
      </div>
    </div>
  )
}

export default Header
