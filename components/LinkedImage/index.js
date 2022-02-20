import Link from 'next/link';
import styles from './LinkedImage.module.scss';
import Image from 'next/image';

const LinkedImage = ({url, image, title, prefetch = true}) => {
    return (
        <Link href={url} prefetch={prefetch}>
            <a className={styles.imageAnchor}>
                <Image src={image} alt={title} />
            </a>
        </Link>
    )
}
export default LinkedImage;
