/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options: { icon: true }}],
        })

        return config
<<<<<<< Updated upstream
=======
    },
    images: {
        domains: ["images.pexels.com"],
>>>>>>> Stashed changes
    }
}

module.exports = nextConfig
