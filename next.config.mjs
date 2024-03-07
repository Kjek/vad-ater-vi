import nextPWA from 'next-pwa';
// @ts-ignore
import defaultRuntimeCaching from 'next-pwa/cache.js';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.js'));

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: defaultRuntimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default withPWA(config);
