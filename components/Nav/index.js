import Anchor from '../Anchor';
import {menuStructure, mail} from '../Utils';
import stylesAnchor from '../Anchor/Anchor.module.scss';
import styles from './Nav.module.scss';

const handleClick = () => {
    let formedEmail = mail.reduce((a, v) => v === "#" ? a + "@" : a + v, "");
    window.open(`mailto:${formedEmail}`);
}

const Nav = () => {
    return (
        <nav>
            <ul className={styles.menulist}>
                {menuStructure.map((element, i) => {
                    return (
                        <li className={styles.menuelem} key={i}>
                            {element.url === 'handleClick' ?
                                <a className={stylesAnchor.anchor} onClick={handleClick}>
                                    {element.title}
                                </a>
                                :
                                <Anchor url={element.url} title={element.title}>
                                    {element.title}
                                </Anchor>
                            }                            
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}
export default Nav;