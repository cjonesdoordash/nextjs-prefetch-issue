'use client'

import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      On client
      <Link href={'/en/testing/test'} prefetch={false}>
        To Testing Test
      </Link>
    </div>
  )
}
