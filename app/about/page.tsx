export default function About() {
  return (
    <main className="page-main">
      <div className="page-intro">
        <p className="kicker">A LITTLE CONTEXT / 003—</p>
        <h1>
          Engineer by trade.
          <br />
          <span className="accent">Curious by default.</span>
        </h1>
        <p>
          I work as a software engineer at Bloomberg and have a background in
          computer science and mathematics. Outside of day-to-day engineering,
          I’m drawn to problems where understanding the details changes what’s
          possible.
        </p>
      </div>
      <div className="about-layout">
        <section>
          <p className="kicker">WHAT I LIKE WORKING ON</p>
          <h2>Questions at the seams.</h2>
          <p>
            How does a model use its internal representations? When does
            inference become memory-bound? What does a GPU kernel leave on the
            table? Which mathematical abstractions help explain a system—and
            which ones hide the important details?
          </p>
          <p>
            I like building small experiments to answer concrete questions,
            measuring the result, and writing down what I learn so someone else
            can reproduce it or challenge the conclusion.
          </p>
        </section>
        <aside className="about-aside">
          <p className="kicker">CURRENT INTERESTS</p>
          {[
            "Local language models",
            "Mechanistic interpretability",
            "GPU programming",
            "Inference performance",
            "Algorithms & numerical methods",
          ].map((x, i) => (
            <div className="about-interest" key={x}>
              <span>0{i + 1}</span>
              {x}
            </div>
          ))}
        </aside>
      </div>
      <div className="note-box">
        <span className="note-symbol">✎</span>
        <p>
          Personalize this page with your education, a few specific projects or
          contributions, and the kind of problems you want to work on. Keep
          employer details factual and avoid sharing confidential work.
        </p>
      </div>
    </main>
  );
}
