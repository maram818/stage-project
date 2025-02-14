import styles from '../page.module.css';

const PartnerCard = (props) => (
  <div className={styles.partnerCard}>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
);
const Partners = () => {
  const partnerData = [
    { title: "Partenariat Technologique", description: "Pour les entreprises souhaitant intégrer nos technologies dans leurs opérations." },
    { title: "Partenariat Commercial", description: "Destiné aux distributeurs et revendeurs intégrant nos solutions dans leur offre." },
    { title: "Partenariat de Développement", description: "Pour les entreprises ayant des besoins spécifiques en développement logiciel." },
    { title: "Partenariat de Recherche et Innovation", description: "Collaboration avec instituts et entreprises pour développer des projets innovants." }
  ];

  return (
    <section className={styles.partners}>
      <h2>Notre Plan de Partenariat</h2>
      <p>
        Chez Verdanova Solutions, nous offrons différents types de partenariats adaptés aux besoins 
        et aux objectifs de nos partenaires. Notre mission est de collaborer avec des entreprises, 
        distributeurs et institutions pour développer des solutions technologiques innovantes.
      </p>
      
      <div className={styles.partnerTypes}>
        {partnerData.map((partner, index) => (
          <PartnerCard key={index} title={partner.title} description={partner.description} />
        ))}
      </div>
      
      <p>
        En rejoignant notre réseau de partenaires, vous bénéficiez d’un accompagnement 
        personnalisé, d’une expertise technique et d’un suivi régulier pour assurer le 
        succès de votre projet.
      </p>
    </section>
  );
};

export default Partners;
