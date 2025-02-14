import styles from '../page.module.css';

const Testimonials = () => (
  <div id="avis" className={styles.testimonials}>
    <h2>Les avis des clients</h2>
    <div className={styles.quote}>
      <p>
        Verdanova Solutions a transformé notre présence numérique. Grâce à
        leur expertise en développement web et à leur approche sur-mesure, notre
        site web est désormais plus rapide, plus intuitif et parfaitement adapté
        à nos besoins
      </p>
    </div>
    <div className={styles.quote}>
      <p>
        Leur équipe est incroyablement professionnelle et réactive. Nos
        attentes ont été surpassées, et nous sommes ravis du résultat.
      </p>
    </div>
    <div className={styles.quote}>
      <p>
        Collaborer avec Verdanova Solutions a été une excellente expérience.
        Leur créativité et leur savoir-faire sont exemplaires.
      </p>
    </div>
  </div>
);

export default Testimonials;