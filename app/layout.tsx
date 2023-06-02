export const dynamic = 'force-dynamic'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body>{children}</body>
    </html>
  )
}
