import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Dropdown from '../Dropgown/Dropdown'
import ThemeButton from '../ThemeButton/ThemeButton'

function Header({ filter, onChangeFilter }) {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.nav}>
        <Search></Search>
        <Dropdown filter={filter} setFilter={onChangeFilter} />
        <ThemeButton />
      </div>
    </div>
  )
}

export default Header
