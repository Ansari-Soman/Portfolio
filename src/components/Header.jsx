import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <section id="home" className="page-section hero">
      <p className="eyebrow">Software Developer · Bhiwandi, India</p>
      <h1>Hi, I’m Ansari Soman.</h1>
      <p className="hero-copy">
        Software developer building full stack web applications.
      </p>
      <div className="hero-actions">
        <a className="button button-dark" href="#projects">
          View my work <ArrowDown size={16} aria-hidden="true" />
        </a>
        <a
          className="button button-light"
          href="/Soman-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View resume <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <p className="hero-contact">
        <a href="mailto:ansarisoman4077@gmail.com">ansarisoman4077@gmail.com</a>
        <span aria-hidden="true">·</span>
        <a href="tel:+919322160429">+91 93221 60429</a>
      </p>
    </section>
  );
}
