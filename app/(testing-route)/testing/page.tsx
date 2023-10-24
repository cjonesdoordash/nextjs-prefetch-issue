import { Suspense } from 'react'
import ClientComponent from './client-component'

export default function IndexPage() {
  return (
    <Suspense fallback={<div>page laoder</div>}>
      <div>
        <p>Hello testing page on server</p>
        <ClientComponent />
      </div>
    </Suspense>
  )
}
