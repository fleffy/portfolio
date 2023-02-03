/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fleffy-portfolio-db.pockethost.io',
			},
		],
	},
}

module.exports = nextConfig
