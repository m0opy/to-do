import styles from './Logo.module.css'

function Logo() {
  return (
    <>
      <a href="#" className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
      </a>
    </>
  )
}

export default Logo
