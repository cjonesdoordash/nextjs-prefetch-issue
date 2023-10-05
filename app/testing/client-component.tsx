'use client'

import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      On client
      <Link href={'/testing/test'} prefetch={false}>
        TO Testing Test
      </Link>
    </div>
  )
}
