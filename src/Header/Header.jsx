import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Dropdown from '../Dropgown/Dropdown'

function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.nav}>
        <Search></Search>
        <Dropdown></Dropdown>
        <button>Тема</button>
      </div>
    </div>
  )
}

export default Header
