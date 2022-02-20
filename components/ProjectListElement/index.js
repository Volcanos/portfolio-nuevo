import LinkedImage from '../LinkedImage';
import Anchor from '../Anchor';
import styles from './ProjectListElement.module.scss';

const ProjectListElement = (props) => {
    const {url, title, mainImage, subtitle} = {...props}
    return (
        <div className={styles.projectListWrapper}>
            <LinkedImage url={url} title={title} image={mainImage} prefetch={false} />
            <h4 className={styles.titleProject}>{title}</h4>
            <p className={styles.subtitleProject}>{subtitle}</p>
            <Anchor url='/portfolio/[slug]' as={url} fontSize=".8rem" prefetch={false}>Detalles</Anchor>
        </div>
    )
}
export default ProjectListElement;