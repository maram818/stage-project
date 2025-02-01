"use client"; // Ajout de cette ligne

import { useState } from "react";
import style from "./Contact.module.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost/verdano_api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setStatus(result.success ? "Message envoyé avec succès !" : "Erreur : " + result.error);

    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id={style.contact}  className="contact">
      <div className={style.container}>
        <h2>Contactez-nous</h2>
        {status && <p>{status}</p>}
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Écrire votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Écrire votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message(s)"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <section className={style.s}>
            <button type="submit">Envoyer</button>
            <button type="button">Demander devis</button>
          </section>
        </form>
      </div>
    </section>
  );
}
