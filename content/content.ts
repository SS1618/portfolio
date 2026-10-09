export type Article = {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  status: 'Read note' | 'Planned';
  published: boolean;
};

// Only entries with published: true should link to a live article.
export const articles: Article[] = [
  {
    slug: 'thinking-about-llm-inference',
    date: 'NOTE 001',
    title: 'A first-principles model of LLM inference',
    description: 'A practical framework for reasoning about prefill, decode, compute throughput, memory bandwidth, and the KV cache before reaching for a profiler.',
    tags: ['LLMs', 'Inference', 'Systems'],
    status: 'Planned',
    published: false,
  },
  {
    slug: 'gpu-memory-hierarchy',
    date: 'NOTE 002',
    title: 'A mental model for GPU memory hierarchy',
    description: 'How registers, shared memory, caches, and global memory shape the design of a fast kernel.',
    tags: ['GPU', 'CUDA', 'Performance'],
    status: 'Planned',
    published: false,
  },
  {
    slug: 'mechanistic-interpretability-experiments',
    date: 'NOTE 003',
    title: 'Mechanistic interpretability as experimental science',
    description: 'A workflow for turning a question about model behavior into a falsifiable, reproducible experiment.',
    tags: ['Interpretability', 'Research'],
    status: 'Planned',
    published: false,
  },
];

export type Project = {
  number: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  state: string;
};

// Projects imported from the existing portfolio at https://github.com/SS1618/ss1618.github.io.
// Descriptions summarize the project's own write-ups; links open the original demos.
export const projects: Project[] = [
  {
    number: '01',
    name: 'Color Rendition of the Prokudin-Gorskii Collection',
    description: 'Reconstructs color photographs from separate red, green, and blue glass-plate exposures. Uses SSIM-based image registration and a coarse-to-fine image pyramid to align larger images efficiently.',
    tags: ['Computer Vision', 'Image Registration', 'SSIM'],
    href: 'https://ss1618.github.io/1/index.html',
    image: 'https://ss1618.github.io/1/media/church.jpg',
    state: 'View project',
  },
  {
    number: '02',
    name: 'Filters and Frequencies',
    description: 'Explores image processing through finite-difference edge detection, Gaussian and high-pass filtering, image sharpening, hybrid images, and multiresolution blending with Gaussian and Laplacian stacks.',
    tags: ['Signal Processing', 'Fourier Analysis', 'Computer Vision'],
    href: 'https://ss1618.github.io/2/index.html',
    image: 'https://ss1618.github.io/2/media/orapple.png',
    state: 'View project',
  },
  {
    number: '03',
    name: 'Face Morphing',
    description: 'Builds facial warps from corresponding landmarks and Delaunay triangulation. Computes midway faces and smooth morph sequences, then explores average face geometry and caricatures.',
    tags: ['Geometry', 'Image Warping', 'Triangulation'],
    href: 'https://ss1618.github.io/3/index.html',
    image: 'https://ss1618.github.io/3/media/george_to_william.gif',
    state: 'View project',
  },
  {
    number: '04',
    name: 'Autostitching Photo Mosaics',
    description: 'Creates panoramas by finding corresponding image points, estimating homographies, warping images into a shared coordinate system, and blending the aligned views.',
    tags: ['Homographies', 'Image Registration', 'Panoramas'],
    href: 'https://ss1618.github.io/4/index.html',
    image: 'https://ss1618.github.io/4/media/disp13.png',
    state: 'View project',
  },
  {
    number: '05',
    name: 'Diffusion Models',
    description: 'Investigates text-conditioned image generation and diffusion sampling, then builds and trains denoising U-Nets and a DDPM for handwritten-digit generation. Also explores image editing and conditioning.',
    tags: ['Generative Models', 'Deep Learning', 'PyTorch'],
    href: 'https://ss1618.github.io/5/index.html',
    image: 'https://ss1618.github.io/5/media/fig138.png',
    state: 'View project',
  },
  {
    number: '06',
    name: 'Neural Radiance Fields',
    description: 'Starts with a 2D coordinate-to-color neural representation, then develops NeRF concepts including sinusoidal positional encoding and learning scene representations from sampled pixels and viewpoints.',
    tags: ['Neural Networks', '3D Vision', 'Positional Encoding'],
    href: 'https://ss1618.github.io/Final/index.html',
    image: 'https://ss1618.github.io/Final/media/fig25.gif',
    state: 'View project',
  },
  {
    number: '07',
    name: 'Handshake Robot',
    description: 'A robotics project exploring a robot that can perform a handshake, presented as a collaborative final-project demo.',
    tags: ['Robotics', 'Hardware', 'Computer Vision'],
    href: 'https://satish.dev/projects/106a_final/',
    image: 'https://ss1618.github.io/media/robot_and_camera.png',
    state: 'View project',
  },
];
