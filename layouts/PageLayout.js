import GlobalLayout from './GlobalLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './PageLayout.module.scss';

const PageLayout = (props) => {
    return (
        <GlobalLayout>
            <Header />
            <div className={styles.pageWrapper}>
                {props.children}
            </div>
            <Footer />
        </GlobalLayout>
    );
}

export default PageLayout;