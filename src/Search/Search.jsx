import styles from './Search.module.css'

function Search() {
  return (
    <form className={styles.search}>
      <input
        type="text"
        placeholder="Search note..."
        className={styles.search_text}
      />
      <button className={styles.search_btn}>
        <img src="/search.svg" alt="search" />
      </button>
    </form>
  )
}

export default Search
