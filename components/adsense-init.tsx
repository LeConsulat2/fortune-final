'use client';

import Script from 'next/script';

export default function AdsenseInit() {
  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1474915913713685"
      crossOrigin="anonymous"
    />
  );
}
