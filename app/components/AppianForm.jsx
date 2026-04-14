"use client";

import Script from "next/script";

export default function AppianForm() {
  return (
    <div>
      <Script
        src="https://pragmacol-p.appiancloud.com/suite/tempo/ui/sail-client/embeddedBootstrap.nocache.js"
        id="appianEmbedded"
        strategy="afterInteractive"
      />

      {/* Componente embebido de Appian */}
      <appian-action processModelUuid="0002ef99-dd45-8000-faf9-7f0000014e7a" />
    </div>
  );
}
