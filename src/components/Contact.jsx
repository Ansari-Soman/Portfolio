import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="page-section contact-section">
      <p className="eyebrow">Contact</p>
      <h2>Let’s talk.</h2>
      <a className="button button-dark" href="mailto:ansarisoman4077@gmail.com">
        Email Ansari <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
