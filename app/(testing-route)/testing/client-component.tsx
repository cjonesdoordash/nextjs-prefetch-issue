'use client'

import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      On client
      <Link prefetch={false} href={'/testing/test'}>
        To Testing Test
      </Link>
    </div>
  )
}
