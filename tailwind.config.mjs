/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				violeta: "#6D31ED",
				azul: "#15ABFF",
				rosa: "#FF56A5",
				amarillo: "#FFD317",
				naranja: "#F9623E",
				verde: "#62CD14"
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
}
