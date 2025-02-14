"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <h2>Links</h2>
        <li>
          <Link href="#about">About Us</Link>
        </li>
        <li>
          <Link href="#choose">Why Choose Us</Link>
        </li>
        <li>
          <Link href="#services">Nos Services</Link>
        </li>
        <li>
          <Link href="#avis">Reviews</Link>
        </li>
      </ul>

      <ul className={styles.Contacts}>
        <h2>Contacts</h2>
        <li>Phone: +216 53 605 685</li>
        <li>Email: Verdanova.solutions@gmail.com</li>
        <li>Adresse: CyberParc- Monastir 5000- Tunisie.</li>
      </ul>

      <div className={styles.socialmedia}>
        <h3>Suivez-nous</h3>
        <ul>
          <li>
            <Link href="#">
              <Image src="/github.png" alt="Github" width={24} height={24} />
              [Github]
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/twiter.png" alt="Instagram" width={24} height={24} />
              [Twiter]
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/verdanova-solutions/posts/?feedView=all">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
              [LinkedIn]
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
