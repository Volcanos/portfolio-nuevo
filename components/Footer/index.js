import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            Diseño y programación por Borja Gracia
            { <a href="https://github.com/Volcanos/portfolio-nuevo" target="_blank" rel="noreferrer">GitHub</a> }
        </div>
    )
}
export default Footer;