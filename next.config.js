/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
			{
				protocol: "https",
				hostname: "pngimg.com",
			},
		],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
//https://fakestoreapi.com/
//https://links.papareact.com/f90
//https://pngimg.com
