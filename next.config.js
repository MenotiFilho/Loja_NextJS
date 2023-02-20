/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
		],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
//https://fakestoreapi.com/
