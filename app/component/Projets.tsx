import styles from './projet.module.css';

export default function Projets() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.pr}>
        <h2>Nos Réalisations</h2>
        <p>
          Le portfolio de Verdano Solutions présente nos projets et réalisations, 
          mettant en avant notre savoir-faire dans la création de solutions numériques sur mesure.
          Nous travaillons avec passion pour aider nos clients à concrétiser leurs idées et atteindre leurs objectifs.
        </p>
      </div>

      <div className={styles.project}>
        <div className={styles.projectText}>
          <h3> WeeFarm</h3>
          <p>
            WeeFarm est une solution de cloud farming web et mobile destinée à aider les agriculteurs à gérer efficacement 
            leurs cultures grâce à la technologie et à connecter les différents intervenants du secteur agricole 
            dans un espace en ligne interactif. Vous pouvez visiter le site de WeeFarm.<br />
            <a href="https://wee-farm.com" target="_blank" className={styles.button}>Accéder au site</a>
          </p>
        </div>
        <div className={styles.projectImages}>
          <img src="/weefarm-removebg-preview.png" alt="Capture WeeFarm 1" />
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectText}>
          <h3> Base</h3>
          <p>
            Base est une plateforme vitrine et d’exposition permettant aux entreprises de présenter leurs solutions numériques 
            de manière interactive. Elle est conçue pour différents types de sociétés cherchant à accroître leur visibilité 
            et à attirer de nouveaux clients.<br />
            <a href="https://Base.com" target="_blank" className={styles.button}>Accéder au site</a>
          </p>
        </div>
        <div className={styles.projectImages}>
          <img src="/Base.png" alt="Capture Base 1" />
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectText}>
          <h3>Bliss</h3>
          <p>
            Bliss est une plateforme web dynamique, conçue pour faciliter les interactions entre entreprises et clients. 
            Elle offre un environnement optimisé pour la gestion des transactions et la présentation des services 
            à travers une interface intuitive et sécurisée.<br />
            <a href="https://Bliss.com" target="_blank" className={styles.button}>Accéder au site</a>
          </p>
        </div>
        <div className={styles.projectImages}>
          <img src="/Bliss-removebg-preview.png" alt="Capture Bliss 1" />
        </div>
      </div>
    </section>
  );
}
