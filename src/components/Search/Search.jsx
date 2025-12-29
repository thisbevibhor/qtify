import styles from './Search.module.css';
import SearchIcon from '../../assets/SearchIcon.svg'
const Search = () => {
    return (
        <div >
            <form className={styles.wrapper} action="">
                <input className={styles.search} placeholder='search' type="text" />
                <div>
                    <button className={styles.searchButton} type='submit'>
                        <img src={SearchIcon} alt='searchIcon' />
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Search