import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  images: {
    unoptimized: true, // Easiest way to handle query strings for local dev busts
  },
};

export default withNextIntl(nextConfig);
