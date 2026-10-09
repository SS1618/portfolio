import { projects } from "../../content/content";

export default function Projects() {
  return (
    <main className="page-main">
      <div className="page-intro">
        <p className="kicker">WORKBENCH / 002—</p>
        <h1>
          Projects & <span className="accent">experiments.</span>
        </h1>
        <p>
          A collection of computer vision, image processing, and machine
          learning projects. Each entry links to the original write-up and
          demonstrations.
        </p>
      </div>
      <div className="project-grid project-grid-page">
        {projects.map((project) => (
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
            <h2>{project.name}</h2>
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
      <div className="note-box">
        <span className="note-symbol">i</span>
        <p>
          These entries link to the original project pages. The Handshake Robot
          entry links to its external project demo.
        </p>
      </div>
    </main>
  );
}
