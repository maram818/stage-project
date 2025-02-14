"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  { id: "intelligence-artificielle", title: "Intelligence Artificielle", image: "/Imaged-removebg-preview.png", description: "Nous utilisons l'IA pour automatiser vos tâches et améliorer l'efficacité de vos processus. Profitez de solutions intelligentes pour analyser des données et prédire des tendances." },
  { id: "consultation-technique", title: "Consultation Technique", image: "/image a.png", description: "Obtenez des conseils experts pour optimiser vos projets, choisir les bonnes technologies et résoudre vos défis techniques efficacement." },
  { id: "solution-cloud", title: "Solution Cloud", image: "/Imagec-removebg-preview.png", description: "Avec nos solutions Cloud, vous pouvez stocker et gérer vos données en toute sécurité, tout en accédant à vos fichiers depuis n'importe où et à tout moment." },
  { id: "developpement-web-mobile", title: "Développement Web et Mobile", image: "/Imageb-removebg-preview.png", description: "Nous créons des sites web et des applications mobiles adaptés à vos besoins. De l’idée à la réalisation, nous vous accompagnons à chaque étape." }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <section
      id="services"
      className={`${styles.servicesSection} ${selectedService ? styles.expandedSection : ''}`}
      onClick={(e) => {
        // Fermer la section si on clique en dehors des détails
        if (e.target instanceof HTMLElement && e.target.closest(`.${styles.serviceDetails}`) === null) {
          setSelectedService(null);
        }
      }}
    >
      <h2>Nos Services</h2>
      <div className={styles.servicesList}>
        {services.map((service) => (
          <div
            key={service.id}
            className={styles.serviceCard}
            onClick={(e) => {
              e.stopPropagation(); // Empêcher la fermeture immédiate du détail
              setSelectedService(service.id);
            }}
          >
            <h4>{service.title}</h4>
            <Image src={service.image} alt={service.title} width={100} height={100} className={styles.serviceImage} />
          </div>
        ))}
      </div>

      {selectedServiceData && (
        <div className={styles.serviceDetails} aria-live="polite">
          <h2>{selectedServiceData.title}</h2>
          <p>{selectedServiceData.description}</p>
          <button onClick={() => setSelectedService(null)}>Retour aux services</button>
        </div>
      )}
    </section>
  );
}
