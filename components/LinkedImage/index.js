import Link from 'next/link';
import styles from './LinkedImage.module.scss';

const LinkedImage = ({url, image, title, prefetch = true}) => {
    return (
        <Link href={url} prefetch={prefetch}>
            <a className={styles.imageAnchor}>
                <img src={image} title={title} />
            </a>
        </Link>
    )
}
export default LinkedImage;
