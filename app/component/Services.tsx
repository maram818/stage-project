import Image from 'next/image';
import styles from './Services.module.css';

function Services (){
    return (
        <>
            {/* Section Services */}
            <section id="services" className={styles.servicesSection}>
                <div className={styles.sr}>
                    <h2>Services</h2>
                    <div className={styles.servicesList}>

                        {/* Service : Intelligence Artificielle */}
                        <div className={styles.serviceCard}>
                            <h4>Intelligence artificielle</h4>
                            <Image 
                                src="/Imaged-removebg-preview.png" 
                                alt="Intelligence artificielle"
                                width={100} 
                                height={100} 
                                className={styles.serviceImage}
                            />
                        </div>

                        {/* Service : Solution Cloud */}
                        <div className={styles.serviceCard}>
                            <h4>Solution Cloud</h4>
                            <Image 
                                src="/Imagec-removebg-preview.png" 
                                alt="Solution Cloud"
                                width={100} 
                                height={100} 
                                className={styles.serviceImage}
                            />
                        </div>

                        {/* Service : Consultation Technique */}
                        <div className={styles.serviceCard}>
                            <h4>Consultation Technique</h4>
                            <Image 
                                src="/image a.png" 
                                alt="Consultation technique"
                                width={100} 
                                height={100} 
                                className={styles.serviceImage}
                            />
                        </div>

                        {/* Service : Développement Web et Mobile */}
                        <div className={styles.serviceCard}>
                            <h4>Développement Web et Mobile</h4>
                            <Image 
                                src="/Imageb-removebg-preview.png" 
                                alt="Développement web et mobile"
                                width={100} 
                                height={100} 
                                className={styles.serviceImage}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Section Processus de Travail */}
            <section className={styles.processSection}>
                <h2>Notre Processus de Travail</h2>
                <div className={styles.processTimeline}>
                    <div className={styles.processStep}>
                        <div className={styles.processIcon}>🔍</div>
                        <h3>Étude de Besoin</h3>
                        <p>Analyse des objectifs et contraintes du projet</p>
                    </div>
                    <div className={styles.processStep}>
                        <div className={styles.processIcon}>📊</div>
                        <h3>Analyse du Problème</h3>
                        <p>Identification des défis techniques et fonctionnels.</p>
                    </div>
                    <div className={styles.processStep}>
                        <div className={styles.processIcon}>🎨</div>
                        <h3>Design de la Solution</h3>
                        <p>Conception UX/UI et plan technique.</p>
                    </div>
                    <div className={styles.processStep}>
                        <div className={styles.processIcon}>💻</div>
                        <h3>Développement</h3>
                        <p>Codage et intégration des fonctionnalités.</p>
                    </div>
                    <div className={styles.processStep}>
                        <div className={styles.processIcon}>✅</div>
                        <h3>Test & Déploiement</h3>
                        <p>Validation et mise en ligne du projet.</p>
                    </div>
                    <div className={styles.processStep}>
                        <div className={styles.processIcon}>🔄</div>
                        <h3>Maintenance</h3>
                        <p>Support technique et améliorations continues.</p>
                    </div>
                </div>
                <a href="#contact" className={styles.processCta}>Contactez-nous</a>
            </section>
        </>
    );
};

export default Services;
