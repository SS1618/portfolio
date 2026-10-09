import type { NextConfig } from 'next';

// GitHub Pages project sites live at /<repository-name>/; user/organization
// sites (username.github.io) and custom-domain sites live at the domain root.
// GitHub Actions sets NEXT_BASE_PATH automatically in the workflow. Leave it
// unset for local development.
const basePath = process.env.NEXT_BASE_PATH || '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
