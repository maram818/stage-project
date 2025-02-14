"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type:"",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendData = async (e: FormEvent, type: string) => {
    e.preventDefault();
  
    // Replace these with your EmailJS credentials
    const serviceID = "service_nyapr0j";
    const templateID = "template_82squer";
    const publicKey = "l6kRE_zWPB9GsHri5";
  
    try {
      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          to_name: "verdanova solutions", // Replace with your name (the recipient)
          from_name: formData.name, // From the form
          message: formData.message, // From the form
          email: formData.email, // Optional: Include the sender's email
          type: type, // Optional: Include the type (contact or devis)
        },
        publicKey
      );
  
      if (response.status === 200) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "",type:"" }); // Clear the form
      } else {
        setStatus("Erreur lors de l'envoi.");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi.");
      console.error("Erreur EmailJS :", error);
    }
  };

  return (
    <section id="contact" className={style.sectionContact}>
      <div className={style.container}>
        <h2>Contactez-nous</h2>
        <form className={style.form}>
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
            <button type="button" onClick={(e) => sendData(e, "contact")}>
              Envoyer
            </button>
            <button type="button" onClick={(e) => sendData(e, "devis")}>
              Demander devis
            </button>
          </section>
        </form>
        {status && <p className={style.statusMessage}>{status}</p>}
      </div>
    </section>
  );
}