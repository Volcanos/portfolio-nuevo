import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import styles from './Experience.module.scss';

const Experiencie = () => {
    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h3 className={styles.titleSection}>Experiencia laboral</h3>
                <div className={styles.columnWrapper}>
                    {content &&
                        content.map((element, i) => 
                            <div className={styles.jobSeparator} key={i}>
                                    <h4 className={styles.titleJob}>{element.company}</h4>
                                <div className={styles.rowData}>
                                    <div className={styles.labelCell}>Fecha:</div>
                                    <div className={styles.dataCell}>{element.dateInit} / {element.dateEnd}</div>
                                </div>
                                <div className={styles.rowData}>
                                    <div className={styles.labelCell}>Duración:</div>
                                    <div className={styles.dataCell}>{element.duration}</div>
                                </div>
                                <div className={styles.rowData}>
                                    <div className={styles.labelCell}>Descripción:</div>
                                    <div className={styles.dataCell}>{element.description}</div>
                                </div>
                                {element.tags &&
                                    <div className={styles.rowData}>
                                        <div className={styles.labelCell}>Tags:</div>
                                        <div className={styles.dataCell}>{element.tags.map((e, i) => i <= 0 ? e : `, ${e}` )}</div>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </PageLayout>
    )
}
export default Experiencie;

export const content = [
    {
        company: 'Blink Learning',
        dateInit: '2018',
        dateEnd: 'actualidad',
        duration: '2 años',
        description: 'Responsable del equipo de desarrollo front-end con cinco personas a mi cargo. Desarrollo del proyecto de renovación de la interface de la plataforma con la tecnología React Native.',
        tags: ['React Native', 'ES6', 'Functional programming', 'Redux', 'Webpack', 'Jest', 'Styled components']
    },
    {
        company: 'Páginas Amarillas',
        dateInit: '2011',
        dateEnd: '2018',
        duration: '7 años',
        description: 'Programador web full stack. Desarrollo de herramientas internas para el equipo de fulfillment y supervisión de los desarrollos de estudios externos.',
        tags: ['Javascript', 'AngularJs', 'PHP', 'API']
    },
    {
        company: 'Código Visual',
        dateInit: '2007',
        dateEnd: '2011',
        duration: '4 años',
        description: 'Desarrollador web full stack. Desarrollo de proyectos web completos para clientes como Michelin, Häagen-Dazs, Euromaster, Agencia Española de Anunciantes...',
        tags: ['Wordpress', 'Javascript', 'PHP', 'API', 'ActionScript']
    },
    {
        company: 'Escuela Trazos',
        dateInit: '2007',
        dateEnd: '2007',
        duration: '2 meses',
        description: 'Profesor susituto de Adobe Flash y ActionScript.',
        tags: ['Adobe Flash', 'ActionScript']
    },
    {
        company: 'Novotecni',
        dateInit: '2007',
        dateEnd: '2007',
        duration: '6 meses',
        description: 'Digitalización de mapas catastrales.'
    },
    {
        company: 'Editorial Bruño',
        dateInit: '2001',
        dateEnd: '2007',
        duration: '6 años',
        description: 'Administrativo y gestión de control.'
    }
];