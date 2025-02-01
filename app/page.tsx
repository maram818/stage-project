
import Image from 'next/image';
import styles from './page.module.css';
import Header from './component/Header';
import Link from 'next/link';
import About from './component/About';
import Projets from './component/Projets';
import Services from './component/Services';
import Contact from './component/Contact';
export default function Home() {
  return (
    <main>
      <Header />
      <About/> 
      <Services/>
      <Projets/>
    <Contact/>

      <section className={ styles.partners}>
        <div className="testimonials">
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
        <div className={styles.partners}>
          <h2>Partenaires</h2>
          <div className="partner-logos">
            <div className="lg"></div>
            <div className="lg"></div>
            <div className="lg"></div>
            <div className="lg"></div>
            <div className="lg"></div>
            <div className="lg"></div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <ul className={styles.links}>
          <h2>Links</h2>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#projects">Why Choose Us</Link>
          </li>
          <li>
            <Link href="#services">Nos Services</Link>
          </li>
          <li>
            <Link href="#contact">Reviews</Link>
          </li>
        </ul>
        <ul className={styles.Contacts}>
          <h2>Contacts</h2>
          <li>Phone: +216 53 605 685</li>
          <li>Email: Verdanova.solutions@gmail.com</li>
          <li>Adresse:  CyberParc- Monastir 5000- Tunisie.</li>
        </ul>
        <div className="styles.social-media">
          <h3>Suivez-nous</h3>
          <ul>
            <li>
              <Link href="#">
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                [Facebook]
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                [Instagram]
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="/linkedin(2).png" alt="LinkedIn" width={24} height={24} />
                Verdano Solutions
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );}

  