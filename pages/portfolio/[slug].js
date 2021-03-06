import { useRouter } from 'next/router';
import PageLayout from '../../layouts/PageLayout';
import {content} from './index';
import styles from './Portfolio.module.scss';
import Image from 'next/image';

const Project = () => {
    const router = useRouter();
    const { slug } = router.query;
    let {mainImage, title, subtitle, tags, github, description, web, listImages} = {...content.reduce((acc, elem) => elem.url === `/portfolio/${slug}` ? elem : acc , {})};
    return (
        <PageLayout>
            <div className={styles.contentInnerWrapper}>
                { mainImage && <Image src={mainImage} alt={title} width="960" height="430"/> }
                <div className={styles.columnsWrapper}>
                    <div className={styles.columnData}>
                        <h4 className={styles.titleProject}>{title}</h4>
                        <p className={styles.subtitleProject}>{subtitle}</p>
                        <ul className={styles.listTags}>
                            {tags && tags.map((element, i) => <li className={styles.tag} key={i}>{element}</li>)}
                        </ul>
                        {web && <a className={styles.gitAnchor} href={web.url} target="_blank" rel="noreferrer">{web.label}</a>}
                        {github && <a className={styles.gitAnchor} href={github} target="_blank" rel="noreferrer">Repositorio</a>}
                    </div>
                    <div className={styles.columnImages}>
                        {description}
                        {listImages && listImages.map((element, i) => <div key={i} className={styles.imageList}><Image src={element} alt={`${title} ${i}`}width="635" height="380"/></div>)}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Project;
