import Image from 'next/image';
import styles from './page.module.css';
import Header from './component/Header';
import Link from 'next/link';
import About from './component/About';
import Projets from './component/Projets';
import Services from './component/Services';
import Contact from './component/Contact';

import Partners from './component/Partners';
import Footer from './component/Footer';
import Testimonials from './component/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Services />
      <Partners />
      <Projets />
      <Testimonials/>
      <Contact />
      <Footer />
    </main>
  );
}