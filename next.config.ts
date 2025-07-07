import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    /* 다른 experimental 옵션이 있다면 그대로 두고, */
    ppr: false, // ⬅️ Partial Prerendering (PPR) 끄기
  },
};

export default nextConfig;
