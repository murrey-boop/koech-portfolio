import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      form.current,
      "PUBLIC_KEY"
    );

    alert("Message Sent");
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Email"
      />

      <textarea
        name="message"
        placeholder="Message"
      />

      <button>Send</button>
    </form>
  );
}