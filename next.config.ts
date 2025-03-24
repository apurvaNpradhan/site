import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    transpilePackages: ['next-mdx-remote'],
    experimental: {
        viewTransition: true,
    },
    /* config options here */
}

export default nextConfig
