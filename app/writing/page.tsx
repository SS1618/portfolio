import Link from "next/link";
import { articles } from "../../content/content";

export default function Writing() {
  return (
    <main className="page-main">
      <div className="page-intro">
        <p className="kicker">FIELD NOTES / 001—</p>
        <h1>
          Writing & <span className="accent">research.</span>
        </h1>
        <p>
          Technical explorations, implementation notes, and explanations built
          from first principles. The aim is to show the reasoning—not just the
          result.
        </p>
      </div>
      <div className="filter-note">
        TOPICS <span>LLMs · SYSTEMS · GPU · INTERPRETABILITY · MATH</span>
      </div>
      <div className="article-list">
        {articles.map((article) => {
          const content = (
            <>
              <span className="article-index">{article.date}</span>
              <div className="article-main">
                <div className="article-status">
                  {article.published ? "AVAILABLE TO READ" : "PLANNED TOPIC"}
                </div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <div className="tag-row">
                  {article.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="article-arrow" aria-hidden="true">
                {article.published ? "↗" : "·"}
              </span>
            </>
          );
          return article.published ? (
            <Link
              className="article-row article-static"
              href={`/writing/${article.slug}`}
              key={article.slug}
            >
              {content}
            </Link>
          ) : (
            <article className="article-row article-static" key={article.slug}>
              {content}
            </article>
          );
        })}
      </div>
      <div className="note-box">
        <span className="note-symbol">i</span>
        <p>
          Planned topics are labeled as such. As new notes are written, this
          index can grow to include source citations, code, figures,
          mathematical notation, and reproducibility details.
        </p>
      </div>
    </main>
  );
}
