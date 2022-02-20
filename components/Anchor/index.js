import Link from 'next/link';
import styles from './Anchor.module.scss';

const Anchor = (props) => {
    let prefetch = typeof props.prefetch !== 'undefined' ? props.prefetch : true;
    let properties = prefetch ? {href: props.url, as: props.as} : {href: props.url, as: props.as, prefetch: false};
    return (
        <Link {...properties}>
            <span className={styles.anchor} style={props.style}>
                {props.children}
            </span>
        </Link>
    )
}
export default Anchor;
