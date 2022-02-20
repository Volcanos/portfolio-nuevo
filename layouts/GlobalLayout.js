import React from 'react';
import Head from 'next/head';
import styles from './GlobalLayout.module.scss';

const GlobalLayout = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>Borja Gracia Martín - Portfolio</title>
                <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
            </Head>           
            <div className={styles.globalWrapper}>
                {props.children}
            </div>
        </React.Fragment>
    );
}
export default GlobalLayout;