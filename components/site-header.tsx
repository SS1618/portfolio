import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <Link className="wordmark" href="/" aria-label="Home">
        <span className="mark" aria-hidden="true">
          ∴
        </span>
        <span>
          Your Name<span className="wordmark-dot">.</span>
        </span>
      </Link>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/writing">Writing</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
