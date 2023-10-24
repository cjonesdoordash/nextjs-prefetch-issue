import React from 'react'

export const dynamic = 'force-dynamic'

export default async function Root({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetch('https://catfact.ninja/fact')
  const json = await data.json()
  return (
    <html lang={'en'}>
      <body>
        <p>{json.fact}</p>
        {children}
      </body>
    </html>
  )
}
