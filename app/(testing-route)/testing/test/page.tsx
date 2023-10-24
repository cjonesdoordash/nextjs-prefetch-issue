import { Suspense } from 'react'
import ClientComponent from './client-component'

export default function IndexPage() {
  return (
    <Suspense fallback={<div>inner page loader</div>}>
      <div>
        <p>Inner page on Server</p>
        <ClientComponent />
      </div>
    </Suspense>
  )
}
