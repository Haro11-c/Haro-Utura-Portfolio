/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },

    // Allow your phone/tablet to access the dev server (your IP)
    allowedDevOrigins: ['192.168.200.26'],
};

export default nextConfig;