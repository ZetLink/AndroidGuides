// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

export const locales = {
	root: { label: 'English', lang: 'en' },
	es: { label: 'Español', lang: 'es' },
};

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Android Guides',
        lastUpdated: true,
        social: {
            github: 'https://github.com/ZetLink',
            telegram: 'https://t.me/ZetLinkUwU',
        },
        locales,
        sidebar: [
            {
                label: 'Beginning',
                translations: {
                    es: 'Comezando',
                },
                items: [
                    { label: 'Preparations', slug: 'starting/preparations', translations: {es: 'Preparación',} },
                    { label: 'Download ROM Source', slug: 'starting/download-rom', translations: {es: 'Descargando fuente de la ROM',}},
                    { label: 'Download DeviceTree', slug: 'starting/download-dt', translations: {es: 'Descargando árbol del dispositivo',} },
                ],
            },
            {
                label: 'Compilation Time',
                translations: {
                    es: 'Hora de Compilar',
                },
                items: [
                    { label: 'Compile LineageOS', slug: 'compile/compile-rom', translations: {es: 'Compilar LineageOS',} },
                    { label: 'Compile Derpfest', slug: 'compile/compile-derp', translations: {es: 'Compilar Derpfest',} },
                ],
            },
            {
                label: 'Extra Guides',
                translations: {
                    es: 'Guias Extras',
                },
                items: [
                    { label: 'Install ADB/Fastboot (Windows)', slug: 'extra/install-adb', translations: {es: 'Instalar ADB/Fastboot (Windows)',} },
                    { label: 'Install Custom ROM', slug: 'extra/install-rom', translations: {es: 'Instalar Custom ROM',} },
                ],
            },
        ],
		}), markdoc()],
});