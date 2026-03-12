"use client";
import { useState, useEffect, useRef } from "react";

const posts = [
  {
    title: "I Ran 378 Miles Because My Friend Said 28 Was \"Too Easy\" and Called It a Birthday",
    date: "2026",
    slug: "/writing/378-miles",
    tags: ["running", "life"],
  },
  {
    title: "The Weirdest Market You Depend On Every Day",
    date: "coming soon",
    slug: "#",
    tags: ["energy"],
  },
];

const projects = [
  {
    title: "Lessons from the Trenches: Building Lumindt",
    desc: "Four years building a deep tech hardware company. What I learned, what broke, and what I'd do differently.",
    tags: ["hardware", "founder"],
    year: "coming soon",
    link: "#",
  },
  {
    title: "The QGen Model: First Principles in Hardware",
    desc: "Why buy expensive modeling software when you can build a cheapo test set-up for better data?",
    tags: ["hardware", "engineering"],
    year: "coming soon",
    link: "#",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className={`root ${mounted ? "mounted" : ""}`}>
      <div className="noise" />
      <div ref={cursorRef} className="cursor" />

      {/* NAV */}
      <nav className="nav">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          MR
        </button>
        <div className="nav-links">
          {["about", "projects", "writing"].map((s) => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className={`hero-inner ${mounted ? "in" : ""}`}>
          <p className="hero-eyebrow">curious by nature. engineer by trade.</p>
          <h1 className="hero-name">Mia<br />Rath.</h1>
          <p className="hero-body">
            I&apos;m obsessed with whatever everything else is built on top of. I want to understand it, get close to it, and help build it.
            Also I half vibe-coded this website.
          </p>
          <button className="hero-cta" onClick={() => scrollTo("about")}>
            scroll down
          </button>
        </div>

        <div className={`hero-photo-wrap ${mounted ? "in" : ""}`}>
          <div className="hero-photo">
            <img src="/miarath.jpg" alt="Mia Rath" style={{width:"100%", height:"100%", objectFit:"cover"}} />
          </div>
          <p className="photo-caption">me with one of my favorite foods: rotisserie chicken</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="sec-label">/ ABOUT</div>
        <div className="about-wrap">
          <div className="about-text">
            <p>
            I got into engineering because I wanted to understand how the physical world actually works. Badly enough that, without formal schooling, I probably would've gotten myself killed figuring it out. In middle school, I blew the fuse box at my parents' house by chaining like 5 plug adapters together into the wall. (They've since forgiven me.) Math and science drew me in because they were the fundamental rules underneath everything. Certain laws just can't be broken in the universe. Once you have that framework, you can approach almost any problem. It transfers.
            </p>
            <p>
            That curiosity has a pretty specific flavor though. I’m drawn to what things are foundationally built on. Materials are the building blocks of the physical world. Energy is the building block of modern technology, especially now with AI. Nobody glamorizes these fields but everything runs on them. I think about this stuff more than is probably healthy. That being said I don't just sit and think, I build too.
            </p>
            <p>
            I spent four years building a deep tech hardware company. It was really fun and really hard. I did a lot of the dirty, scrappy engineering work. But I also helped run the whole thing. Fundraising, product strategy, sales, supply chain, building and keeping a team together. I'm an engineer at heart and will always want to be close to the thing being built, but I'm also not just an engineer anymore and I think that's a good thing.
            </p>
            <p>
              Outside of that: I do endurance running, play guitar (ask me about my vintage &apos;63 Mustang!), and am weirdly into MMA. I love the outdoors, as long as there&apos;s no snow. I&apos;m bad at small talk but great at hard problems, which I think is a reasonable tradeoff. My girlfriend says I&apos;m earnest. My friends say I&apos;m funny. Both are probably true and I&apos;m not sure what to do with either.
            </p>
            <p className="about-edu">
              BS Aerospace Engineering &nbsp;&middot;&nbsp; MS Materials Science (dropped out of the PhD. no regrets.)
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="sec-label">/ PROJECTS</div>
        <p className="section-sub">things i&apos;ve built or worked on</p>
        <div className="projects-list">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className={`project-row ${hoveredProject !== null && hoveredProject !== i ? "dim" : ""}`}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <span className="proj-year">{p.year}</span>
              <div className="proj-main">
                <span className="proj-title">{p.title}</span>
                <span className="proj-desc">{p.desc}</span>
              </div>
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <span className="proj-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="section">
        <div className="sec-label">/ WRITING</div>
        <p className="writing-desc">not a blog. not a substack. just things i think about long enough to write down.</p>
        <div className="posts-list">
          {posts.map((p, i) => (
            <a key={i} href={p.slug} className="post-row">
              <div className="post-main">
                <span className="post-title">{p.title}</span>
                <div className="post-meta">
                  <span className="post-date">{p.date}</span>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <span className="post-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-l">
          <span className="footer-name">Mia Rath</span>
          <span className="footer-sub">curious by nature. engineer by trade.</span>
        </div>
        <div className="footer-links">
          <a href="#" className="flink">email</a>
          <a href="#" className="flink">linkedin</a>
          <a href="#" className="flink">github</a>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fraunces:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #f5f0e8;
          --surface: #eee8d8;
          --border: #d8d0c0;
          --text: #18140e;
          --muted: #8a8070;
          --accent: #e8704a;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Mono', monospace;
          overflow-x: hidden;
          cursor: none;
        }

        .cursor {
          width: 10px; height: 10px;
          background: var(--accent);
          border-radius: 50%;
          position: fixed; top: 0; left: 0;
          pointer-events: none; z-index: 9999;
          transition: transform 0.07s ease;
        }

        .noise {
          position: fixed; inset: 0; z-index: 998;
          pointer-events: none; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 1rem 2.5rem;
          background: rgba(245,240,232,0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem; letter-spacing: 0.12em;
          color: var(--accent);
          background: none; border: none; cursor: none;
        }
        .nav-links { display: flex; gap: 2rem; }
        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem; color: var(--muted);
          background: none; border: none; cursor: none;
          letter-spacing: 0.08em;
          transition: color 0.15s;
        }
        .nav-link:hover { color: var(--text); }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          padding: 9rem 2.5rem 4rem;
          max-width: 1100px;
          margin: 0 auto;
          align-items: center;
        }
        .hero-inner {
          display: flex; flex-direction: column; gap: 1.5rem;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-inner.in { opacity: 1; transform: translateY(0); }
        .hero-eyebrow {
          font-size: 0.72rem; color: var(--muted);
          letter-spacing: 0.1em;
        }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4.5rem, 11vw, 9rem);
          line-height: 0.88; letter-spacing: 0.02em;
          color: var(--text);
        }
        .hero-body {
          font-family: 'Fraunces', serif;
          font-size: 1.1rem; line-height: 1.75;
          color: #4a4438; max-width: 480px;
        }
        .hero-cta {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          background: none;
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 0.6rem 1.2rem;
          cursor: none; width: fit-content;
          transition: border-color 0.15s, color 0.15s;
        }
        .hero-cta:hover { border-color: var(--accent); color: var(--accent); }

        /* PHOTO */
        .hero-photo-wrap {
          display: flex; flex-direction: column;
          align-items: center; gap: 1rem;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .hero-photo-wrap.in { opacity: 1; transform: translateY(0); }
        .hero-photo {
          width: 100%; aspect-ratio: 3/4;
          border: 2px solid var(--border);
          background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 0.5rem;
          max-width: 280px;
        }
        .photo-icon { font-size: 2rem; }
        .photo-hint { font-size: 0.65rem; color: var(--muted); }
        .photo-caption {
          font-family: 'Fraunces', serif;
          font-style: italic; font-size: 0.78rem;
          color: var(--muted); text-align: center;
          max-width: 240px;
        }

        /* SECTIONS */
        .section {
          padding: 6rem 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
          border-top: 1px solid var(--border);
        }
        .sec-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.95rem; letter-spacing: 0.2em;
          color: var(--accent); margin-bottom: 2.5rem;
        }

        /* ABOUT */
        .about-wrap { max-width: 1100px; }
        .about-text p {
          font-family: 'Fraunces', serif;
          font-size: 1rem; line-height: 1.85;
          color: #4a4438; margin-bottom: 1.25rem;
        }
        .about-edu {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem; color: var(--muted);
          font-style: italic;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          margin-top: 0.5rem;
        }

        .section-sub {
          font-size: 0.75rem; color: var(--muted);
          font-style: italic; margin-bottom: 2rem;
          margin-top: -1.5rem;
        }

        /* PROJECTS */
        .projects-list { display: flex; flex-direction: column; }
        .project-row {
          display: grid;
          grid-template-columns: 55px 1fr auto 28px;
          gap: 1.5rem; align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .project-row.dim { opacity: 0.2; }
        .proj-year { font-size: 0.65rem; color: var(--muted); }
        .proj-main { display: flex; flex-direction: column; gap: 0.3rem; }
        .proj-title {
          font-family: 'Fraunces', serif;
          font-size: 1.05rem; color: var(--text);
        }
        .proj-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.5; }
        .proj-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: flex-end; }
        .tag {
          font-size: 0.6rem; color: var(--muted);
          border: 1px solid var(--border);
          padding: 0.15rem 0.45rem;
        }
        .proj-arrow { color: var(--muted); font-size: 0.85rem; transition: color 0.15s, transform 0.15s; }
        .project-row:hover .proj-arrow { color: var(--accent); transform: translateX(3px); }

        /* WRITING */
        .writing-desc {
          font-size: 0.75rem; color: var(--muted);
          font-style: italic; margin-bottom: 2rem;
        }
        .posts-list { display: flex; flex-direction: column; }
        .post-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.4rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .post-row:hover { opacity: 0.6; }
        .post-main { display: flex; flex-direction: column; gap: 0.5rem; }
        .post-title {
          font-family: 'Fraunces', serif;
          font-size: 1rem; color: var(--text); font-style: italic;
        }
        .post-meta { display: flex; gap: 0.6rem; align-items: center; }
        .post-date { font-size: 0.63rem; color: var(--muted); }
        .post-arrow { color: var(--muted); font-size: 0.85rem; margin-left: 1.5rem; flex-shrink: 0; transition: color 0.15s, transform 0.15s; }
        .post-row:hover .post-arrow { color: var(--accent); transform: translateX(3px); }

        /* FOOTER */
        .footer {
          border-top: 1px solid var(--border);
          padding: 2.5rem;
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer-l { display: flex; flex-direction: column; gap: 0.3rem; }
        .footer-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem; letter-spacing: 0.08em;
          color: var(--text);
        }
        .footer-sub { font-size: 0.63rem; color: var(--muted); font-style: italic; }
        .footer-links { display: flex; gap: 1.5rem; }
        .flink {
          font-size: 0.68rem; color: var(--muted);
          text-decoration: none; letter-spacing: 0.05em;
          transition: color 0.15s;
        }
        .flink:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; min-height: auto; padding-top: 7rem; }
          .hero-photo-wrap { align-items: flex-start; }
          .section { padding: 4rem 1.25rem; }
          .hero { padding-left: 1.25rem; padding-right: 1.25rem; }
          .project-row { grid-template-columns: 45px 1fr 24px; }
          .proj-tags { display: none; }
          .footer { flex-direction: column; gap: 1.5rem; align-items: flex-start; padding: 2rem 1.25rem; }
        }
      `}</style>
    </main>
  );
}