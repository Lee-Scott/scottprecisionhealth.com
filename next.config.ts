const nextConfig = {
  output: 'standalone',
  // Required for Cloudflare/OpenNext 2026 builds
  images: { unoptimized: true } 
};

export default nextConfig;
