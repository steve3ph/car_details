/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript: {
        ignoreBuildErrorsL: true,
    }
}

module.exports = nextConfig
