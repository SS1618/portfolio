import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // Replace with your real domain before deployment.
  title: {
    default: "Your Name — Systems, ML & the math in between",
    template: "%s — Your Name",
  },
  description:
    "Technical notes and projects on local LLMs, inference, GPU programming, mechanistic interpretability, and systems performance.",
  openGraph: {
    title: "Your Name — Systems, ML & the math in between",
    description:
      "Technical notes and projects on local LLMs, inference, GPU programming, and interpretability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <footer className="footer">
            <span>Built with curiosity, not templates.</span>
            <span>© {new Date().getFullYear()} Your Name</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
