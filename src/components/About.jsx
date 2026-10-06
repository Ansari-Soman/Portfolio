const skills = [
  ["JavaScript", "/assets/JS.png"],
  ["React", "/assets/React.png"],
  ["Tailwind", "/assets/Tailwind.png"],
  ["Bootstrap", "/assets/Bootstrap.png"],
  ["Node.js", null],
  ["Express", null],
  ["MongoDB", "/assets/mongodb.png"],
  ["Git", "/assets/git.png"],
  ["GitHub", null],
  ["VS Code", "/assets/vscode.png"],
];

const experience = [
  {
    role: "Software Developer",
    company: "Cloudsmaya Private Limited",
    dates: "July 2026 – Present",
  },
  {
    role: "Web/Application Platform Intern",
    company: "Cloudsmaya Private Limited",
    dates: "July 2024 – December 2024",
  },
];

export default function About() {
  return (
    <section id="about" className="page-section content-section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Experience &amp; skills</h2>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <h3 className="subheading">Experience</h3>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.role}>
                <div className="experience-topline">
                  <div>
                    <h4>{item.role}</h4>
                    <p className="muted">{item.company}</p>
                  </div>
                  <span className="date-label">{item.dates}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside>
          <h3 className="subheading">Technical skills</h3>
          <ul className="stack-cards" aria-label="Technical stack">
            {skills.map(([skill, icon]) => (
              <li key={skill} title={skill}>
                {icon ? <img src={icon} alt="" loading="lazy" /> : <span className="stack-monogram" aria-hidden="true">{skill === "Express" ? "ex" : skill === "GitHub" ? "gh" : "js"}</span>}
                <span>{skill}</span>
              </li>
            ))}
          </ul>
          <div className="education">
            <h3 className="subheading">Education</h3>
            <h4>B.Sc. in Information Technology</h4>
            <p>B.N.N. College, Bhiwandi · 2026</p>
            <p className="muted">CGPA: 9.02 / 10</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
