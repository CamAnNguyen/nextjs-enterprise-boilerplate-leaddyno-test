'use client'

import 'styles/tailwind.css'
import LeadDynoScript from '../components/LeadDynoScript';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <LeadDynoScript />
      </head>
      <body>{children}</body>
    </html >
  )
}
