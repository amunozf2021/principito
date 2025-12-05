"use client";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-N8899S23"
        strategy="afterInteractive"
      />
      <Script id="analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-N8899S23');
        `}
      </Script>
    </>
  );
}
