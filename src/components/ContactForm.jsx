import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const schema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const inputStyle = (hasError) => ({
  width: "100%", padding: "12px 16px", borderRadius: 10,
  border: `1px solid ${hasError ? "#e05c3a" : "#e4d7cf"}`,
  fontFamily: "inherit", fontSize: "1rem",
  color: "var(--color-ink)", background: "var(--bg-card)",
  outline: "none", marginTop: 6,
  transition: "border-color 0.2s",
  boxSizing: "border-box",
});

const labelStyle = {
  display: "grid", fontSize: "0.9rem",
  color: "var(--color-ink)", fontWeight: 600,
};

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [errorDetail, setErrorDetail] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus("sending");
    setErrorDetail("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Catch missing env vars before even calling emailjs
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing:", { serviceId, templateId, publicKey });
      setStatus("error");
      setErrorDetail("Configuration error — please contact me directly.");
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: data.user_name,
          user_email: data.user_email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );
      console.log("EmailJS success:", result);
      setStatus("success");
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorDetail(err?.text || err?.message || "Unknown error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "grid", gap: 20 }}>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>
            Your name
            <input type="text" placeholder="Jane Doe" style={inputStyle(errors.user_name)} {...register("user_name")} />
          </label>
          {errors.user_name && <p style={{ color: "#e05c3a", fontSize: "0.8rem", margin: "4px 0 0" }}>{errors.user_name.message}</p>}
        </div>

        <div>
          <label style={labelStyle}>
            Email address
            <input type="email" placeholder="you@example.com" style={inputStyle(errors.user_email)} {...register("user_email")} />
          </label>
          {errors.user_email && <p style={{ color: "#e05c3a", fontSize: "0.8rem", margin: "4px 0 0" }}>{errors.user_email.message}</p>}
        </div>
      </div>

      <div>
        <label style={labelStyle}>
          Subject
          <input type="text" placeholder="What's this about?" style={inputStyle(errors.subject)} {...register("subject")} />
        </label>
        {errors.subject && <p style={{ color: "#e05c3a", fontSize: "0.8rem", margin: "4px 0 0" }}>{errors.subject.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>
          Message
          <textarea rows={5} placeholder="Tell me what you're working on, your timeline, and goals..." style={{ ...inputStyle(errors.message), resize: "vertical" }} {...register("message")} />
        </label>
        {errors.message && <p style={{ color: "#e05c3a", fontSize: "0.8rem", margin: "4px 0 0" }}>{errors.message.message}</p>}
      </div>

      {status === "success" && (
        <div style={{ padding: "14px 20px", borderRadius: 10, background: "#d1fae5", border: "1px solid #6ee7b7", color: "#065f46", fontWeight: 500 }}>
          ✅ Message sent! I'll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div style={{ padding: "14px 20px", borderRadius: 10, background: "#fee2e2", border: "1px solid #fca5a5", color: "#991b1b", fontWeight: 500 }}>
          ❌ Something went wrong.{errorDetail && ` (${errorDetail})`} Please email koechjosphat27@gmail.com directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || status === "sending"}
        style={{
          width: "fit-content", padding: "12px 32px", borderRadius: 999,
          border: "none", background: isSubmitting ? "#d4956e" : "#c97d60",
          color: "#fff", fontWeight: 600, fontSize: "1rem",
          cursor: isSubmitting ? "not-allowed" : "pointer", transition: "background 0.2s",
        }}
      >
        {isSubmitting || status === "sending" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
