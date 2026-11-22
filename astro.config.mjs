// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: { label: 'English', lang: 'en' },
	es: { label: 'Español', lang: 'es' },
};

export default defineConfig({
	redirects: {
		'/extra/install-adb': '/en/extra/install-adb',
		'/extra/install-rom': '/en/extra/install-rom',
	},
	integrations: [
		starlight({
			title: 'Android Guides',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es',
				}
			},
			lastUpdated: true,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ZetLink' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/ZetLinkUwU' },
			],
			sidebar: [
				{
					label: 'Extra Guides',
					translations: { es: 'Guias Extras',},
					items: [
						{ label: 'Install ADB/Fastboot (Windows)', slug: 'extra/install-adb', translations: {es: 'Instalar ADB/Fastboot (Windows)',} },
						{ label: 'Install Custom ROM', slug: 'extra/install-rom', translations: {es: 'Instalar Custom ROM',} },
					],
				},
			],
		}),
	],
});
