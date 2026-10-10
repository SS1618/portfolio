import Link from "next/link";
import { articles, projects } from "../content/content";

const interests = [
  "Local LLMs",
  "Inference optimization",
  "GPU programming",
  "Mechanistic interpretability",
  "Numerical methods",
  "Systems performance",
];

export default function Home() {
  const publishedArticles = articles.filter((article) => article.published);
  const featuredProjects = projects.slice(0, 2);

  return (
    <main>
      <section className="hero">
        <div className="eyebrow">
          <span className="status-dot" /> SOFTWARE ENGINEER
        </div>
        <h1>
          Understanding systems
          <br />
          from <span className="accent">first principles.</span>
        </h1>
        <p className="hero-copy">
          I’m a software engineer with a background in computer science and
          mathematics. I’m interested in the boundary between algorithms,
          hardware, and intelligence—and in making complex systems faster,
          clearer, and easier to reason about.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/writing">
            Read my writing <span>↗</span>
          </Link>
          <Link className="button button-quiet" href="/projects">
            Explore projects <span>→</span>
          </Link>
        </div>
        <div className="hero-meta">
          <span>Currently exploring</span>
          <span className="meta-line" />
          <span>LLM systems / GPU kernels / interpretability</span>
        </div>
      </section>

      <section className="section interests-section">
        <div className="section-heading">
          <div>
            <p className="kicker">01 / THE TERRITORY</p>
            <h2>Curiosity, down to the metal.</h2>
          </div>
          <p className="section-note">Questions I keep coming back to.</p>
        </div>
        <div className="interest-grid">
          {interests.map((item, i) => (
            <div className="interest" key={item}>
              <span className="interest-index">0{i + 1}</span>
              <span>{item}</span>
              <span className="interest-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="kicker">02 / THE WORKBENCH</p>
            <h2>Experiments & projects.</h2>
          </div>
          <Link className="text-link" href="/projects">
            Project index <span>→</span>
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <a
                className="project-image-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name}`}
              >
                <img
                  className="project-thumbnail"
                  src={project.image}
                  alt={`Preview for ${project.name}`}
                  loading="lazy"
                />
              </a>
              <div className="card-top">
                <span className="card-number">PROJECT / {project.number}</span>
                <span className="card-icon" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="card-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.state} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section writing-section">
        <div className="section-heading">
          <div>
            <p className="kicker">03 / FIELD NOTES</p>
            <h2>Writing to understand.</h2>
          </div>
          <Link className="text-link" href="/writing">
            Writing index <span>→</span>
          </Link>
        </div>
        <div className="article-list">
          {publishedArticles.map((article) => (
            <Link
              className="article-row"
              href={`/writing/${article.slug}`}
              key={article.slug}
            >
              <span className="article-index">{article.date}</span>
              <div className="article-main">
                <div className="article-status">AVAILABLE TO READ</div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="tag-row">
                  {article.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="article-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="kicker">GOOD QUESTIONS WELCOME</p>
          <h2>Let’s reason from the details.</h2>
          <p>
            I’m interested in thoughtful technical conversations, open-source
            collaboration, and ideas that can be tested with code, math, and
            measurement.
          </p>
        </div>
        <Link className="button button-primary" href="/about">
          A little more about me <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
