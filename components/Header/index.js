import Nav from '../Nav';
import Logo from '../Logo';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <Logo />
            <Nav />
        </div>
    )
}
export default Header;
