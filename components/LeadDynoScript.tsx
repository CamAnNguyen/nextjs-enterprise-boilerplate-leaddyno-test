'use client';

import Script from 'next/script';

export default function LeadDynoScript() {
  return (
    <Script
      src="https://static.leaddyno.com/js"
      onLoad={() => {
        const w = window as any;
        if (w.LeadDyno) {
          w.LeadDyno.devTools.setServerUrl('https://collector-prod01.cloud.leaddyno.com/')
          w.LeadDyno.key = "a091aaa2dc11038f6f1824d1078ab6548b1c3f06";
          w.LeadDyno.recordVisit();
          w.LeadDyno.autoWatch();
        }
      }}
    />
  );
}
