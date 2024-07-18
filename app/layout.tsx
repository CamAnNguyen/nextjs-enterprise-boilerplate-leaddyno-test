import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <header>
        <script type="text/javascript" src="https://static.leaddyno.com/js"></script>
        <script>
          LeadDyno.key = "1436ca19da13ab3551eb17ecaf4994bba34819e0"
          LeadDyno.recordVisit();
          LeadDyno.autoWatch();
        </script>
      </header>
      <body>{children}</body>
    </html>
  )
}
