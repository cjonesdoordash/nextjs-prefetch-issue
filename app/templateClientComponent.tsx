'use client'

import React from 'react'

export const TemplateClientComponent = ({
  children,
  isInner,
  seconds,
}: React.PropsWithChildren<{ isInner?: boolean; seconds: number }>) => {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div style={{ padding: '32px', border: '1px solid black' }}>
        <p>{isInner ? 'Inner' : ''} Template Client Component</p>
        <p>Seconds from server {seconds}</p>
        <p>Counter: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      {children}
    </>
  )
}
