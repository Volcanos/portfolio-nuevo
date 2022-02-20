import styles from "../styles/Home.module.scss";
import HomeLayout from "../layouts/HomeLayout";
import Image from 'next/image';
import profilePic from '../public/images/borja.jpg'

export default function Home() {
  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <div className={styles.paragraphWrapper}>
          <Image src={profilePic} alt="Borja, programador web"/>
        </div>
        <div className={styles.paragraphWrapper}>
          Desarrollador web desde hace más de 15 años. Especializado en
          tecnologías frontend como ReactJS, React Native o Javascript puro,
          también tengo un amplio conocimiento del desarrollo backend siendo
          Javascript y PHP los lenguajes que más domino.
        </div>
        <div className={styles.paragraphWrapper}>
          Haber trabajado como freelance me ha permitido tener una visión global
          de todas la fases de un proyecto de desarrollo web. Desde el análisis
          de objetivos y la toma de requisitos, pasando por el diseño de UX, el
          desarrollo, testeo y puesta en producción.
        </div>
        <div className={styles.paragraphWrapper}>
          Busco nuevos proyectos con los que seguir creciendo y aprendiendo y en
          los que pueda aportar mi experiencia y mi resolución.
        </div>
      </div>
    </HomeLayout>
  );
}
