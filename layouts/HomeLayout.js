import GlobalLayout from './GlobalLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './HomeLayout.module.scss';

const HomeLayout = (props) => {
    return (
        <GlobalLayout>
            <Header />
            <div className={styles.homeWrapper}>
                {props.children}
            </div>
            <Footer />
        </GlobalLayout>
    );
}

export default HomeLayout;
