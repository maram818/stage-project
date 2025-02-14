import styles from '../page.module.css';
export default function About() {
    return (<section id="about" className={styles.section}>
        <div className={styles.container}>
          <h2>About Us</h2>
          <p>
          Verdanova Solutions est une entreprise spécialisée dans le développement technologique, offrant des solutions numériques innovantes adaptées à divers secteurs. Son approche est centrée sur l'innovation, la satisfaction client et la croissance durable. L'équipe est dirigée par Jasser Ben Saad (CEO), Rayen Ben Saad (CTO), et Rihab Ayeb (COO).
          </p>
        </div>
        <div id="choose" className={styles.container}>
          <h2>Why Choose Us?</h2>
          <p>
          Verdanova Solutions conçoit des solutions digitales sur mesure pour optimiser votre activité. Avec une approche innovante et centrée sur le client, nous offrons des plateformes sécurisées, intuitives et performantes. Faites le choix de l’efficacité et de la fiabilité !
          </p>
        </div>
      </section>)}