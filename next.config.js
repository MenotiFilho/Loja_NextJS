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
				hostname: "links.papareact.com",
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
