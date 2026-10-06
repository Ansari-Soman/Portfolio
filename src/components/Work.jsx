import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Full-Stack Todo",
    description: "MERN task manager with OTP signup, secure login, and password recovery.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://todo.somanansari.xyz/login",
    action: "Live demo",
  },
  {
    number: "02",
    title: "Expense Tracker",
    description: "Track income and spending with 30- and 60-day analytics.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Recharts"],
    link: "https://expensetracker.somanansari.xyz/",
    action: "Live demo",
  },
];

export default function Work() {
  return (
    <section id="projects" className="page-section content-section projects-section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">{project.number}</span>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              {project.action} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
