import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            Diseñado y maquetado por Borja Gracia Martín
            { <a href="https://github.com/Volcanos/portfolio" target="_blank">GitHub</a> }
        </div>
    )
}
export default Footer;