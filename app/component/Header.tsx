import Link from "next/link";
import style from './Header.module.css';
import Image from "next/image";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.navContainer}>
                <div className={style.logo}>
                    <Image 
                        src="/logo-removebg-preview.png" 
                        alt="Description de l'image" 
                        width={150} 
                        height={150} 
                    />
                </div>
                <nav>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <Link href="#about" className={style.navLink}>About Us</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="#projects" className={style.navLink}>Projects</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="#services" className={style.navLink}>Services</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="#contact" className={style.navLink}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Link href="#contact" className={style.ctaBtn}>
                    Prendre rendez-vous
                </Link>
            </div>
            <div className={style.titre}>
                <h1 className={style.principale}>
                    Welcome
                    <br />
                    To Verdanova Solutions
                </h1>
                <h2 className={style.slogan}>
                    Accélérez votre succès avec des solutions <br />
                    sur mesure
                </h2>
                <button className={style.btn}>Contactez-nous</button>
                
            </div>
        </header>
    );
}
