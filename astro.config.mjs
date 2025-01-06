// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Android Guides',
			lastUpdated: true,
			social: {
				github: 'https://github.com/withastro/starlight',
				telegram: 'https://t.me/ZetLinkUwU',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Preparations', slug: 'starting/preparations' },
						{ label: 'Download ROM Source', slug: 'starting/download-rom' },
						{ label: 'Download DeviceTree', slug: 'starting/download-dt' },
					],
				},
				{
					label: 'Compilation Time',
					items: [
						{ label: 'Compile LineageOS', slug: 'compile/compile-rom' },
						{ label: 'Compile Derpfest', slug: 'compile/compile-derp' },
					],
				},
				{
					label: 'Extra',
					items: [
						{ label: 'Install ADB', slug: 'extra/install-adb' },
						{ label: 'Install Custom ROM', slug: 'extra/install-rom' },
					],
				},
			],
		}),
	],
});
