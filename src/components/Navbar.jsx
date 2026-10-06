const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#home">AS<span>.</span></a>
        <ul>
          {links.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a className="nav-email" href="mailto:ansarisoman4077@gmail.com">Let’s talk</a>
      </nav>
    </header>
  );
}
