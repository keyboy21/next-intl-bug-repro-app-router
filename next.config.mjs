// @ts-check

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: "./messages/ru.json",
		messages: {
			path: './messages',
			format: 'json',
			locales: 'infer',
			precompile: true,
		}
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default (withNextIntl(nextConfig));
