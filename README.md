# Technical Portfolio Starter

A dark, editorial portfolio starter for a software engineer focused on systems, machine learning, GPU programming, and technical writing. Built with Next.js, React, and TypeScript; styling is plain CSS to keep the foundation easy to customize.

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Publish with GitHub Pages

This project is configured for Next.js static export and includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository for the portfolio. For a standard project site, any repository name works (for example, `portfolio`). For a root URL such as `https://YOUR-USERNAME.github.io/`, name the repository `YOUR-USERNAME.github.io`.
2. Push the contents of this project to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and watch the **Deploy portfolio to GitHub Pages** workflow. Once it succeeds, the deployment URL will be shown in the workflow summary and in Settings → Pages.

The workflow automatically sets the correct base path for a project site (`https://YOUR-USERNAME.github.io/REPOSITORY/`) and for a user/organization site (`https://YOUR-USERNAME.github.io/`). It builds the static site into `out/` and deploys that folder. New commits to `main` trigger a new deployment.

To test a static build locally, run:

```bash
npm run build
```

The exported site will be written to `out/`. The local build uses the domain root by default. The GitHub Actions workflow sets the repository-specific base path during deployment.

### Custom domain

Configure the domain under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. If you use a custom domain with a project repository, set `NEXT_BASE_PATH` to an empty string in the workflow's **Configure GitHub Pages base path** step so assets are served from the domain root.

## First edits

1. Replace `Your Name` and `yourusername` in `components/site-header.tsx`, `app/layout.tsx`, and `content/content.ts`.
2. Update the email in `app/page.tsx` (`you@example.com`).
3. Replace the example projects in `content/content.ts` with real GitHub repositories and accurate summaries.
4. Keep suggested article ideas marked as planned until the article is actually written and linked to a working page.
5. Add your education and a few specific, non-confidential details to `app/about/page.tsx`.
6. Replace `https://example.com` in `app/layout.tsx` with your deployed URL for correct metadata.

## Static hosting limitations

GitHub Pages serves static files; it does not run a Next.js server. Static pages, CSS, client-side JavaScript, and build-time-generated content work. Server-dependent features such as API routes, request-time rendering, and server actions do not. Images use `unoptimized: true` so the build does not depend on Next.js's server image optimizer.

## Design notes

The starter uses a restrained dark palette, lime accent, editorial typography, monospace metadata, responsive layouts, and reduced-motion support. Google Fonts are loaded remotely; replace with self-hosted fonts if you prefer no external font requests.
