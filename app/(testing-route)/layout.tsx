import React from 'react'

export default async function Root({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('rendering inner')
  await new Promise((resolve) => setTimeout(() => resolve('hi'), 4000))
  return (
    <div>
      <p>inner layout</p>
      {children}
    </div>
  )
}
