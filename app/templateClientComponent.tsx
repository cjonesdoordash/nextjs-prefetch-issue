'use client'

import React from 'react'

export const TemplateClientComponent = ({
  children,
  seconds,
}: React.PropsWithChildren<{ seconds: number }>) => {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div style={{ padding: '32px', border: '1px solid black' }}>
        <p>Template Client Component</p>
        <p>Seconds from server {seconds}</p>
        <p>Counter: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      {children}
    </>
  )
}
