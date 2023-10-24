import { Suspense } from 'react'

export default function IndexPage() {
  return (
    <Suspense fallback="page-loader">
      <div>
        <p>hi</p>
      </div>
    </Suspense>
  )
}
