import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#home", icon: "✦" },
  { label: "ABOUT", href: "#about", icon: "♟" },
  { label: "CASE STUDY", href: "#case-study", icon: "✣" },
  { label: "PLAYGROUND", href: "#playground", icon: "◈" },
];

const skills = [
  { label: "Interaction Design", className: "skill-yellow", mark: "✦" },
  { label: "Prototyping", className: "skill-green", mark: "✺" },
  { label: "User Research", className: "skill-pink", mark: "✿" },
  { label: "Motion Design", className: "skill-blue", mark: "••" },
];

const portraitOne =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85";
const portraitTwo =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85";
const workspaceImage =
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeLinecap="square" strokeWidth="1.7" />
    </svg>
  );
}

function PhotoCard({
  alt,
  caption,
  className,
  image,
}: {
  alt: string;
  caption: string;
  className: string;
  image: string;
}) {
  return (
    <figure className={`photo-card ${className}`}>
      <span className="photo-tape photo-tape--left" aria-hidden="true" />
      <span className="photo-tape photo-tape--right" aria-hidden="true" />
      <div
        aria-label={alt}
        className="photo-image"
        role="img"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function TandemPreview() {
  return (
    <div className="visual-frame" aria-label="Tandem finance dashboard preview" role="img">
      <span className="visual-tape visual-tape--left" aria-hidden="true" />
      <span className="visual-tape visual-tape--right" aria-hidden="true" />
      <div className="mock-browser">
        <div className="mock-browser-bar">
          <span />
          <span />
          <span />
          <small>tandem / overview</small>
        </div>
        <div className="mock-browser-body">
          <aside className="mock-sidebar">
            <b>t.</b>
            <i />
            <i />
            <i />
            <i />
          </aside>
          <div className="mock-dashboard">
            <div className="mock-dashboard-header">
              <div>
                <small>Tuesday, March 24</small>
                <strong>Good morning, Robin</strong>
              </div>
              <span className="mock-avatar">R</span>
            </div>
            <div className="mock-balance-row">
              <div className="mock-balance-card">
                <small>Total balance</small>
                <strong>$24,820.00</strong>
                <span>↗ 12.8% this month</span>
              </div>
              <div className="mock-mini-card">
                <small>Spent this week</small>
                <b>$1,248</b>
                <div className="mock-sparkline" />
              </div>
            </div>
            <div className="mock-lower-grid">
              <div className="mock-chart-card">
                <div className="mock-card-heading">
                  <span>Cash flow</span>
                  <small>Last 30 days⌄</small>
                </div>
                <div className="mock-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <b />
                </div>
              </div>
              <div className="mock-activity-card">
                <div className="mock-card-heading">
                  <span>Recent activity</span>
                  <small>View all</small>
                </div>
                <p><em className="activity-dot activity-dot--yellow" />Whole Foods</p>
                <p><em className="activity-dot activity-dot--pink" />Spotify</p>
                <p><em className="activity-dot activity-dot--green" />Payroll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ForgePreview() {
  return (
    <div
      aria-label="Forge collaboration app preview"
      className="forge-preview"
      role="img"
      style={{ backgroundImage: `url("${workspaceImage}")` }}
    >
      <span className="visual-tape visual-tape--left" aria-hidden="true" />
      <span className="visual-tape visual-tape--right" aria-hidden="true" />
      <div className="forge-window">
        <div className="forge-window-top"><span>forge</span><b>•••</b></div>
        <div className="forge-window-body">
          <div className="forge-window-sidebar"><i /><i /><i /><i /></div>
          <div className="forge-window-content">
            <small>your team, in sync</small>
            <strong>Make room for better work.</strong>
            <div className="forge-people"><i>R</i><i>M</i><i>A</i><i>+</i></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-frame">
      <div className="paper">
        <header className="topbar">
          <Link aria-label="Robin home" className="brand" href="#home">
            <span className="brand-mark brand-mark--pink">●</span>
            <span className="brand-mark brand-mark--yellow">✦</span>
            <span className="brand-mark brand-mark--green">◎</span>
          </Link>

          <nav aria-label="Primary navigation" className="primary-nav">
            {navItems.map((item) => (
              <Link
                className={`nav-link ${item.label === "HOME" ? "is-active" : ""}`}
                href={item.href}
                key={item.label}
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <span className="nav-round nav-round--yellow" aria-hidden="true">in</span>
            <span className="nav-round nav-round--pink" aria-hidden="true">◎</span>
            <span className="nav-round nav-round--green" aria-hidden="true">◉</span>
            <Link className="contact-button" href="#contact">
              <span aria-hidden="true">♥</span> CONTACT
            </Link>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-topline">
              <span className="eyebrow-pill eyebrow-pill--mint">made things</span>
              <span className="hand-note">my name is <span>⌁⌁</span></span>
              <span className="eyebrow-pill eyebrow-pill--yellow">sweat the details</span>
            </div>

            <div className="nameplate">
              <span>ROBIN</span>
            </div>

            <div className="hero-role-row">
              <span className="role-tag role-tag--yellow">Product Designer</span>
              <span className="availability"><i /> open to new work and good problems</span>
              <span className="role-tag role-tag--mint">Chicago, IL</span>
            </div>

            <div className="hero-statement">
              <div
                aria-label="Robin portrait"
                className="mini-portrait mini-portrait--left"
                role="img"
                style={{ backgroundImage: `url("${portraitOne}")` }}
              />
              <h1>
                <span className="hero-line">
                  I design software that <span className="green-dot">●</span>
                </span>
                <span className="hero-line">
                  gets out of your way. <span className="flower">✿</span>
                </span>
              </h1>
              <div
                aria-label="Workspace portrait"
                className="mini-portrait mini-portrait--right"
                role="img"
                style={{ backgroundImage: `url("${portraitTwo}")` }}
              />
            </div>

            <Link className="primary-button" href="#contact">
              <span className="button-icon" aria-hidden="true">↗</span> contact me
            </Link>
            <span className="hero-doodle" aria-hidden="true">↝</span>
          </section>

          <div aria-hidden="true" className="section-divider" />

          <section className="about" id="about">
            <p className="section-note">about me!</p>
            <h2 className="about-heading">what&apos;s up</h2>

            <div className="about-body">
              <PhotoCard
                alt="A person wearing a cap outdoors"
                caption="hello!"
                className="photo-card--left"
                image={portraitOne}
              />

              <div className="about-copy">
                <p>
                  I&apos;m a product designer who gets a little too excited about making
                  complicated things feel simple.
                </p>
                <p>
                  <span className="sparkle" aria-hidden="true">✦</span> I care about the small
                  details, the edge cases everyone forgets, and shipping work that genuinely
                  makes someone&apos;s day easier. <span aria-hidden="true">🎨</span>
                </p>
              </div>

              <PhotoCard
                alt="A bright product design studio"
                caption="my workplace"
                className="photo-card--right"
                image={portraitTwo}
              />
            </div>

            <div className="skill-cloud" aria-label="Design skills">
              {skills.map((skill) => (
                <span className={`skill-tag ${skill.className}`} key={skill.label}>
                  {skill.label} <b aria-hidden="true">{skill.mark}</b>
                </span>
              ))}
            </div>
          </section>

          <section className="work" id="case-study">
            <div className="work-heading-row">
              <div>
                <p className="section-note">selected work</p>
                <h2>things I&apos;ve made</h2>
              </div>
              <p className="work-aside">A few products, a lot of<br />questions, zero boring pixels.</p>
            </div>

            <div className="project-tabs" aria-label="Project list">
              <span className="project-tab project-tab--blue">✦ &nbsp;project 01</span>
              <span className="project-tab project-tab--black">✦ &nbsp;project 02</span>
              <span className="project-tab project-tab--yellow">✦ &nbsp;project 03</span>
            </div>

            <div className="project-stack">
              <article className="project-card project-card--dark">
                <div className="project-info">
                  <p className="project-date"><i /> mar 2, 2026</p>
                  <h3>Tandem</h3>
                  <p className="project-description">
                    From &quot;who owes who&quot; to money that finally feels shared.
                  </p>
                  <Link className="project-link project-link--light" href="#contact">
                    view project <ArrowUpRight />
                  </Link>
                </div>
                <TandemPreview />
              </article>

              <article className="project-card project-card--yellow">
                <div className="project-info">
                  <p className="project-date"><i /> jan 2, 2026</p>
                  <h3>Forge</h3>
                  <p className="project-description">
                    Getting a new engineer from day one to shipping without the panic.
                  </p>
                  <Link className="project-link" href="#contact">
                    view project <ArrowUpRight />
                  </Link>
                </div>
                <ForgePreview />
              </article>
            </div>
          </section>

          <section className="playground" id="playground">
            <div className="playground-intro">
              <p className="section-note">playground</p>
              <h2>tiny experiments<br />with big feelings.</h2>
              <p>Interfaces, illustrations, and useful little things that did not fit in a case study.</p>
              <Link className="text-link" href="#contact">come say hi <ArrowUpRight /></Link>
            </div>
            <div className="playground-grid" aria-label="Playground experiments">
              <div className="experiment experiment--pink"><span>01</span><b>good<br />ideas</b><i>✦</i></div>
              <div className="experiment experiment--blue"><span>02</span><b>tiny<br />tools</b><i>↗</i></div>
              <div className="experiment experiment--yellow"><span>03</span><b>strange<br />loops</b><i>◌</i></div>
            </div>
          </section>
        </main>

        <footer className="site-footer" id="contact">
          <div>
            <p className="section-note">have a good one?</p>
            <h2>Let&apos;s make something <em>useful.</em></h2>
          </div>
          <a className="footer-email" href="mailto:hello@robin.design">
            hello@robin.design <ArrowUpRight />
          </a>
          <div className="footer-bottom">
            <span>© 2025 Robin / made with curiosity</span>
            <span>Chicago, IL &nbsp;·&nbsp; <a href="#home">back to top ↑</a></span>
          </div>
        </footer>
      </div>
    </div>
  );
}
